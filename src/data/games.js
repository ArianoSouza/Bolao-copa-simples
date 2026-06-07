const groups = [
  { code: 'A', teams: ['México', 'África do Sul', 'Coreia do Sul', 'Tchéquia'] },
  { code: 'B', teams: ['Canadá', 'Bósnia e Herzegovina', 'Catar', 'Suíça'] },
  { code: 'C', teams: ['Brasil', 'Marrocos', 'Haiti', 'Escócia'] },
  { code: 'D', teams: ['Estados Unidos', 'Paraguai', 'Austrália', 'Turquia'] },
  { code: 'E', teams: ['Alemanha', 'Curaçao', 'Costa do Marfim', 'Equador'] },
  { code: 'F', teams: ['Holanda', 'Japão', 'Suécia', 'Tunísia'] },
  { code: 'G', teams: ['Bélgica', 'Egito', 'Irã', 'Nova Zelândia'] },
  { code: 'H', teams: ['Espanha', 'Cabo Verde', 'Arábia Saudita', 'Uruguai'] },
  { code: 'I', teams: ['França', 'Senegal', 'Iraque', 'Noruega'] },
  { code: 'J', teams: ['Argentina', 'Argélia', 'Áustria', 'Jordânia'] },
  { code: 'K', teams: ['Portugal', 'Colômbia', 'Uzbequistão', 'República Democrática do Congo'] },
  { code: 'L', teams: ['Inglaterra', 'Croácia', 'Gana', 'Panamá'] }
];

const stadiums = [
  'Estádio Azteca, Cidade do México', 'Estádio Akron, Guadalajara', 'SoFi Stadium, Los Angeles', 'BMO Field, Toronto',
  'BC Place, Vancouver', 'Mercedes-Benz Stadium, Atlanta', 'MetLife Stadium, Nova York/Nova Jersey', 'AT&T Stadium, Dallas',
  'NRG Stadium, Houston', 'Hard Rock Stadium, Miami', 'Gillette Stadium, Boston', 'Lincoln Financial Field, Filadélfia',
  'Arrowhead Stadium, Kansas City', 'Lumen Field, Seattle', 'Levi’s Stadium, San Francisco Bay Area', 'Estádio BBVA, Monterrey'
];

