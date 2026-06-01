import { useEffect, useMemo, useState } from 'react';
import { jsPDF } from 'jspdf';
import { getGamesWithUpdatedKnockout } from './data/games';
import { getTeamFlag } from './data/teams.js';

const STORAGE_KEY = 'bolao-copa-2026-palpites';

function emptyPrediction() {
  return {
    home: '',
    away: '',
    penaltyWinner: ''
  };
}

function formatDate(date) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
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

    if (!acc[section]) {
      acc[section] = [];
    }

    acc[section].push(game);

    return acc;
  }, {});
}

function getPredictionText(prediction) {
  const home = prediction?.home || '';
  const away = prediction?.away || '';

  if (home === '' && away === '') {
    return '___ x ___';
  }

  return `${home || '_'} x ${away || '_'}`;
}

function isPredictionFilled(prediction) {
  if (!prediction) {
    return false;
  }

  const home = prediction.home;
  const away = prediction.away;

  return home !== '' && away !== '' && home !== undefined && away !== undefined;
}

function isKnockoutGame(game) {
  return game.phase !== 'Fase de grupos';
}

function isDrawPrediction(prediction) {
  if (!isPredictionFilled(prediction)) {
    return false;
  }

  return Number(prediction.home) === Number(prediction.away);
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
  if (fillColor) {
    doc.setFillColor(...fillColor);
  }

  if (strokeColor) {
    doc.setDrawColor(...strokeColor);
  }

  doc.roundedRect(
    x,
    y,
    width,
    height,
    radius,
    radius,
    fillColor && strokeColor ? 'FD' : fillColor ? 'F' : 'S'
  );
}

