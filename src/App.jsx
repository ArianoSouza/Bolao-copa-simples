import { useEffect, useMemo, useState, useRef } from 'react';
import { jsPDF } from 'jspdf';
import { toPng } from 'html-to-image';
import groupGames, { getGamesWithUpdatedKnockout } from './data/games';
import { getTeamFlag } from './data/teams.js';

const STORAGE_KEY = 'bolao-copa-2026-palpites';

// ==========================================
// RESULTADOS OFICIAIS (Mock para Testes)
// ==========================================
const officialResults = {
  'M1': { home: '2', away: '1' }, // México 2 x 1 África do Sul
  'M2': { home: '1', away: '1' }, // Coreia do Sul 1 x 1 Tchéquia
  'M3': { home: '0', away: '2' }, // Canadá 0 x 2 Bósnia e Herzegovina
  'M4': { home: '3', away: '0' }  // Estados Unidos 3 x 0 Paraguai
};

function calculatePoints(prediction, result) {
  if (!result || result.home === '' || result.away === '' || result.home === undefined) return null; 
  if (!prediction || prediction.home === '' || prediction.away === '') return 0; 

  const pHome = Number(prediction.home);
  const pAway = Number(prediction.away);
  const rHome = Number(result.home);
  const rAway = Number(result.away);

  if (pHome === rHome && pAway === rAway) return 3;

  const predDiff = pHome - pAway;
  const resDiff = rHome - rAway;

  if (
    (predDiff > 0 && resDiff > 0) || 
    (predDiff < 0 && resDiff < 0) || 
    (predDiff === 0 && resDiff === 0)
  ) {
    return 1;
  }

  return 0; 
}

function emptyPrediction() {
  return { home: '', away: '' };
}

function formatDate(date) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit', month: '2-digit', year: 'numeric'
  }).format(new Date(`${date}T12:00:00`));
}

function slugify(text) {
  return String(text)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
}

function groupBySection(list) {
  return list.reduce((acc, game) => {
    const section = game.phase === 'Fase de grupos' ? game.group : game.phase;
    if (!acc[section]) acc[section] = [];
    acc[section].push(game);
    return acc;
  }, {});
}

function getPredictionText(prediction) {
  const home = prediction?.home || '';
  const away = prediction?.away || '';
  if (home === '' && away === '') return '___ x ___';
  return `${home || '_'} x ${away || '_'}`;
}

function isPredictionFilled(prediction) {
  if (!prediction) return false;
  return prediction.home !== '' && prediction.away !== '' && prediction.home !== undefined && prediction.away !== undefined;
}

function TeamName({ name, align = 'left' }) {
  const flag = getTeamFlag(name);
  return (
    <span className={`team-name ${align === 'right' ? 'team-name-right' : ''}`}>
      <span className="flag" title={flag.code}>{flag.flag}</span>
      <span>{name}</span>
    </span>
  );
}

function drawPdfTeam(doc, name, x, y, options = {}) {
  const flag = getTeamFlag(name);
  const alignRight = options.align === 'right';
  const badgeWidth = flag.code.length > 2 ? 12 : 9;
  const textMaxWidth = options.maxWidth || 54;
  const gap = 3;

  if (alignRight) {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(20, 24, 31);
    doc.text(name, x - badgeWidth - gap, y, { align: 'right', maxWidth: textMaxWidth });
    doc.setFillColor(248, 245, 236);
    doc.setDrawColor(222, 32, 43);
    doc.roundedRect(x - badgeWidth, y - 5.2, badgeWidth, 6.6, 2, 2, 'FD');
    doc.setFontSize(5.8);
    doc.setTextColor(6, 28, 64);
    doc.text(flag.code, x - badgeWidth / 2, y - 1, { align: 'center' });
    return;
  }

  doc.setFillColor(248, 245, 236);
  doc.setDrawColor(222, 32, 43);
  doc.roundedRect(x, y - 5.2, badgeWidth, 6.6, 2, 2, 'FD');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(5.8);
  doc.setTextColor(6, 28, 64);
  doc.text(flag.code, x + badgeWidth / 2, y - 1, { align: 'center' });
  doc.setFontSize(10);
  doc.setTextColor(20, 24, 31);
  doc.text(name, x + badgeWidth + gap, y, { maxWidth: textMaxWidth });
}