function groupStageGames() {
  return [
    { id: 'M1', matchNumber: 1, phase: 'Fase de grupos', round: '1ª rodada', group: 'Grupo A', date: '2026-06-11', time: '16:00', home: 'México', away: 'África do Sul', stadium: 'Estádio Azteca, Cidade do México' },
    { id: 'M2', matchNumber: 2, phase: 'Fase de grupos', round: '1ª rodada', group: 'Grupo A', date: '2026-06-11', time: '23:00', home: 'Coreia do Sul', away: 'Tchéquia', stadium: 'Estádio Akron, Guadalajara' },
    { id: 'M3', matchNumber: 3, phase: 'Fase de grupos', round: '1ª rodada', group: 'Grupo B', date: '2026-06-12', time: '16:00', home: 'Canadá', away: 'Bósnia e Herzegovina', stadium: 'BMO Field, Toronto' },
    { id: 'M4', matchNumber: 4, phase: 'Fase de grupos', round: '1ª rodada', group: 'Grupo D', date: '2026-06-12', time: '22:00', home: 'Estados Unidos', away: 'Paraguai', stadium: 'SoFi Stadium, Los Angeles' },
    { id: 'M5', matchNumber: 5, phase: 'Fase de grupos', round: '1ª rodada', group: 'Grupo B', date: '2026-06-13', time: '16:00', home: 'Catar', away: 'Suíça', stadium: 'Levi’s Stadium, San Francisco Bay Area' },
    { id: 'M6', matchNumber: 6, phase: 'Fase de grupos', round: '1ª rodada', group: 'Grupo C', date: '2026-06-13', time: '19:00', home: 'Brasil', away: 'Marrocos', stadium: 'MetLife Stadium, Nova York/Nova Jersey' },
    { id: 'M7', matchNumber: 7, phase: 'Fase de grupos', round: '1ª rodada', group: 'Grupo C', date: '2026-06-13', time: '22:00', home: 'Haiti', away: 'Escócia', stadium: 'Gillette Stadium, Boston' },
    { id: 'M8', matchNumber: 8, phase: 'Fase de grupos', round: '1ª rodada', group: 'Grupo D', date: '2026-06-14', time: '01:00', home: 'Austrália', away: 'Turquia', stadium: 'BC Place, Vancouver' },
    { id: 'M9', matchNumber: 9, phase: 'Fase de grupos', round: '1ª rodada', group: 'Grupo E', date: '2026-06-14', time: '14:00', home: 'Alemanha', away: 'Curaçao', stadium: 'NRG Stadium, Houston' },
    { id: 'M10', matchNumber: 10, phase: 'Fase de grupos', round: '1ª rodada', group: 'Grupo E', date: '2026-06-14', time: '20:00', home: 'Costa do Marfim', away: 'Equador', stadium: 'Lincoln Financial Field, Filadélfia' },
    { id: 'M11', matchNumber: 11, phase: 'Fase de grupos', round: '1ª rodada', group: 'Grupo F', date: '2026-06-14', time: '17:00', home: 'Holanda', away: 'Japão', stadium: 'AT&T Stadium, Dallas' },
    { id: 'M12', matchNumber: 12, phase: 'Fase de grupos', round: '1ª rodada', group: 'Grupo F', date: '2026-06-14', time: '23:00', home: 'Suécia', away: 'Tunísia', stadium: 'Estádio BBVA, Monterrey' },
    { id: 'M13', matchNumber: 13, phase: 'Fase de grupos', round: '1ª rodada', group: 'Grupo H', date: '2026-06-15', time: '13:00', home: 'Espanha', away: 'Cabo Verde', stadium: 'Mercedes-Benz Stadium, Atlanta' },
    { id: 'M14', matchNumber: 14, phase: 'Fase de grupos', round: '1ª rodada', group: 'Grupo H', date: '2026-06-15', time: '19:00', home: 'Arábia Saudita', away: 'Uruguai', stadium: 'Hard Rock Stadium, Miami' },
    { id: 'M15', matchNumber: 15, phase: 'Fase de grupos', round: '1ª rodada', group: 'Grupo G', date: '2026-06-15', time: '16:00', home: 'Bélgica', away: 'Egito', stadium: 'Lumen Field, Seattle' },
    { id: 'M16', matchNumber: 16, phase: 'Fase de grupos', round: '1ª rodada', group: 'Grupo G', date: '2026-06-15', time: '22:00', home: 'Irã', away: 'Nova Zelândia', stadium: 'SoFi Stadium, Los Angeles' },
    { id: 'M17', matchNumber: 17, phase: 'Fase de grupos', round: '1ª rodada', group: 'Grupo J', date: '2026-06-17', time: '01:00', home: 'Áustria', away: 'Jordânia', stadium: 'Levi’s Stadium, San Francisco Bay Area' },
    { id: 'M18', matchNumber: 18, phase: 'Fase de grupos', round: '1ª rodada', group: 'Grupo I', date: '2026-06-16', time: '16:00', home: 'França', away: 'Senegal', stadium: 'MetLife Stadium, Nova York/Nova Jersey' },
    { id: 'M19', matchNumber: 19, phase: 'Fase de grupos', round: '1ª rodada', group: 'Grupo I', date: '2026-06-16', time: '19:00', home: 'Iraque', away: 'Noruega', stadium: 'Gillette Stadium, Boston' },
    { id: 'M20', matchNumber: 20, phase: 'Fase de grupos', round: '1ª rodada', group: 'Grupo J', date: '2026-06-16', time: '22:00', home: 'Argentina', away: 'Argélia', stadium: 'Arrowhead Stadium, Kansas City' },
    { id: 'M21', matchNumber: 21, phase: 'Fase de grupos', round: '1ª rodada', group: 'Grupo K', date: '2026-06-17', time: '14:00', home: 'Portugal', away: 'República Democrática do Congo', stadium: 'NRG Stadium, Houston' },
    { id: 'M22', matchNumber: 22, phase: 'Fase de grupos', round: '1ª rodada', group: 'Grupo L', date: '2026-06-17', time: '17:00', home: 'Inglaterra', away: 'Croácia', stadium: 'AT&T Stadium, Dallas' },
    { id: 'M23', matchNumber: 23, phase: 'Fase de grupos', round: '1ª rodada', group: 'Grupo L', date: '2026-06-17', time: '20:00', home: 'Gana', away: 'Panamá', stadium: 'BMO Field, Toronto' },
    { id: 'M24', matchNumber: 24, phase: 'Fase de grupos', round: '1ª rodada', group: 'Grupo K', date: '2026-06-17', time: '21:00', home: 'Uzbequistão', away: 'Colômbia', stadium: 'Estádio Azteca, Cidade do México' },
    { id: 'M25', matchNumber: 25, phase: 'Fase de grupos', round: '2ª rodada', group: 'Grupo A', date: '2026-06-18', time: '13:00', home: 'Tchéquia', away: 'África do Sul', stadium: 'Mercedes-Benz Stadium, Atlanta' },
    { id: 'M26', matchNumber: 26, phase: 'Fase de grupos', round: '2ª rodada', group: 'Grupo B', date: '2026-06-18', time: '16:00', home: 'Suíça', away: 'Bósnia e Herzegovina', stadium: 'SoFi Stadium, Los Angeles' },
    { id: 'M27', matchNumber: 27, phase: 'Fase de grupos', round: '2ª rodada', group: 'Grupo B', date: '2026-06-18', time: '19:00', home: 'Canadá', away: 'Catar', stadium: 'BC Place, Vancouver' },
    { id: 'M28', matchNumber: 28, phase: 'Fase de grupos', round: '2ª rodada', group: 'Grupo A', date: '2026-06-18', time: '22:00', home: 'México', away: 'Coreia do Sul', stadium: 'Estádio Akron, Guadalajara' },
    { id: 'M29', matchNumber: 29, phase: 'Fase de grupos', round: '2ª rodada', group: 'Grupo D', date: '2026-06-20', time: '00:00', home: 'Turquia', away: 'Paraguai', stadium: 'Levi’s Stadium, San Francisco Bay Area' },
    { id: 'M30', matchNumber: 30, phase: 'Fase de grupos', round: '2ª rodada', group: 'Grupo D', date: '2026-06-19', time: '16:00', home: 'Estados Unidos', away: 'Austrália', stadium: 'Lumen Field, Seattle' },
    { id: 'M31', matchNumber: 31, phase: 'Fase de grupos', round: '2ª rodada', group: 'Grupo C', date: '2026-06-19', time: '19:00', home: 'Escócia', away: 'Marrocos', stadium: 'Gillette Stadium, Boston' },
    { id: 'M32', matchNumber: 32, phase: 'Fase de grupos', round: '2ª rodada', group: 'Grupo C', date: '2026-06-19', time: '21:30', home: 'Brasil', away: 'Haiti', stadium: 'Lincoln Financial Field, Filadélfia' },
    { id: 'M33', matchNumber: 33, phase: 'Fase de grupos', round: '2ª rodada', group: 'Grupo F', date: '2026-06-20', time: '23:00', home: 'Tunísia', away: 'Japão', stadium: 'Estádio BBVA, Monterrey' },
    { id: 'M34', matchNumber: 34, phase: 'Fase de grupos', round: '2ª rodada', group: 'Grupo F', date: '2026-06-20', time: '14:00', home: 'Holanda', away: 'Suécia', stadium: 'NRG Stadium, Houston' },
    { id: 'M35', matchNumber: 35, phase: 'Fase de grupos', round: '2ª rodada', group: 'Grupo E', date: '2026-06-20', time: '17:00', home: 'Alemanha', away: 'Costa do Marfim', stadium: 'BMO Field, Toronto' },
    { id: 'M36', matchNumber: 36, phase: 'Fase de grupos', round: '2ª rodada', group: 'Grupo E', date: '2026-06-20', time: '21:00', home: 'Equador', away: 'Curaçao', stadium: 'Arrowhead Stadium, Kansas City' },
    { id: 'M37', matchNumber: 37, phase: 'Fase de grupos', round: '2ª rodada', group: 'Grupo H', date: '2026-06-21', time: '13:00', home: 'Espanha', away: 'Arábia Saudita', stadium: 'Mercedes-Benz Stadium, Atlanta' },
    { id: 'M38', matchNumber: 38, phase: 'Fase de grupos', round: '2ª rodada', group: 'Grupo G', date: '2026-06-21', time: '16:00', home: 'Bélgica', away: 'Irã', stadium: 'SoFi Stadium, Los Angeles' },
    { id: 'M39', matchNumber: 39, phase: 'Fase de grupos', round: '2ª rodada', group: 'Grupo H', date: '2026-06-21', time: '19:00', home: 'Uruguai', away: 'Cabo Verde', stadium: 'Hard Rock Stadium, Miami' },
    { id: 'M40', matchNumber: 40, phase: 'Fase de grupos', round: '2ª rodada', group: 'Grupo G', date: '2026-06-21', time: '22:00', home: 'Nova Zelândia', away: 'Egito', stadium: 'BC Place, Vancouver' },
    { id: 'M41', matchNumber: 41, phase: 'Fase de grupos', round: '2ª rodada', group: 'Grupo J', date: '2026-06-22', time: '14:00', home: 'Argentina', away: 'Áustria', stadium: 'AT&T Stadium, Dallas' },
    { id: 'M42', matchNumber: 42, phase: 'Fase de grupos', round: '2ª rodada', group: 'Grupo I', date: '2026-06-22', time: '18:00', home: 'França', away: 'Iraque', stadium: 'Lincoln Financial Field, Filadélfia' },
    { id: 'M43', matchNumber: 43, phase: 'Fase de grupos', round: '2ª rodada', group: 'Grupo I', date: '2026-06-22', time: '21:00', home: 'Noruega', away: 'Senegal', stadium: 'MetLife Stadium, Nova York/Nova Jersey' },
    { id: 'M44', matchNumber: 44, phase: 'Fase de grupos', round: '2ª rodada', group: 'Grupo J', date: '2026-06-23', time: '00:00', home: 'Jordânia', away: 'Argélia', stadium: 'Levi’s Stadium, San Francisco Bay Area' },
    { id: 'M45', matchNumber: 45, phase: 'Fase de grupos', round: '2ª rodada', group: 'Grupo K', date: '2026-06-23', time: '14:00', home: 'Portugal', away: 'Uzbequistão', stadium: 'NRG Stadium, Houston' },
    { id: 'M46', matchNumber: 46, phase: 'Fase de grupos', round: '2ª rodada', group: 'Grupo L', date: '2026-06-23', time: '17:00', home: 'Inglaterra', away: 'Gana', stadium: 'Gillette Stadium, Boston' },
    { id: 'M47', matchNumber: 47, phase: 'Fase de grupos', round: '2ª rodada', group: 'Grupo L', date: '2026-06-23', time: '20:00', home: 'Panamá', away: 'Croácia', stadium: 'BMO Field, Toronto' },
    { id: 'M48', matchNumber: 48, phase: 'Fase de grupos', round: '2ª rodada', group: 'Grupo K', date: '2026-06-23', time: '23:00', home: 'Colômbia', away: 'República Democrática do Congo', stadium: 'Estádio Akron, Guadalajara' },
    { id: 'M49', matchNumber: 49, phase: 'Fase de grupos', round: '3ª rodada', group: 'Grupo B', date: '2026-06-24', time: '16:00', home: 'Suíça', away: 'Canadá', stadium: 'BC Place, Vancouver' },
    { id: 'M50', matchNumber: 50, phase: 'Fase de grupos', round: '3ª rodada', group: 'Grupo B', date: '2026-06-24', time: '16:00', home: 'Bósnia e Herzegovina', away: 'Catar', stadium: 'Lumen Field, Seattle' },
    { id: 'M51', matchNumber: 51, phase: 'Fase de grupos', round: '3ª rodada', group: 'Grupo C', date: '2026-06-24', time: '19:00', home: 'Escócia', away: 'Brasil', stadium: 'Hard Rock Stadium, Miami' },
    { id: 'M52', matchNumber: 52, phase: 'Fase de grupos', round: '3ª rodada', group: 'Grupo C', date: '2026-06-24', time: '19:00', home: 'Marrocos', away: 'Haiti', stadium: 'Mercedes-Benz Stadium, Atlanta' },
    { id: 'M53', matchNumber: 53, phase: 'Fase de grupos', round: '3ª rodada', group: 'Grupo A', date: '2026-06-24', time: '22:00', home: 'Tchéquia', away: 'México', stadium: 'Estádio Azteca, Cidade do México' },
    { id: 'M54', matchNumber: 54, phase: 'Fase de grupos', round: '3ª rodada', group: 'Grupo A', date: '2026-06-24', time: '22:00', home: 'África do Sul', away: 'Coreia do Sul', stadium: 'Estádio BBVA, Monterrey' },
    { id: 'M55', matchNumber: 55, phase: 'Fase de grupos', round: '3ª rodada', group: 'Grupo E', date: '2026-06-25', time: '17:00', home: 'Equador', away: 'Alemanha', stadium: 'MetLife Stadium, Nova York/Nova Jersey' },
    { id: 'M56', matchNumber: 56, phase: 'Fase de grupos', round: '3ª rodada', group: 'Grupo E', date: '2026-06-25', time: '17:00', home: 'Curaçao', away: 'Costa do Marfim', stadium: 'Lincoln Financial Field, Filadélfia' },
    { id: 'M57', matchNumber: 57, phase: 'Fase de grupos', round: '3ª rodada', group: 'Grupo F', date: '2026-06-25', time: '20:00', home: 'Japão', away: 'Suécia', stadium: 'AT&T Stadium, Dallas' },
    { id: 'M58', matchNumber: 58, phase: 'Fase de grupos', round: '3ª rodada', group: 'Grupo F', date: '2026-06-25', time: '20:00', home: 'Tunísia', away: 'Holanda', stadium: 'Arrowhead Stadium, Kansas City' },
    { id: 'M59', matchNumber: 59, phase: 'Fase de grupos', round: '3ª rodada', group: 'Grupo D', date: '2026-06-25', time: '23:00', home: 'Turquia', away: 'Estados Unidos', stadium: 'SoFi Stadium, Los Angeles' },
    { id: 'M60', matchNumber: 60, phase: 'Fase de grupos', round: '3ª rodada', group: 'Grupo D', date: '2026-06-25', time: '23:00', home: 'Paraguai', away: 'Austrália', stadium: 'Levi’s Stadium, San Francisco Bay Area' },
    { id: 'M61', matchNumber: 61, phase: 'Fase de grupos', round: '3ª rodada', group: 'Grupo I', date: '2026-06-26', time: '16:00', home: 'Noruega', away: 'França', stadium: 'Gillette Stadium, Boston' },
    { id: 'M62', matchNumber: 62, phase: 'Fase de grupos', round: '3ª rodada', group: 'Grupo I', date: '2026-06-26', time: '16:00', home: 'Senegal', away: 'Iraque', stadium: 'BMO Field, Toronto' },
    { id: 'M63', matchNumber: 63, phase: 'Fase de grupos', round: '3ª rodada', group: 'Grupo H', date: '2026-06-26', time: '21:00', home: 'Cabo Verde', away: 'Arábia Saudita', stadium: 'NRG Stadium, Houston' },
    { id: 'M64', matchNumber: 64, phase: 'Fase de grupos', round: '3ª rodada', group: 'Grupo H', date: '2026-06-26', time: '21:00', home: 'Uruguai', away: 'Espanha', stadium: 'Estádio Akron, Guadalajara' },
    { id: 'M65', matchNumber: 65, phase: 'Fase de grupos', round: '3ª rodada', group: 'Grupo G', date: '2026-06-27', time: '00:00', home: 'Egito', away: 'Irã', stadium: 'Lumen Field, Seattle' },
    { id: 'M66', matchNumber: 66, phase: 'Fase de grupos', round: '3ª rodada', group: 'Grupo G', date: '2026-06-27', time: '00:00', home: 'Nova Zelândia', away: 'Bélgica', stadium: 'BC Place, Vancouver' },
    { id: 'M67', matchNumber: 67, phase: 'Fase de grupos', round: '3ª rodada', group: 'Grupo L', date: '2026-06-27', time: '18:00', home: 'Panamá', away: 'Inglaterra', stadium: 'MetLife Stadium, Nova York/Nova Jersey' },
    { id: 'M68', matchNumber: 68, phase: 'Fase de grupos', round: '3ª rodada', group: 'Grupo L', date: '2026-06-27', time: '18:00', home: 'Croácia', away: 'Gana', stadium: 'Lincoln Financial Field, Filadélfia' },
    { id: 'M69', matchNumber: 69, phase: 'Fase de grupos', round: '3ª rodada', group: 'Grupo K', date: '2026-06-27', time: '20:30', home: 'Colômbia', away: 'Portugal', stadium: 'Hard Rock Stadium, Miami' },
    { id: 'M70', matchNumber: 70, phase: 'Fase de grupos', round: '3ª rodada', group: 'Grupo K', date: '2026-06-27', time: '20:30', home: 'República Democrática do Congo', away: 'Uzbequistão', stadium: 'Mercedes-Benz Stadium, Atlanta' },
    { id: 'M71', matchNumber: 71, phase: 'Fase de grupos', round: '3ª rodada', group: 'Grupo J', date: '2026-06-27', time: '23:00', home: 'Argélia', away: 'Áustria', stadium: 'Arrowhead Stadium, Kansas City' },
    { id: 'M72', matchNumber: 72, phase: 'Fase de grupos', round: '3ª rodada', group: 'Grupo J', date: '2026-06-27', time: '23:00', home: 'Jordânia', away: 'Argentina', stadium: 'AT&T Stadium, Dallas' }
  ];
}

