const groups = [
  { code: 'A', teams: ['México', 'África do Sul', 'Coreia do Sul', 'Tchéquia'] },
  { code: 'B', teams: ['Estados Unidos', 'Paraguai', 'Suíça', 'Camarões'] },
  { code: 'C', teams: ['Brasil', 'Escócia', 'Haiti', 'Panamá'] },
  { code: 'D', teams: ['Austrália', 'Turquia', 'Estados Unidos D3', 'Estados Unidos D4'] },
  { code: 'E', teams: ['Alemanha', 'Curaçao', 'Equipe E3', 'Equipe E4'] },
  { code: 'F', teams: ['Holanda', 'Japão', 'Equipe F3', 'Equipe F4'] },
  { code: 'G', teams: ['Equipe G1', 'Equipe G2', 'Equipe G3', 'Equipe G4'] },
  { code: 'H', teams: ['Uruguai', 'Cabo Verde', 'Arábia Saudita', 'Equipe H4'] },
  { code: 'I', teams: ['Equipe I1', 'Equipe I2', 'Equipe I3', 'Equipe I4'] },
  { code: 'J', teams: ['Equipe J1', 'Equipe J2', 'Equipe J3', 'Equipe J4'] },
  { code: 'K', teams: ['Portugal', 'Colômbia', 'Equipe K3', 'Equipe K4'] },
  { code: 'L', teams: ['Equipe L1', 'Equipe L2', 'Equipe L3', 'Equipe L4'] }
];

const stadiums = [
  'Estádio Azteca, Cidade do México',
  'Estádio Akron, Guadalajara',
  'SoFi Stadium, Los Angeles',
  'BMO Field, Toronto',
  'BC Place, Vancouver',
  'Mercedes-Benz Stadium, Atlanta',
  'MetLife Stadium, Nova York/Nova Jersey',
  'AT&T Stadium, Dallas',
  'NRG Stadium, Houston',
  'Hard Rock Stadium, Miami',
  'Gillette Stadium, Boston',
  'Lincoln Financial Field, Filadélfia',
  'Arrowhead Stadium, Kansas City',
  'Lumen Field, Seattle',
  'Levi’s Stadium, San Francisco Bay Area',
  'Estádio BBVA, Monterrey'
];

function dateFromIndex(index) {
  const start = new Date('2026-06-11T12:00:00');
  const d = new Date(start);
  d.setDate(start.getDate() + Math.floor(index / 4));
  return d.toISOString().slice(0, 10);
}

function groupStageGames() {
  const pairings = [
    [0, 1], [2, 3],
    [0, 2], [3, 1],
    [3, 0], [1, 2]
  ];

  let matchNumber = 1;
  const games = [];

  groups.forEach((group, groupIndex) => {
    pairings.forEach(([homeIndex, awayIndex], pairingIndex) => {
      games.push({
        id: `M${matchNumber}`,
        matchNumber,
        phase: 'Fase de grupos',
        group: `Grupo ${group.code}`,
        date: dateFromIndex(matchNumber - 1),
        time: ['13:00', '16:00', '19:00', '22:00'][(matchNumber - 1) % 4],
        home: group.teams[homeIndex],
        away: group.teams[awayIndex],
        stadium: stadiums[(groupIndex + pairingIndex) % stadiums.length]
      });
      matchNumber += 1;
    });
  });

  // Ajustes reais já divulgados em fontes públicas para os primeiros jogos.
  games[0] = { ...games[0], date: '2026-06-11', time: '16:00', home: 'México', away: 'África do Sul', stadium: 'Estádio Azteca, Cidade do México' };
  games[1] = { ...games[1], date: '2026-06-11', time: '23:00', home: 'Coreia do Sul', away: 'Tchéquia', stadium: 'Estádio Akron, Guadalajara' };

  return games;
}

function knockoutGames(startNumber) {
  const phases = [
    { phase: '32 avos de final', total: 16, startDate: '2026-06-28' },
    { phase: 'Oitavas de final', total: 8, startDate: '2026-07-04' },
    { phase: 'Quartas de final', total: 4, startDate: '2026-07-09' },
    { phase: 'Semifinais', total: 2, startDate: '2026-07-14' },
    { phase: 'Disputa de 3º lugar', total: 1, startDate: '2026-07-18' },
    { phase: 'Final', total: 1, startDate: '2026-07-19' }
  ];

  let matchNumber = startNumber;
  const games = [];

  phases.forEach((item) => {
    const start = new Date(`${item.startDate}T12:00:00`);
    for (let i = 0; i < item.total; i += 1) {
      const d = new Date(start);
      d.setDate(start.getDate() + Math.floor(i / 4));
      games.push({
        id: `M${matchNumber}`,
        matchNumber,
        phase: item.phase,
        group: '',
        date: d.toISOString().slice(0, 10),
        time: ['13:00', '16:00', '19:00', '22:00'][i % 4],
        home: `${item.phase} ${i + 1} - Mandante`,
        away: `${item.phase} ${i + 1} - Visitante`,
        stadium: stadiums[(matchNumber - 1) % stadiums.length]
      });
      matchNumber += 1;
    }
  });

  return games;
}

const groupGames = groupStageGames();
export const games = [...groupGames, ...knockoutGames(groupGames.length + 1)];