export default function App() {
  const [name, setName] = useState('');
  const [search, setSearch] = useState('');
  const [phaseFilter, setPhaseFilter] = useState('Todos');
  const [predictions, setPredictions] = useState({});

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

  const games = useMemo(() => {
    return getGamesWithUpdatedKnockout(predictions);
  }, [predictions]);

  const phases = useMemo(() => {
    return ['Todos', ...new Set(games.map((game) => game.phase))];
  }, [games]);

  const filteredGames = useMemo(() => {
    const term = search.trim().toLowerCase();

    return games.filter((game) => {
      const matchPhase = phaseFilter === 'Todos' || game.phase === phaseFilter;

      const matchSearch = !term || [
        game.home,
        game.away,
        game.group,
        game.stadium,
        game.phase,
        game.round
      ]
        .join(' ')
        .toLowerCase()
        .includes(term);

      return matchPhase && matchSearch;
    });
  }, [games, search, phaseFilter]);

  const sections = useMemo(() => {
    return groupBySection(filteredGames);
  }, [filteredGames]);

  const completed = useMemo(() => {
  return games.filter((game) => {
    return isPredictionFilled(predictions[game.id]);
  }).length;
}, [games, predictions]);

  function updatePrediction(gameId, side, value) {
    const numericValue = value.replace(/[^0-9]/g, '').slice(0, 2);

    setPredictions((current) => {
      const currentPrediction = current[gameId] || emptyPrediction();

      const updatedGamePrediction = {
        ...emptyPrediction(),
        ...currentPrediction,
        [side]: numericValue
      };

      const home = side === 'home' ? numericValue : updatedGamePrediction.home;
      const away = side === 'away' ? numericValue : updatedGamePrediction.away;

      if (home !== away) {
        updatedGamePrediction.penaltyWinner = '';
      }

      return {
        ...current,
        [gameId]: updatedGamePrediction
      };
    });
  }

  function updatePenaltyWinner(gameId, winner) {
    setPredictions((current) => ({
      ...current,
      [gameId]: {
        ...emptyPrediction(),
        ...(current[gameId] || {}),
        penaltyWinner: winner
      }
    }));
  }

  function clearAll() {
    setPredictions({});
    setName('');
    localStorage.removeItem(STORAGE_KEY);
  }

  function exportPdf() {
    const currentGames = getGamesWithUpdatedKnockout(predictions);

    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 14;

    const colors = {
      navy: [6, 28, 64],
      blue: [0, 88, 184],
      red: [222, 32, 43],
      green: [0, 157, 87],
      gold: [255, 184, 28],
      cream: [248, 245, 236],
      text: [20, 24, 31],
      muted: [96, 102, 114]
    };

    const allSections = groupBySection(currentGames);
    const sectionEntries = Object.entries(allSections);

    sectionEntries.forEach(([sectionName, sectionGames], sectionIndex) => {
      if (sectionIndex > 0) {
        doc.addPage();
      }

      doc.setFillColor(...colors.cream);
      doc.rect(0, 0, pageWidth, pageHeight, 'F');

      doc.setFillColor(...colors.navy);
      doc.rect(0, 0, pageWidth, 43, 'F');

      doc.setFillColor(...colors.red);
      doc.rect(0, 0, 48, 4, 'F');

      doc.setFillColor(...colors.gold);
      doc.rect(48, 0, 48, 4, 'F');

      doc.setFillColor(...colors.green);
      doc.rect(96, 0, 48, 4, 'F');

      doc.setFillColor(...colors.blue);
      doc.rect(144, 0, pageWidth - 144, 4, 'F');

      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(18);
      doc.text('Bolão Copa 2026', margin, 18);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.text(
        name ? `Participante: ${name}` : 'Participante: ______________________________',
        margin,
        27
      );

      doc.text(`${completed}/${currentGames.length} jogos preenchidos`, margin, 34);

      drawRoundedRect(doc, pageWidth - 64, 12, 50, 18, 4, colors.gold, null);

      doc.setTextColor(...colors.navy);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.text(sectionName, pageWidth - 39, 23, { align: 'center' });

      let y = 56;

      doc.setTextColor(...colors.text);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(15);
      doc.text(sectionName, margin, y);

      y += 9;

      sectionGames.forEach((game) => {
        if (y > 262) {
          doc.addPage();

          doc.setFillColor(...colors.cream);
          doc.rect(0, 0, pageWidth, pageHeight, 'F');

          y = 22;
        }

        const prediction = predictions[game.id] || emptyPrediction();

        drawRoundedRect(
          doc,
          margin,
          y,
          pageWidth - margin * 2,
          26,
          3,
          [255, 255, 255],
          [225, 218, 202]
        );

        doc.setFont('helvetica', 'bold');
        doc.setTextColor(...colors.red);
        doc.setFontSize(8);
        doc.text(`JOGO ${game.matchNumber}`, margin + 5, y + 7);

        doc.setTextColor(...colors.muted);
        doc.setFont('helvetica', 'normal');
        doc.text(`${formatDate(game.date)} · ${game.time}`, margin + 29, y + 7);

        drawPdfTeam(doc, game.home, margin + 5, y + 17, { maxWidth: 47 });
        drawPdfTeam(doc, game.away, pageWidth - margin - 5, y + 17, {
          align: 'right',
          maxWidth: 47
        });

        doc.setFontSize(14);
        doc.setTextColor(...colors.navy);
        doc.text(getPredictionText(prediction), pageWidth / 2, y + 17, {
          align: 'center'
        });

        if (
          isKnockoutGame(game) &&
          isDrawPrediction(prediction) &&
          prediction.penaltyWinner
        ) {
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(6.7);
          doc.setTextColor(...colors.green);
          doc.text(`Pênaltis: ${prediction.penaltyWinner}`, pageWidth / 2, y + 23, {
            align: 'center',
            maxWidth: 52
          });
        }

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7);
        doc.setTextColor(...colors.muted);

        const location = game.group ? `${game.group} · ${game.stadium}` : game.stadium;
        doc.text(location, margin + 5, y + 23, {
          maxWidth: pageWidth - margin * 2 - 10
        });

        y += 31;
      });

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7);
      doc.setTextColor(...colors.muted);
      doc.text(`Página ${sectionIndex + 1} de ${sectionEntries.length}`, pageWidth / 2, pageHeight - 8, {
        align: 'center'
      });
    });

    doc.save(`bolao-copa-2026-${slugify(name || 'palpites')}.pdf`);
  }

  return (
    <main className="page">
      <header className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Bolão oficial da galera</span>
          <h1>Bolão Copa 2026</h1>
          <p>
            Preencha seus palpites jogo a jogo. A fase de mata mata será atualizada
            automaticamente com base nos resultados simulados da fase de grupos.
          </p>
        </div>

        <div className="score-card">
          <strong>{completed}</strong>
          <span>de {games.length} jogos preenchidos</span>
        </div>
      </header>

      <section className="controls">
        <label>
          Nome do participante
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Ex.: Ariano"
          />
        </label>

        <label>
          Buscar jogo
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Brasil, final, Grupo A..."
          />
        </label>

        <label>
          Fase
          <select
            value={phaseFilter}
            onChange={(event) => setPhaseFilter(event.target.value)}
          >
            {phases.map((phase) => (
              <option key={phase} value={phase}>
                {phase}
              </option>
            ))}
          </select>
        </label>

        <div className="buttons">
          <button className="primary" onClick={exportPdf}>
            Baixar PDF
          </button>

          <button className="secondary" onClick={clearAll}>
            Limpar
          </button>
        </div>
      </section>

      <section className="intro-card">
        <div>
          <span className="mini-label">Mata mata automático</span>
          <h2>Os classificados são calculados pelos seus palpites</h2>
        </div>

        <p>
          O sistema calcula pontos, saldo de gols, gols marcados e vitórias. Depois,
          seleciona os dois primeiros de cada grupo e os oito melhores terceiros para
          montar os 32 avos de final.
        </p>
      </section>

      <section className="export-area">
        <div className="export-header">
          <div>
            <span className="eyebrow">Copa do Mundo FIFA 2026</span>
            <h2>{name ? `Palpites de ${name}` : 'Meus palpites'}</h2>
          </div>

          <div className="badge">
            {completed}/{games.length}
          </div>
        </div>

        {Object.entries(sections).map(([section, sectionGames]) => (
          <section className="phase" key={section}>
            <h3>{section}</h3>

            <div className="games-grid">
              {sectionGames.map((game) => {
                const prediction = predictions[game.id] || emptyPrediction();
                const showPenaltySelector =
                  isKnockoutGame(game) && isDrawPrediction(prediction);

                return (
                  <article className="game-card" key={game.id}>
                    <div className="game-meta">
                      <span>Jogo {game.matchNumber}</span>
                      <span>{formatDate(game.date)} · {game.time}</span>
                    </div>

                    <div className="teams">
                      <span className="team">
                        <TeamName name={game.home} />
                      </span>

                      <input
                        aria-label={`Palpite ${game.home}`}
                        value={prediction.home}
                        onChange={(event) =>
                          updatePrediction(game.id, 'home', event.target.value)
                        }
                        inputMode="numeric"
                        placeholder="0"
                      />

                      <strong>x</strong>

                      <input
                        aria-label={`Palpite ${game.away}`}
                        value={prediction.away}
                        onChange={(event) =>
                          updatePrediction(game.id, 'away', event.target.value)
                        }
                        inputMode="numeric"
                        placeholder="0"
                      />

                      <span className="team right">
                        <TeamName name={game.away} align="right" />
                      </span>
                    </div>

                    {showPenaltySelector && (
                      <div className="penalty-box">
                        <span>Quem passa nos pênaltis?</span>

                        <select
                          value={prediction.penaltyWinner || ''}
                          onChange={(event) =>
                            updatePenaltyWinner(game.id, event.target.value)
                          }
                        >
                          <option value="">Selecione o vencedor</option>
                          <option value={game.home}>{game.home}</option>
                          <option value={game.away}>{game.away}</option>
                        </select>
                      </div>
                    )}

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
    </main>
  );
}