function getPrediction(predictions, gameId) {
  const p = predictions?.[gameId];
  if (!p || p.home === '' || p.away === '') return null;
  return { homeScore: Number(p.home), awayScore: Number(p.away) };
}

function calculateGroupStandings(groupGames, predictions) {
  const standings = {};
  groups.forEach(g => { standings[g.code] = g.teams.map(t => ({ team: t, groupCode: g.code, played: 0, points: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, wins: 0 })); });
  groupGames.forEach(game => {
    const pred = getPrediction(predictions, game.id);
    if (!pred) return;
    const gCode = game.group.replace('Grupo ', '');
    const h = standings[gCode].find(t => t.team === game.home);
    const a = standings[gCode].find(t => t.team === game.away);
    h.played++; a.played++; h.goalsFor += pred.homeScore; h.goalsAgainst += pred.awayScore; a.goalsFor += pred.awayScore; a.goalsAgainst += pred.homeScore;
    if (pred.homeScore > pred.awayScore) { h.points += 3; h.wins++; } else if (pred.awayScore > pred.homeScore) { a.points += 3; a.wins++; } else { h.points++; a.points++; }
    h.goalDifference = h.goalsFor - h.goalsAgainst; a.goalDifference = a.goalsFor - a.goalsAgainst;
  });
  Object.keys(standings).forEach(c => standings[c].sort((a, b) => b.points - a.points || b.goalDifference - a.goalDifference || b.goalsFor - a.goalsFor || b.wins - a.wins || a.team.localeCompare(b.team)));
  return standings;
}