function drawRoundedRect(doc, x, y, width, height, radius, fillColor, strokeColor) {
  if (fillColor) doc.setFillColor(...fillColor);
  if (strokeColor) doc.setDrawColor(...strokeColor);
  doc.roundedRect(x, y, width, height, radius, radius, fillColor && strokeColor ? 'FD' : fillColor ? 'F' : 'S');
}

export default function App() {
  const [name, setName] = useState('');
  const [search, setSearch] = useState('');
  const [phaseFilter, setPhaseFilter] = useState('Todos');
  const [roundFilter, setRoundFilter] = useState('Todos');
  const [predictions, setPredictions] = useState({});
  const [view, setView] = useState('palpites'); 
  const [importedData, setImportedData] = useState(null); 
  const exportRef = useRef(null);

  // Variáveis ativas baseadas na importação
  const activePredictions = importedData?.predictions || predictions || {};
  const activeName = importedData?.name || name || '';

  const allGames = useMemo(() => {
    return getGamesWithUpdatedKnockout(predictions);
  }, [predictions]);

  const activeGames = useMemo(() => {
    return importedData ? getGamesWithUpdatedKnockout(importedData.predictions) : allGames;
  }, [importedData, allGames]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setName(parsed.name || '');
        setPredictions(parsed.predictions || {});
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ name, predictions }));
  }, [name, predictions]);

  const phases = useMemo(() => {
    return ['Todos', ...new Set(allGames.map((game) => game.phase))];
  }, [allGames]);

  const rounds = useMemo(() => {
    const relevantGames = phaseFilter === 'Todos' 
      ? allGames 
      : allGames.filter(g => g.phase === phaseFilter);
    return ['Todos', ...new Set(relevantGames.map((game) => game.round))];
  }, [allGames, phaseFilter]);

  const filteredGames = useMemo(() => {
    const term = search.trim().toLowerCase();
    const listToFilter = view === 'resultados' ? activeGames : allGames;
    return listToFilter.filter((game) => {
      const matchPhase = phaseFilter === 'Todos' || game.phase === phaseFilter;
      const matchRound = roundFilter === 'Todos' || game.round === roundFilter;
      const matchSearch = !term || [
        game.home, game.away, game.group, game.stadium, game.phase, game.round
      ].join(' ').toLowerCase().includes(term);
      return matchPhase && matchRound && matchSearch;
    });
  }, [allGames, activeGames, search, phaseFilter, roundFilter, view]);

  const sections = useMemo(() => {
    return groupBySection(filteredGames);
  }, [filteredGames]);

  const completed = useMemo(() => {
    return allGames.filter((game) => isPredictionFilled(predictions[game.id])).length;
  }, [allGames, predictions]);

  const totalPoints = useMemo(() => {
    let sum = 0;
    activeGames.forEach((game) => {
      const pts = calculatePoints(activePredictions[game.id], officialResults[game.id]);
      if (pts) sum += pts;
    });
    return sum;
  }, [activeGames, activePredictions]);

  function exportJson() {
    const dataToExport = {
      name: name || 'Participante',
      exportDate: new Date().toISOString(),
      predictions: predictions
    };

    const jsonString = JSON.stringify(dataToExport, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `bolao-copa-2026-${slugify(name || 'palpites')}.json`;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const parsed = JSON.parse(e.target.result);
        if (parsed && parsed.predictions) {
          setImportedData(parsed);
          setView('resultados');
        } else {
          alert('Arquivo JSON inválido ou sem palpites estruturados.');
        }
      } catch (error) {
        alert('Erro ao ler o arquivo.');
      }
    };
    reader.readAsText(file);
    event.target.value = '';
  }

  function exportImage() {
    if (exportRef.current === null) return;

    toPng(exportRef.current, { cacheBust: true, backgroundColor: '#f8f5ec', width: 1400})
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = `bolao-copa-2026-${slugify(name || 'palpites')}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error('Erro ao exportar a imagem:', err);
      });
  }

  function updatePrediction(gameId, side, value) {
    const numericValue = value.replace(/[^0-9]/g, '').slice(0, 2);
    setPredictions((current) => ({
      ...current,
      [gameId]: {
        ...(current[gameId] || emptyPrediction()),
        [side]: numericValue
      }
    }));
  }

  function clearAll() {
    if (window.confirm("Tem certeza que deseja apagar todos os seus palpites?")) {
      setPredictions({});
      setName('');
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  function exportPdf() {
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 14;

    const colors = {
      navy: [6, 28, 64], blue: [0, 88, 184], red: [222, 32, 43], green: [0, 157, 87],
      gold: [255, 184, 28], cream: [248, 245, 236], text: [20, 24, 31], muted: [96, 102, 114]
    };

    const allSections = groupBySection(allGames);
    Object.entries(allSections).forEach(([sectionName, sectionGames], sectionIndex) => {
      if (sectionIndex > 0) doc.addPage();

      doc.setFillColor(...colors.cream); doc.rect(0, 0, pageWidth, pageHeight, 'F');
      doc.setFillColor(...colors.navy); doc.rect(0, 0, pageWidth, 43, 'F');
      doc.setFillColor(...colors.red); doc.rect(0, 0, 48, 4, 'F');
      doc.setFillColor(...colors.gold); doc.rect(48, 0, 48, 4, 'F');
      doc.setFillColor(...colors.green); doc.rect(96, 0, 48, 4, 'F');
      doc.setFillColor(...colors.blue); doc.rect(144, 0, pageWidth - 144, 4, 'F');

      doc.setTextColor(255, 255, 255); doc.setFont('helvetica', 'bold'); doc.setFontSize(18);
      doc.text('Bolão Copa 2026', margin, 18);

      doc.setFont('helvetica', 'normal'); doc.setFontSize(9);
      doc.text(name ? `Participante: ${name}` : 'Participante: ______________________________', margin, 27);
      doc.text(`${completed}/${allGames.length} jogos preenchidos`, margin, 34);

      drawRoundedRect(doc, pageWidth - 64, 12, 50, 18, 4, colors.gold, null);
      doc.setTextColor(...colors.navy); doc.setFont('helvetica', 'bold'); doc.setFontSize(10);
      doc.text(sectionName, pageWidth - 39, 23, { align: 'center' });

      let y = 56;
      doc.setTextColor(...colors.text); doc.setFontSize(15);
      doc.text(sectionName, margin, y);
      y += 9;

      sectionGames.forEach((game) => {
        if (y > 262) {
          doc.addPage();
          doc.setFillColor(...colors.cream); doc.rect(0, 0, pageWidth, pageHeight, 'F');
          y = 22;
        }

        const prediction = predictions[game.id] || emptyPrediction();
        drawRoundedRect(doc, margin, y, pageWidth - margin * 2, 26, 3, [255, 255, 255], [225, 218, 202]);

        doc.setFont('helvetica', 'bold'); doc.setTextColor(...colors.red); doc.setFontSize(8);
        doc.text(`JOGO ${game.matchNumber}`, margin + 5, y + 7);

        doc.setTextColor(...colors.muted); doc.setFont('helvetica', 'normal');
        doc.text(`${formatDate(game.date)} · ${game.time}`, margin + 29, y + 7);

        drawPdfTeam(doc, game.home, margin + 5, y + 17, { maxWidth: 47 });
        drawPdfTeam(doc, game.away, pageWidth - margin - 5, y + 17, { align: 'right', maxWidth: 47 });

        doc.setFontSize(14); doc.setTextColor(...colors.navy);
        doc.text(getPredictionText(prediction), pageWidth / 2, y + 17, { align: 'center' });

        doc.setFont('helvetica', 'normal'); doc.setFontSize(7); doc.setTextColor(...colors.muted);
        doc.text(game.group ? `${game.group} · ${game.stadium}` : game.stadium, margin + 5, y + 23, { maxWidth: pageWidth - margin * 2 - 10 });
        y += 31;
      });
      doc.setFont('helvetica', 'normal'); doc.setFontSize(7); doc.setTextColor(...colors.muted);
      doc.text(`Página ${sectionIndex + 1} de ${Object.keys(allSections).length}`, pageWidth / 2, pageHeight - 8, { align: 'center' });
    });

    doc.save(`bolao-copa-2026-${slugify(name || 'palpites')}.pdf`);
  }

  function exportResultsPdf() {
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 14;

    const allSections = groupBySection(activeGames);
    Object.entries(allSections).forEach(([sectionName, sectionGames], sectionIndex) => {
      if (sectionIndex > 0) doc.addPage();

      doc.setFillColor(248, 245, 236); doc.rect(0, 0, pageWidth, pageHeight, 'F');
      doc.setFillColor(6, 28, 64); doc.rect(0, 0, pageWidth, 43, 'F');
      doc.setTextColor(255, 255, 255); doc.setFont('helvetica', 'bold'); doc.setFontSize(18);
      doc.text('Resultados e Pontuação', margin, 18);

      doc.setFont('helvetica', 'normal'); doc.setFontSize(9);
      doc.text(activeName ? `Participante: ${activeName}` : 'Participante: Não identificado', margin, 27);
      doc.text(`Pontuação Total: ${totalPoints} pontos`, margin, 34);

      let y = 56;
      doc.setTextColor(20, 24, 31); doc.setFontSize(15); doc.setFont('helvetica', 'bold');
      doc.text(sectionName, margin, y);
      y += 9;

      sectionGames.forEach((game) => {
        if (y > 262) {
          doc.addPage();
          doc.setFillColor(248, 245, 236); doc.rect(0, 0, pageWidth, pageHeight, 'F');
          y = 22;
        }

        const prediction = activePredictions[game.id] || emptyPrediction();
        const result = officialResults[game.id];
        const points = calculatePoints(prediction, result);

        drawRoundedRect(doc, margin, y, pageWidth - margin * 2, 26, 3, [255, 255, 255], [225, 218, 202]);

        doc.setFont('helvetica', 'bold'); doc.setTextColor(222, 32, 43); doc.setFontSize(8);
        doc.text(`JOGO ${game.matchNumber}`, margin + 5, y + 7);

        doc.setTextColor(6, 28, 64); doc.setFontSize(10);
        doc.text(`${game.home}  x  ${game.away}`, margin + 5, y + 15);

        doc.setFontSize(8);
        const resText = (result && result.home !== '') ? `Oficial: ${result.home} x ${result.away}` : 'Aguardando';
        doc.setTextColor(0, 157, 87); doc.text(resText, margin + 5, y + 22);

        doc.setTextColor(96, 102, 114);
        doc.text(`Palpite: ${getPredictionText(prediction)}`, pageWidth / 2, y + 22, { align: 'center' });

        if (points !== null) {
          doc.setFont('helvetica', 'bold');
          if (points === 3) doc.setTextColor(0, 157, 87);
          else if (points === 1) doc.setTextColor(255, 184, 28);
          else doc.setTextColor(222, 32, 43);
          doc.text(`${points} PONTOS`, pageWidth - margin - 5, y + 22, { align: 'right' });
        }
        y += 31;
      });
    });

    doc.save(`bolao-resultados-${slugify(activeName || 'participante')}.pdf`);
  }

  return (
    <main className="page">
      <p className="legal-text">
        * Esse site não é ligado a nenhum meio oficial da FIFA e não visa criar ou incentivar apostas esportivas. Nenhum dado é coletado a partir desse site.
      </p>

      <header className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Bolão oficial da galera</span>
          <h1>Bolão Copa 2026</h1>
          <p>Preencha seus palpites jogo a jogo para a Copa do Mundo de 2026. Você pode exportar seus palpites como imagem (png), pdf, ou como dados.</p>
        </div>
        <div className="score-card">
          <strong>{completed}</strong>
          <span>de {allGames.length} jogos preenchidos</span>
        </div>
      </header>

      <div className="tabs">
        <button className={`tab-button ${view === 'palpites' ? 'active' : ''}`} onClick={() => setView('palpites')} >
          Meus Palpites
        </button>
        <button className={`tab-button ${view === 'resultados' ? 'active' : ''}`} onClick={() => setView('resultados')}>
          Resultados e Pontuação
        </button>
      </div>

      <section className="controls">
        <label>Nome do participante
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ex.: João" />
        </label>
        <label>Buscar jogo
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Brasil, final, Grupo A..." />
        </label>
        <label>Fase
          <select value={phaseFilter} onChange={(e) => { setPhaseFilter(e.target.value); setRoundFilter('Todos'); }}>
            {phases.map((phase) => <option key={phase} value={phase}>{phase}</option>)}
          </select>
        </label>
        <label>Rodada
          <select value={roundFilter} onChange={(e) => setRoundFilter(e.target.value)}>
            {rounds.map((round) => <option key={round} value={round}>{round}</option>)}
          </select>
        </label>

        <div className="buttons">
          <button className="primary" onClick={exportPdf}>Baixar PDF</button>
          <button className="primary" onClick={exportImage} style={{ background: 'linear-gradient(135deg, #009d57, #34b373)' }}>Baixar Imagem</button>
          <button className="primary" onClick={exportJson} style={{ background: 'linear-gradient(135deg, #6c5ce7, #a29bfe)', color: '#fff' }}>Exportar dados</button>
          <button className="secondary" onClick={clearAll}>Limpar</button>
        </div>
      </section>

      {view === 'palpites' && (
        <section className="export-area">
          <div className="export-header">
            <div>
              <span className="eyebrow">Copa do Mundo FIFA 2026</span>
              <h2>{name ? `Palpites de ${name}` : 'Meus palpites'}</h2>
            </div>
            <div className="badge">{completed}/{allGames.length}</div>
          </div>

          {Object.entries(sections).map(([section, sectionGames]) => (
            <section className="phase" key={section}>
              <h3>{section}</h3>
              <div className="games-grid">
                {sectionGames.map((game) => {
                  const prediction = predictions[game.id] || emptyPrediction();
                  return (
                    <article className="game-card" key={game.id}>
                      <div className="game-meta">
                        <span>Jogo {game.matchNumber}</span>
                        <span>{formatDate(game.date)} · {game.time}</span>
                      </div>
                      <div className="teams">
                        <span className="team"><TeamName name={game.home} /></span>
                        <input aria-label={`Palpite ${game.home}`} value={prediction.home} onChange={(e) => updatePrediction(game.id, 'home', e.target.value)} inputMode="numeric" placeholder="0" />
                        <strong>x</strong>
                        <input aria-label={`Palpite ${game.away}`} value={prediction.away} onChange={(e) => updatePrediction(game.id, 'away', e.target.value)} inputMode="numeric" placeholder="0" />
                        <span className="team right"><TeamName name={game.away} align="right" /></span>
                      </div>
                      <div className="stadium">
                        {game.group && <span>{game.group}</span>}
                        <span>{game.stadium}</span>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </section>
      )}

      {view === 'resultados' && (
        <section className="export-area results-area">
          <div className="results-toolbar">
            <label className="import-file-button">
              Importar JSON de Amigo
              <input type="file" accept=".json" onChange={handleFileUpload} />
            </label>
            {importedData && (
              <button className="secondary" onClick={() => setImportedData(null)}>Limpar Importação</button>
            )}
            <button className="primary" onClick={exportResultsPdf}>Baixar PDF de Resultados</button>
          </div>

          <div className="scoring-info">
            <h4>Como funciona a pontuação:</h4>
            <ul>
              <li><strong>3 Pontos:</strong> Placar exato</li>
              <li><strong>1 Ponto:</strong> Acertou o vencedor ou empate</li>
              <li><strong>0 Pontos:</strong> Errou o resultado</li>
            </ul>
          </div>

          <div className="export-header">
            <div>
              <span className="eyebrow">Acompanhamento</span>
              <h2>Pontuação de {activeName || 'Participante'}</h2>
            </div>
            <div className="badge total-points-badge">{totalPoints} PONTOS</div>
          </div>

          {Object.entries(sections).map(([section, sectionGames]) => (
            <section className="phase" key={section}>
              <h3>{section}</h3>
              <div className="games-grid">
                {sectionGames.map((game) => {
                  const prediction = activePredictions[game.id] || emptyPrediction();
                  const result = officialResults[game.id];
                  const points = calculatePoints(prediction, result);

                  return (
                    <article className="game-card comparison-card" key={game.id}>
                      <div className="game-meta">
                        <span>Jogo {game.matchNumber}</span>
                        <span>{formatDate(game.date)}</span>
                      </div>
                      <div className="comparison-blocks">
                        <div className="score-block">
                          <span className="label">O Palpite:</span>
                          <strong>{getPredictionText(prediction)}</strong>
                        </div>
                        <div className="score-block real">
                          <span className="label">Placar Oficial:</span>
                          <strong>{result && result.home !== '' ? `${result.home} x ${result.away}` : 'Aguardando'}</strong>
                        </div>
                      </div>
                      <div className="game-footer">
                        <div className="teams-comparison">
                          <span>{game.home}</span> x <span>{game.away}</span>
                        </div>
                        {points !== null ? (
                          <div className={`points-badge ${points === 3 ? 'exact' : points === 1 ? 'partial' : 'wrong'}`}>
                            {points} {points === 1 ? 'Ponto' : 'Pontos'}
                          </div>
                        ) : (
                          <div className="points-badge pending">-</div>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </section>
      )}

      {/* Canvas Oculto Otimizado (Infográfico Vertical) */}
      <div className="export-hidden-wrapper">
        <div className="export-canvas-optimized" ref={exportRef}>
          <header className="export-header-optimized">
            <div className="header-titles">
              <span className="eyebrow-optimized">BolãoZÃO • Copa do Mundo FIFA 2026</span>
              <h1>{name ? `Palpites de ${name}` : 'Meus Palpites'}</h1>
            </div>
            <div className="header-stats">
              <strong>{completed}</strong>
              <span>de {allGames.length} jogos</span>
            </div>
          </header>

          <div className="export-body-optimized">
            {Object.entries(sections).map(([sectionName, sectionGames]) => (
              <div className="export-section" key={sectionName}>
                <h3 className="export-section-title"><span>{sectionName}</span></h3>
                <div className="export-grid-optimized">
                  {sectionGames.map((game) => {
                    const prediction = predictions[game.id] || emptyPrediction();
                    return (
                      <div className="export-card" key={game.id}>
                        <div className="export-card-meta">
                          <span>Jogo {game.matchNumber}</span>
                          <span>{formatDate(game.date)}</span>
                        </div>
                        <div className="export-card-teams">
                          <div className="export-team">
                            <span className="flag">{getTeamFlag(game.home).flag}</span>
                            <span className="team-name">{game.home}</span>
                          </div>
                          <div className="export-scores">
                            <div className="score-box">{prediction.home}</div>
                            <span className="score-divider">x</span>
                            <div className="score-box">{prediction.away}</div>
                          </div>
                          <div className="export-team export-team-right">
                            <span className="team-name">{game.away}</span>
                            <span className="flag">{getTeamFlag(game.away).flag}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          
          <footer className="export-footer">
            Gerado automaticamente • Bolão NÃO OFICIAL Copa 2026 • Esse site não é ligado a nenhum meio oficial da FIFA e não visa incentivar apostas esportivas. 
          </footer>
        </div>
      </div>
    </main>
  );
}