function getQualified(standings) {
  const firsts = [], seconds = [], thirds = [];
  Object.keys(standings).forEach(c => { firsts.push(standings[c][0]); seconds.push(standings[c][1]); thirds.push(standings[c][2]); });
  const bestThirds = thirds.sort((a, b) => b.points - a.points || b.goalDifference - a.goalDifference || b.goalsFor - a.goalsFor || b.wins - a.wins).slice(0, 8);
  return { firsts: firsts.sort((a,b) => a.groupCode.localeCompare(b.groupCode)), seconds: seconds.sort((a,b) => a.groupCode.localeCompare(b.groupCode)), bestThirds };
}

function allocateThirds(bestThirds) {
  const slots = {};
  const remaining = [...bestThirds];
  const rules = [
    { id: 'M74', groups: ['A', 'B', 'C', 'D', 'F'] }, { id: 'M77', groups: ['C', 'D', 'F', 'G', 'H'] },
    { id: 'M79', groups: ['C', 'E', 'F', 'H', 'I'] }, { id: 'M80', groups: ['E', 'H', 'I', 'J', 'K'] },
    { id: 'M81', groups: ['B', 'E', 'F', 'I', 'J'] }, { id: 'M82', groups: ['A', 'E', 'H', 'I', 'J'] },
    { id: 'M83', groups: ['E', 'F', 'G', 'I', 'J'] }, { id: 'M86', groups: ['D', 'E', 'I', 'J', 'L'] }
  ];
  rules.forEach(rule => {
    const match = remaining.find(t => rule.groups.includes(t.groupCode));
    if (match) { slots[rule.id] = match.team; remaining.splice(remaining.indexOf(match), 1); }
    else if (remaining.length > 0) { slots[rule.id] = remaining.shift().team; }
  });
  return slots;
}

function getWinner(game, predictions) {
  const p = getPrediction(predictions, game.id);
  if (!p) return null;
  if (p.homeScore > p.awayScore) return game.home;
  if (p.awayScore > p.homeScore) return game.away;
  return predictions[game.id]?.penaltyWinner || null;
}

function knockoutGames(predictions = {}, standings = null) {
  const games = [];
  const { firsts, seconds, bestThirds } = standings ? getQualified(standings) : { firsts: [], seconds: [], bestThirds: [] };
  const thirdsMap = allocateThirds(bestThirds);

  const m = (num, phase, h, a, date, time, st) => ({ id: `M${num}`, matchNumber: num, phase, round: phase, group: '', home: h || `TBD`, away: a || `TBD`, date, time, stadium: st });

  const r32 = [
    m(73, '32 avos de final', seconds[0]?.team, seconds[1]?.team, '2026-06-28', '13:00', stadiums[2]),
    m(74, '32 avos de final', firsts[4]?.team, thirdsMap['M74'], '2026-06-28', '16:00', stadiums[5]),
    m(75, '32 avos de final', firsts[5]?.team, seconds[2]?.team, '2026-06-28', '19:00', stadiums[15]),
    m(76, '32 avos de final', firsts[2]?.team, seconds[5]?.team, '2026-06-28', '22:00', stadiums[8]),
    m(77, '32 avos de final', firsts[8]?.team, thirdsMap['M77'], '2026-06-29', '13:00', stadiums[6]),
    m(78, '32 avos de final', seconds[4]?.team, seconds[8]?.team, '2026-06-29', '16:00', stadiums[7]),
    m(79, '32 avos de final', firsts[0]?.team, thirdsMap['M79'], '2026-06-29', '19:00', stadiums[0]),
    m(80, '32 avos de final', firsts[11]?.team, thirdsMap['M80'], '2026-06-29', '22:00', stadiums[5]),
    m(81, '32 avos de final', firsts[3]?.team, thirdsMap['M81'], '2026-06-30', '13:00', stadiums[14]),
    m(82, '32 avos de final', firsts[6]?.team, thirdsMap['M82'], '2026-06-30', '16:00', stadiums[13]),
    m(83, '32 avos de final', firsts[1]?.team, thirdsMap['M83'], '2026-06-30', '19:00', stadiums[4]),
    m(84, '32 avos de final', seconds[3]?.team, seconds[6]?.team, '2026-06-30', '22:00', stadiums[2]),
    m(85, '32 avos de final', firsts[9]?.team, seconds[7]?.team, '2026-07-01', '13:00', stadiums[9]),
    m(86, '32 avos de final', firsts[10]?.team, thirdsMap['M86'], '2026-07-01', '16:00', stadiums[8]),
    m(87, '32 avos de final', firsts[7]?.team, seconds[9]?.team, '2026-07-01', '19:00', stadiums[12]),
    m(88, '32 avos de final', seconds[10]?.team, seconds[11]?.team, '2026-07-01', '22:00', stadiums[7])
  ];
  games.push(...r32);

  const r16 = [
    m(89, 'Oitavas de final', getWinner(r32[1], predictions), getWinner(r32[4], predictions), '2026-07-04', '13:00', stadiums[10]),
    m(90, 'Oitavas de final', getWinner(r32[0], predictions), getWinner(r32[2], predictions), '2026-07-04', '16:00', stadiums[11]),
    m(91, 'Oitavas de final', getWinner(r32[3], predictions), getWinner(r32[5], predictions), '2026-07-04', '19:00', stadiums[12]),
    m(92, 'Oitavas de final', getWinner(r32[6], predictions), getWinner(r32[7], predictions), '2026-07-04', '22:00', stadiums[8]),
    m(93, 'Oitavas de final', getWinner(r32[10], predictions), getWinner(r32[11], predictions), '2026-07-05', '13:00', stadiums[13]),
    m(94, 'Oitavas de final', getWinner(r32[8], predictions), getWinner(r32[9], predictions), '2026-07-05', '16:00', stadiums[14]),
    m(95, 'Oitavas de final', getWinner(r32[13], predictions), getWinner(r32[15], predictions), '2026-07-05', '19:00', stadiums[6]),
    m(96, 'Oitavas de final', getWinner(r32[12], predictions), getWinner(r32[14], predictions), '2026-07-05', '22:00', stadiums[9])
  ];
  games.push(...r16);

  const qf = [
    m(97, 'Quartas de final', getWinner(r16[0], predictions), getWinner(r16[1], predictions), '2026-07-09', '13:00', stadiums[10]),
    m(98, 'Quartas de final', getWinner(r16[2], predictions), getWinner(r16[3], predictions), '2026-07-09', '16:00', stadiums[12]),
    m(99, 'Quartas de final', getWinner(r16[4], predictions), getWinner(r16[5], predictions), '2026-07-10', '19:00', stadiums[11]),
    m(100, 'Quartas de final', getWinner(r16[6], predictions), getWinner(r16[7], predictions), '2026-07-10', '22:00', stadiums[14])
  ];
  games.push(...qf);

  const sf = [
    m(101, 'Semifinais', getWinner(qf[0], predictions), getWinner(qf[1], predictions), '2026-07-14', '16:00', stadiums[7]),
    m(102, 'Semifinais', getWinner(qf[2], predictions), getWinner(qf[3], predictions), '2026-07-15', '16:00', stadiums[5])
  ];
  games.push(...sf);

  games.push(m(103, 'Disputa de 3º lugar', `Perdedor M101`, `Perdedor M102`, '2026-07-18', '16:00', stadiums[9]));
  games.push(m(104, 'Final', getWinner(sf[0], predictions), getWinner(sf[1], predictions), '2026-07-19', '16:00', stadiums[6]));

  return games;
}

export function getGamesWithUpdatedKnockout(predictions = {}) {
  const g = groupStageGames();
  const s = calculateGroupStandings(g, predictions);
  return [...g, ...knockoutGames(predictions, s)];
}

export const games = getGamesWithUpdatedKnockout({});
export default groupStageGames();
