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

function groupStageGames() {
  return [
    {
      id: 'M1',
      matchNumber: 1,
      phase: 'Fase de grupos',
      round: '1ª rodada',
      group: 'Grupo A',
      date: '2026-06-11',
      time: '16:00',
      home: 'México',
      away: 'África do Sul',
      stadium: 'Estádio Azteca, Cidade do México'
    },
    {
      id: 'M2',
      matchNumber: 2,
      phase: 'Fase de grupos',
      round: '1ª rodada',
      group: 'Grupo A',
      date: '2026-06-11',
      time: '23:00',
      home: 'Coreia do Sul',
      away: 'Tchéquia',
      stadium: 'Estádio Akron, Guadalajara'
    },
    {
      id: 'M3',
      matchNumber: 3,
      phase: 'Fase de grupos',
      round: '1ª rodada',
      group: 'Grupo B',
      date: '2026-06-12',
      time: '16:00',
      home: 'Canadá',
      away: 'Bósnia e Herzegovina',
      stadium: 'BMO Field, Toronto'
    },
    {
      id: 'M4',
      matchNumber: 4,
      phase: 'Fase de grupos',
      round: '1ª rodada',
      group: 'Grupo D',
      date: '2026-06-12',
      time: '22:00',
      home: 'Estados Unidos',
      away: 'Paraguai',
      stadium: 'SoFi Stadium, Los Angeles'
    },
    {
      id: 'M5',
      matchNumber: 5,
      phase: 'Fase de grupos',
      round: '1ª rodada',
      group: 'Grupo B',
      date: '2026-06-13',
      time: '16:00',
      home: 'Catar',
      away: 'Suíça',
      stadium: 'Levi’s Stadium, San Francisco Bay Area'
    },
    {
      id: 'M6',
      matchNumber: 6,
      phase: 'Fase de grupos',
      round: '1ª rodada',
      group: 'Grupo C',
      date: '2026-06-13',
      time: '19:00',
      home: 'Brasil',
      away: 'Marrocos',
      stadium: 'MetLife Stadium, Nova York/Nova Jersey'
    },
    {
      id: 'M7',
      matchNumber: 7,
      phase: 'Fase de grupos',
      round: '1ª rodada',
      group: 'Grupo C',
      date: '2026-06-13',
      time: '22:00',
      home: 'Haiti',
      away: 'Escócia',
      stadium: 'Gillette Stadium, Boston'
    },
    {
      id: 'M8',
      matchNumber: 8,
      phase: 'Fase de grupos',
      round: '1ª rodada',
      group: 'Grupo D',
      date: '2026-06-14',
      time: '01:00',
      home: 'Austrália',
      away: 'Turquia',
      stadium: 'BC Place, Vancouver'
    },
    {
      id: 'M9',
      matchNumber: 9,
      phase: 'Fase de grupos',
      round: '1ª rodada',
      group: 'Grupo E',
      date: '2026-06-14',
      time: '14:00',
      home: 'Alemanha',
      away: 'Curaçao',
      stadium: 'NRG Stadium, Houston'
    },
    {
      id: 'M10',
      matchNumber: 10,
      phase: 'Fase de grupos',
      round: '1ª rodada',
      group: 'Grupo E',
      date: '2026-06-14',
      time: '20:00',
      home: 'Costa do Marfim',
      away: 'Equador',
      stadium: 'Lincoln Financial Field, Filadélfia'
    },
    {
      id: 'M11',
      matchNumber: 11,
      phase: 'Fase de grupos',
      round: '1ª rodada',
      group: 'Grupo F',
      date: '2026-06-14',
      time: '17:00',
      home: 'Holanda',
      away: 'Japão',
      stadium: 'AT&T Stadium, Dallas'
    },
    {
      id: 'M12',
      matchNumber: 12,
      phase: 'Fase de grupos',
      round: '1ª rodada',
      group: 'Grupo F',
      date: '2026-06-14',
      time: '23:00',
      home: 'Suécia',
      away: 'Tunísia',
      stadium: 'Estádio BBVA, Monterrey'
    },
    {
      id: 'M13',
      matchNumber: 13,
      phase: 'Fase de grupos',
      round: '1ª rodada',
      group: 'Grupo H',
      date: '2026-06-15',
      time: '13:00',
      home: 'Espanha',
      away: 'Cabo Verde',
      stadium: 'Mercedes-Benz Stadium, Atlanta'
    },
    {
      id: 'M14',
      matchNumber: 14,
      phase: 'Fase de grupos',
      round: '1ª rodada',
      group: 'Grupo H',
      date: '2026-06-15',
      time: '19:00',
      home: 'Arábia Saudita',
      away: 'Uruguai',
      stadium: 'Hard Rock Stadium, Miami'
    },
    {
      id: 'M15',
      matchNumber: 15,
      phase: 'Fase de grupos',
      round: '1ª rodada',
      group: 'Grupo G',
      date: '2026-06-15',
      time: '16:00',
      home: 'Bélgica',
      away: 'Egito',
      stadium: 'Lumen Field, Seattle'
    },
    {
      id: 'M16',
      matchNumber: 16,
      phase: 'Fase de grupos',
      round: '1ª rodada',
      group: 'Grupo G',
      date: '2026-06-15',
      time: '22:00',
      home: 'Irã',
      away: 'Nova Zelândia',
      stadium: 'SoFi Stadium, Los Angeles'
    },
    {
      id: 'M17',
      matchNumber: 17,
      phase: 'Fase de grupos',
      round: '1ª rodada',
      group: 'Grupo J',
      date: '2026-06-17',
      time: '01:00',
      home: 'Áustria',
      away: 'Jordânia',
      stadium: 'Levi’s Stadium, San Francisco Bay Area'
    },
    {
      id: 'M18',
      matchNumber: 18,
      phase: 'Fase de grupos',
      round: '1ª rodada',
      group: 'Grupo I',
      date: '2026-06-16',
      time: '16:00',
      home: 'França',
      away: 'Senegal',
      stadium: 'MetLife Stadium, Nova York/Nova Jersey'
    },
    {
      id: 'M19',
      matchNumber: 19,
      phase: 'Fase de grupos',
      round: '1ª rodada',
      group: 'Grupo I',
      date: '2026-06-16',
      time: '19:00',
      home: 'Iraque',
      away: 'Noruega',
      stadium: 'Gillette Stadium, Boston'
    },
    {
      id: 'M20',
      matchNumber: 20,
      phase: 'Fase de grupos',
      round: '1ª rodada',
      group: 'Grupo J',
      date: '2026-06-16',
      time: '22:00',
      home: 'Argentina',
      away: 'Argélia',
      stadium: 'Arrowhead Stadium, Kansas City'
    },
    {
      id: 'M21',
      matchNumber: 21,
      phase: 'Fase de grupos',
      round: '1ª rodada',
      group: 'Grupo K',
      date: '2026-06-17',
      time: '14:00',
      home: 'Portugal',
      away: 'República Democrática do Congo',
      stadium: 'NRG Stadium, Houston'
    },
    {
      id: 'M22',
      matchNumber: 22,
      phase: 'Fase de grupos',
      round: '1ª rodada',
      group: 'Grupo L',
      date: '2026-06-17',
      time: '17:00',
      home: 'Inglaterra',
      away: 'Croácia',
      stadium: 'AT&T Stadium, Dallas'
    },
    {
      id: 'M23',
      matchNumber: 23,
      phase: 'Fase de grupos',
      round: '1ª rodada',
      group: 'Grupo L',
      date: '2026-06-17',
      time: '20:00',
      home: 'Gana',
      away: 'Panamá',
      stadium: 'BMO Field, Toronto'
    },
    {
      id: 'M24',
      matchNumber: 24,
      phase: 'Fase de grupos',
      round: '1ª rodada',
      group: 'Grupo K',
      date: '2026-06-17',
      time: '21:00',
      home: 'Uzbequistão',
      away: 'Colômbia',
      stadium: 'Estádio Azteca, Cidade do México'
    },

    {
      id: 'M25',
      matchNumber: 25,
      phase: 'Fase de grupos',
      round: '2ª rodada',
      group: 'Grupo A',
      date: '2026-06-18',
      time: '13:00',
      home: 'Tchéquia',
      away: 'África do Sul',
      stadium: 'Mercedes-Benz Stadium, Atlanta'
    },
    {
      id: 'M26',
      matchNumber: 26,
      phase: 'Fase de grupos',
      round: '2ª rodada',
      group: 'Grupo B',
      date: '2026-06-18',
      time: '16:00',
      home: 'Suíça',
      away: 'Bósnia e Herzegovina',
      stadium: 'SoFi Stadium, Los Angeles'
    },
    {
      id: 'M27',
      matchNumber: 27,
      phase: 'Fase de grupos',
      round: '2ª rodada',
      group: 'Grupo B',
      date: '2026-06-18',
      time: '19:00',
      home: 'Canadá',
      away: 'Catar',
      stadium: 'BC Place, Vancouver'
    },
    {
      id: 'M28',
      matchNumber: 28,
      phase: 'Fase de grupos',
      round: '2ª rodada',
      group: 'Grupo A',
      date: '2026-06-18',
      time: '22:00',
      home: 'México',
      away: 'Coreia do Sul',
      stadium: 'Estádio Akron, Guadalajara'
    },
    {
      id: 'M29',
      matchNumber: 29,
      phase: 'Fase de grupos',
      round: '2ª rodada',
      group: 'Grupo D',
      date: '2026-06-20',
      time: '00:00',
      home: 'Turquia',
      away: 'Paraguai',
      stadium: 'Levi’s Stadium, San Francisco Bay Area'
    },
    {
      id: 'M30',
      matchNumber: 30,
      phase: 'Fase de grupos',
      round: '2ª rodada',
      group: 'Grupo D',
      date: '2026-06-19',
      time: '16:00',
      home: 'Estados Unidos',
      away: 'Austrália',
      stadium: 'Lumen Field, Seattle'
    },
    {
      id: 'M31',
      matchNumber: 31,
      phase: 'Fase de grupos',
      round: '2ª rodada',
      group: 'Grupo C',
      date: '2026-06-19',
      time: '19:00',
      home: 'Escócia',
      away: 'Marrocos',
      stadium: 'Gillette Stadium, Boston'
    },
    {
      id: 'M32',
      matchNumber: 32,
      phase: 'Fase de grupos',
      round: '2ª rodada',
      group: 'Grupo C',
      date: '2026-06-19',
      time: '21:30',
      home: 'Brasil',
      away: 'Haiti',
      stadium: 'Lincoln Financial Field, Filadélfia'
    },
    {
      id: 'M33',
      matchNumber: 33,
      phase: 'Fase de grupos',
      round: '2ª rodada',
      group: 'Grupo F',
      date: '2026-06-20',
      time: '23:00',
      home: 'Tunísia',
      away: 'Japão',
      stadium: 'Estádio BBVA, Monterrey'
    },
    {
      id: 'M34',
      matchNumber: 34,
      phase: 'Fase de grupos',
      round: '2ª rodada',
      group: 'Grupo F',
      date: '2026-06-20',
      time: '14:00',
      home: 'Holanda',
      away: 'Suécia',
      stadium: 'NRG Stadium, Houston'
    },
    {
      id: 'M35',
      matchNumber: 35,
      phase: 'Fase de grupos',
      round: '2ª rodada',
      group: 'Grupo E',
      date: '2026-06-20',
      time: '17:00',
      home: 'Alemanha',
      away: 'Costa do Marfim',
      stadium: 'BMO Field, Toronto'
    },
    {
      id: 'M36',
      matchNumber: 36,
      phase: 'Fase de grupos',
      round: '2ª rodada',
      group: 'Grupo E',
      date: '2026-06-20',
      time: '21:00',
      home: 'Equador',
      away: 'Curaçao',
      stadium: 'Arrowhead Stadium, Kansas City'
    },
    {
      id: 'M37',
      matchNumber: 37,
      phase: 'Fase de grupos',
      round: '2ª rodada',
      group: 'Grupo H',
      date: '2026-06-21',
      time: '13:00',
      home: 'Espanha',
      away: 'Arábia Saudita',
      stadium: 'Mercedes-Benz Stadium, Atlanta'
    },
    {
      id: 'M38',
      matchNumber: 38,
      phase: 'Fase de grupos',
      round: '2ª rodada',
      group: 'Grupo G',
      date: '2026-06-21',
      time: '16:00',
      home: 'Bélgica',
      away: 'Irã',
      stadium: 'SoFi Stadium, Los Angeles'
    },
    {
      id: 'M39',
      matchNumber: 39,
      phase: 'Fase de grupos',
      round: '2ª rodada',
      group: 'Grupo H',
      date: '2026-06-21',
      time: '19:00',
      home: 'Uruguai',
      away: 'Cabo Verde',
      stadium: 'Hard Rock Stadium, Miami'
    },
    {
      id: 'M40',
      matchNumber: 40,
      phase: 'Fase de grupos',
      round: '2ª rodada',
      group: 'Grupo G',
      date: '2026-06-21',
      time: '22:00',
      home: 'Nova Zelândia',
      away: 'Egito',
      stadium: 'BC Place, Vancouver'
    },
    {
      id: 'M41',
      matchNumber: 41,
      phase: 'Fase de grupos',
      round: '2ª rodada',
      group: 'Grupo J',
      date: '2026-06-22',
      time: '14:00',
      home: 'Argentina',
      away: 'Áustria',
      stadium: 'AT&T Stadium, Dallas'
    },
    {
      id: 'M42',
      matchNumber: 42,
      phase: 'Fase de grupos',
      round: '2ª rodada',
      group: 'Grupo I',
      date: '2026-06-22',
      time: '18:00',
      home: 'França',
      away: 'Iraque',
      stadium: 'Lincoln Financial Field, Filadélfia'
    },
    {
      id: 'M43',
      matchNumber: 43,
      phase: 'Fase de grupos',
      round: '2ª rodada',
      group: 'Grupo I',
      date: '2026-06-22',
      time: '21:00',
      home: 'Noruega',
      away: 'Senegal',
      stadium: 'MetLife Stadium, Nova York/Nova Jersey'
    },
    {
      id: 'M44',
      matchNumber: 44,
      phase: 'Fase de grupos',
      round: '2ª rodada',
      group: 'Grupo J',
      date: '2026-06-23',
      time: '00:00',
      home: 'Jordânia',
      away: 'Argélia',
      stadium: 'Levi’s Stadium, San Francisco Bay Area'
    },
    {
      id: 'M45',
      matchNumber: 45,
      phase: 'Fase de grupos',
      round: '2ª rodada',
      group: 'Grupo K',
      date: '2026-06-23',
      time: '14:00',
      home: 'Portugal',
      away: 'Uzbequistão',
      stadium: 'NRG Stadium, Houston'
    },
    {
      id: 'M46',
      matchNumber: 46,
      phase: 'Fase de grupos',
      round: '2ª rodada',
      group: 'Grupo L',
      date: '2026-06-23',
      time: '17:00',
      home: 'Inglaterra',
      away: 'Gana',
      stadium: 'Gillette Stadium, Boston'
    },
    {
      id: 'M47',
      matchNumber: 47,
      phase: 'Fase de grupos',
      round: '2ª rodada',
      group: 'Grupo L',
      date: '2026-06-23',
      time: '20:00',
      home: 'Panamá',
      away: 'Croácia',
      stadium: 'BMO Field, Toronto'
    },
    {
      id: 'M48',
      matchNumber: 48,
      phase: 'Fase de grupos',
      round: '2ª rodada',
      group: 'Grupo K',
      date: '2026-06-23',
      time: '23:00',
      home: 'Colômbia',
      away: 'República Democrática do Congo',
      stadium: 'Estádio Akron, Guadalajara'
    },

    {
      id: 'M49',
      matchNumber: 49,
      phase: 'Fase de grupos',
      round: '3ª rodada',
      group: 'Grupo B',
      date: '2026-06-24',
      time: '16:00',
      home: 'Suíça',
      away: 'Canadá',
      stadium: 'BC Place, Vancouver'
    },
    {
      id: 'M50',
      matchNumber: 50,
      phase: 'Fase de grupos',
      round: '3ª rodada',
      group: 'Grupo B',
      date: '2026-06-24',
      time: '16:00',
      home: 'Bósnia e Herzegovina',
      away: 'Catar',
      stadium: 'Lumen Field, Seattle'
    },
    {
      id: 'M51',
      matchNumber: 51,
      phase: 'Fase de grupos',
      round: '3ª rodada',
      group: 'Grupo C',
      date: '2026-06-24',
      time: '19:00',
      home: 'Escócia',
      away: 'Brasil',
      stadium: 'Hard Rock Stadium, Miami'
    },
    {
      id: 'M52',
      matchNumber: 52,
      phase: 'Fase de grupos',
      round: '3ª rodada',
      group: 'Grupo C',
      date: '2026-06-24',
      time: '19:00',
      home: 'Marrocos',
      away: 'Haiti',
      stadium: 'Mercedes-Benz Stadium, Atlanta'
    },
    {
      id: 'M53',
      matchNumber: 53,
      phase: 'Fase de grupos',
      round: '3ª rodada',
      group: 'Grupo A',
      date: '2026-06-24',
      time: '22:00',
      home: 'Tchéquia',
      away: 'México',
      stadium: 'Estádio Azteca, Cidade do México'
    },
    {
      id: 'M54',
      matchNumber: 54,
      phase: 'Fase de grupos',
      round: '3ª rodada',
      group: 'Grupo A',
      date: '2026-06-24',
      time: '22:00',
      home: 'África do Sul',
      away: 'Coreia do Sul',
      stadium: 'Estádio BBVA, Monterrey'
    },
    {
      id: 'M55',
      matchNumber: 55,
      phase: 'Fase de grupos',
      round: '3ª rodada',
      group: 'Grupo E',
      date: '2026-06-25',
      time: '17:00',
      home: 'Equador',
      away: 'Alemanha',
      stadium: 'MetLife Stadium, Nova York/Nova Jersey'
    },
    {
      id: 'M56',
      matchNumber: 56,
      phase: 'Fase de grupos',
      round: '3ª rodada',
      group: 'Grupo E',
      date: '2026-06-25',
      time: '17:00',
      home: 'Curaçao',
      away: 'Costa do Marfim',
      stadium: 'Lincoln Financial Field, Filadélfia'
    },
    {
      id: 'M57',
      matchNumber: 57,
      phase: 'Fase de grupos',
      round: '3ª rodada',
      group: 'Grupo F',
      date: '2026-06-25',
      time: '20:00',
      home: 'Japão',
      away: 'Suécia',
      stadium: 'AT&T Stadium, Dallas'
    },
    {
      id: 'M58',
      matchNumber: 58,
      phase: 'Fase de grupos',
      round: '3ª rodada',
      group: 'Grupo F',
      date: '2026-06-25',
      time: '20:00',
      home: 'Tunísia',
      away: 'Holanda',
      stadium: 'Arrowhead Stadium, Kansas City'
    },
    {
      id: 'M59',
      matchNumber: 59,
      phase: 'Fase de grupos',
      round: '3ª rodada',
      group: 'Grupo D',
      date: '2026-06-25',
      time: '23:00',
      home: 'Turquia',
      away: 'Estados Unidos',
      stadium: 'SoFi Stadium, Los Angeles'
    },
    {
      id: 'M60',
      matchNumber: 60,
      phase: 'Fase de grupos',
      round: '3ª rodada',
      group: 'Grupo D',
      date: '2026-06-25',
      time: '23:00',
      home: 'Paraguai',
      away: 'Austrália',
      stadium: 'Levi’s Stadium, San Francisco Bay Area'
    },
    {
      id: 'M61',
      matchNumber: 61,
      phase: 'Fase de grupos',
      round: '3ª rodada',
      group: 'Grupo I',
      date: '2026-06-26',
      time: '16:00',
      home: 'Noruega',
      away: 'França',
      stadium: 'Gillette Stadium, Boston'
    },
    {
      id: 'M62',
      matchNumber: 62,
      phase: 'Fase de grupos',
      round: '3ª rodada',
      group: 'Grupo I',
      date: '2026-06-26',
      time: '16:00',
      home: 'Senegal',
      away: 'Iraque',
      stadium: 'BMO Field, Toronto'
    },
    {
      id: 'M63',
      matchNumber: 63,
      phase: 'Fase de grupos',
      round: '3ª rodada',
      group: 'Grupo H',
      date: '2026-06-26',
      time: '21:00',
      home: 'Cabo Verde',
      away: 'Arábia Saudita',
      stadium: 'NRG Stadium, Houston'
    },
    {
      id: 'M64',
      matchNumber: 64,
      phase: 'Fase de grupos',
      round: '3ª rodada',
      group: 'Grupo H',
      date: '2026-06-26',
      time: '21:00',
      home: 'Uruguai',
      away: 'Espanha',
      stadium: 'Estádio Akron, Guadalajara'
    },
    {
      id: 'M65',
      matchNumber: 65,
      phase: 'Fase de grupos',
      round: '3ª rodada',
      group: 'Grupo G',
      date: '2026-06-27',
      time: '00:00',
      home: 'Egito',
      away: 'Irã',
      stadium: 'Lumen Field, Seattle'
    },
    {
      id: 'M66',
      matchNumber: 66,
      phase: 'Fase de grupos',
      round: '3ª rodada',
      group: 'Grupo G',
      date: '2026-06-27',
      time: '00:00',
      home: 'Nova Zelândia',
      away: 'Bélgica',
      stadium: 'BC Place, Vancouver'
    },
    {
      id: 'M67',
      matchNumber: 67,
      phase: 'Fase de grupos',
      round: '3ª rodada',
      group: 'Grupo L',
      date: '2026-06-27',
      time: '18:00',
      home: 'Panamá',
      away: 'Inglaterra',
      stadium: 'MetLife Stadium, Nova York/Nova Jersey'
    },
    {
      id: 'M68',
      matchNumber: 68,
      phase: 'Fase de grupos',
      round: '3ª rodada',
      group: 'Grupo L',
      date: '2026-06-27',
      time: '18:00',
      home: 'Croácia',
      away: 'Gana',
      stadium: 'Lincoln Financial Field, Filadélfia'
    },
    {
      id: 'M69',
      matchNumber: 69,
      phase: 'Fase de grupos',
      round: '3ª rodada',
      group: 'Grupo K',
      date: '2026-06-27',
      time: '20:30',
      home: 'Colômbia',
      away: 'Portugal',
      stadium: 'Hard Rock Stadium, Miami'
    },
    {
      id: 'M70',
      matchNumber: 70,
      phase: 'Fase de grupos',
      round: '3ª rodada',
      group: 'Grupo K',
      date: '2026-06-27',
      time: '20:30',
      home: 'República Democrática do Congo',
      away: 'Uzbequistão',
      stadium: 'Mercedes-Benz Stadium, Atlanta'
    },
    {
      id: 'M71',
      matchNumber: 71,
      phase: 'Fase de grupos',
      round: '3ª rodada',
      group: 'Grupo J',
      date: '2026-06-27',
      time: '23:00',
      home: 'Argélia',
      away: 'Áustria',
      stadium: 'Arrowhead Stadium, Kansas City'
    },
    {
      id: 'M72',
      matchNumber: 72,
      phase: 'Fase de grupos',
      round: '3ª rodada',
      group: 'Grupo J',
      date: '2026-06-27',
      time: '23:00',
      home: 'Jordânia',
      away: 'Argentina',
      stadium: 'AT&T Stadium, Dallas'
    }
  ];
}

function getPrediction(predictions, gameId) {
  const prediction = predictions?.[gameId];

  if (!prediction) {
    return null;
  }

  const homeScore = prediction.homeScore ?? prediction.home ?? prediction.homeGoals;
  const awayScore = prediction.awayScore ?? prediction.away ?? prediction.awayGoals;

  if (homeScore === '' || awayScore === '' || homeScore === undefined || awayScore === undefined) {
    return null;
  }

  const parsedHomeScore = Number(homeScore);
  const parsedAwayScore = Number(awayScore);

  if (Number.isNaN(parsedHomeScore) || Number.isNaN(parsedAwayScore)) {
    return null;
  }

  return {
    homeScore: parsedHomeScore,
    awayScore: parsedAwayScore
  };
}

function createEmptyStanding(team, groupCode) {
  return {
    team,
    groupCode,
    played: 0,
    points: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0
  };
}

function calculateGroupStandings(groupGames, predictions) {
  const standingsByGroup = {};

  groups.forEach((group) => {
    standingsByGroup[group.code] = group.teams.map((team) =>
      createEmptyStanding(team, group.code)
    );
  });

  groupGames.forEach((game) => {
    const prediction = getPrediction(predictions, game.id);

    if (!prediction) {
      return;
    }

    const groupCode = game.group.replace('Grupo ', '');
    const groupStandings = standingsByGroup[groupCode];

    if (!groupStandings) {
      return;
    }

    const homeStanding = groupStandings.find((item) => item.team === game.home);
    const awayStanding = groupStandings.find((item) => item.team === game.away);

    if (!homeStanding || !awayStanding) {
      return;
    }

    const { homeScore, awayScore } = prediction;

    homeStanding.played += 1;
    awayStanding.played += 1;

    homeStanding.goalsFor += homeScore;
    homeStanding.goalsAgainst += awayScore;

    awayStanding.goalsFor += awayScore;
    awayStanding.goalsAgainst += homeScore;

    if (homeScore > awayScore) {
      homeStanding.points += 3;
      homeStanding.wins += 1;
      awayStanding.losses += 1;
    } else if (awayScore > homeScore) {
      awayStanding.points += 3;
      awayStanding.wins += 1;
      homeStanding.losses += 1;
    } else {
      homeStanding.points += 1;
      awayStanding.points += 1;
      homeStanding.draws += 1;
      awayStanding.draws += 1;
    }

    homeStanding.goalDifference = homeStanding.goalsFor - homeStanding.goalsAgainst;
    awayStanding.goalDifference = awayStanding.goalsFor - awayStanding.goalsAgainst;
  });

  Object.keys(standingsByGroup).forEach((groupCode) => {
    standingsByGroup[groupCode].sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      if (b.goalDifference !== a.goalDifference) return b.goalDifference - a.goalDifference;
      if (b.goalsFor !== a.goalsFor) return b.goalsFor - a.goalsFor;
      if (b.wins !== a.wins) return b.wins - a.wins;

      return a.team.localeCompare(b.team);
    });
  });

  return standingsByGroup;
}

function getQualifiedTeams(standingsByGroup) {
  const firstPlaced = [];
  const secondPlaced = [];
  const thirdPlaced = [];

  Object.keys(standingsByGroup).forEach((groupCode) => {
    const groupStanding = standingsByGroup[groupCode];

    if (!groupStanding || groupStanding.length < 4) {
      return;
    }

    firstPlaced.push({ ...groupStanding[0], position: 1 });
    secondPlaced.push({ ...groupStanding[1], position: 2 });
    thirdPlaced.push({ ...groupStanding[2], position: 3 });
  });

  const bestThirdPlaced = thirdPlaced
    .sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      if (b.goalDifference !== a.goalDifference) return b.goalDifference - a.goalDifference;
      if (b.goalsFor !== a.goalsFor) return b.goalsFor - a.goalsFor;
      if (b.wins !== a.wins) return b.wins - a.wins;

      return a.team.localeCompare(b.team);
    })
    .slice(0, 8);

  return {
    firstPlaced,
    secondPlaced,
    bestThirdPlaced,
    qualifiedTeams: [...firstPlaced, ...secondPlaced, ...bestThirdPlaced]
  };
}

function buildRoundOf32Teams(standingsByGroup) {
  const { firstPlaced, secondPlaced, bestThirdPlaced } = getQualifiedTeams(standingsByGroup);

  const first = firstPlaced.sort((a, b) => a.groupCode.localeCompare(b.groupCode));
  const second = secondPlaced.sort((a, b) => a.groupCode.localeCompare(b.groupCode));
  const third = bestThirdPlaced;

  return [
    first[0], third[7],
    first[1], third[6],
    first[2], third[5],
    first[3], third[4],
    first[4], third[3],
    first[5], third[2],
    first[6], third[1],
    first[7], third[0],

    first[8], second[11],
    first[9], second[10],
    first[10], second[9],
    first[11], second[8],

    second[0], second[7],
    second[1], second[6],
    second[2], second[5],
    second[3], second[4]
  ];
}

function getWinnerFromGame(game, predictions) {
  const prediction = getPrediction(predictions, game.id);

  if (!prediction) {
    return null;
  }

  const { homeScore, awayScore } = prediction;

  if (homeScore > awayScore) {
    return game.home;
  }

  if (awayScore > homeScore) {
    return game.away;
  }

  const penaltyWinner = predictions?.[game.id]?.penaltyWinner;

  if (penaltyWinner === game.home || penaltyWinner === game.away) {
    return penaltyWinner;
  }

  return null;
}

function createKnockoutMatch({
  matchNumber,
  phase,
  round,
  date,
  time,
  home,
  away,
  stadium
}) {
  return {
    id: `M${matchNumber}`,
    matchNumber,
    phase,
    round,
    group: '',
    date,
    time,
    home,
    away,
    stadium
  };
}

function knockoutGames(startNumber, predictions = {}, standingsByGroup = null) {
  const games = [];
  let matchNumber = startNumber;

  const qualifiedTeams = standingsByGroup
    ? buildRoundOf32Teams(standingsByGroup)
    : [];

  const roundOf32Base = [
    { date: '2026-06-28', time: '13:00' },
    { date: '2026-06-28', time: '16:00' },
    { date: '2026-06-28', time: '19:00' },
    { date: '2026-06-28', time: '22:00' },
    { date: '2026-06-29', time: '13:00' },
    { date: '2026-06-29', time: '16:00' },
    { date: '2026-06-29', time: '19:00' },
    { date: '2026-06-29', time: '22:00' },
    { date: '2026-06-30', time: '13:00' },
    { date: '2026-06-30', time: '16:00' },
    { date: '2026-06-30', time: '19:00' },
    { date: '2026-06-30', time: '22:00' },
    { date: '2026-07-01', time: '13:00' },
    { date: '2026-07-01', time: '16:00' },
    { date: '2026-07-01', time: '19:00' },
    { date: '2026-07-01', time: '22:00' }
  ];

  const roundOf32 = roundOf32Base.map((item, index) => {
    const homeTeam = qualifiedTeams[index * 2]?.team;
    const awayTeam = qualifiedTeams[index * 2 + 1]?.team;

    return createKnockoutMatch({
      matchNumber: matchNumber++,
      phase: '32 avos de final',
      round: '32 avos de final',
      date: item.date,
      time: item.time,
      home: homeTeam || `Classificado ${index * 2 + 1}`,
      away: awayTeam || `Classificado ${index * 2 + 2}`,
      stadium: stadiums[(startNumber + index - 1) % stadiums.length]
    });
  });

  games.push(...roundOf32);

  const roundOf16Base = [
    { date: '2026-07-04', time: '13:00' },
    { date: '2026-07-04', time: '16:00' },
    { date: '2026-07-04', time: '19:00' },
    { date: '2026-07-04', time: '22:00' },
    { date: '2026-07-05', time: '13:00' },
    { date: '2026-07-05', time: '16:00' },
    { date: '2026-07-05', time: '19:00' },
    { date: '2026-07-05', time: '22:00' }
  ];

  const roundOf16 = roundOf16Base.map((item, index) => {
    const previousGame1 = roundOf32[index * 2];
    const previousGame2 = roundOf32[index * 2 + 1];

    const homeTeam = getWinnerFromGame(previousGame1, predictions);
    const awayTeam = getWinnerFromGame(previousGame2, predictions);

    return createKnockoutMatch({
      matchNumber: matchNumber++,
      phase: 'Oitavas de final',
      round: 'Oitavas de final',
      date: item.date,
      time: item.time,
      home: homeTeam || `Vencedor ${previousGame1.id}`,
      away: awayTeam || `Vencedor ${previousGame2.id}`,
      stadium: stadiums[(matchNumber - 2) % stadiums.length]
    });
  });

  games.push(...roundOf16);

  const quarterFinalBase = [
    { date: '2026-07-09', time: '13:00' },
    { date: '2026-07-09', time: '16:00' },
    { date: '2026-07-10', time: '19:00' },
    { date: '2026-07-10', time: '22:00' }
  ];

  const quarterFinals = quarterFinalBase.map((item, index) => {
    const previousGame1 = roundOf16[index * 2];
    const previousGame2 = roundOf16[index * 2 + 1];

    const homeTeam = getWinnerFromGame(previousGame1, predictions);
    const awayTeam = getWinnerFromGame(previousGame2, predictions);

    return createKnockoutMatch({
      matchNumber: matchNumber++,
      phase: 'Quartas de final',
      round: 'Quartas de final',
      date: item.date,
      time: item.time,
      home: homeTeam || `Vencedor ${previousGame1.id}`,
      away: awayTeam || `Vencedor ${previousGame2.id}`,
      stadium: stadiums[(matchNumber - 2) % stadiums.length]
    });
  });

  games.push(...quarterFinals);

  const semifinalsBase = [
    { date: '2026-07-14', time: '16:00' },
    { date: '2026-07-15', time: '16:00' }
  ];

  const semifinals = semifinalsBase.map((item, index) => {
    const previousGame1 = quarterFinals[index * 2];
    const previousGame2 = quarterFinals[index * 2 + 1];

    const homeTeam = getWinnerFromGame(previousGame1, predictions);
    const awayTeam = getWinnerFromGame(previousGame2, predictions);

    return createKnockoutMatch({
      matchNumber: matchNumber++,
      phase: 'Semifinais',
      round: 'Semifinais',
      date: item.date,
      time: item.time,
      home: homeTeam || `Vencedor ${previousGame1.id}`,
      away: awayTeam || `Vencedor ${previousGame2.id}`,
      stadium: stadiums[(matchNumber - 2) % stadiums.length]
    });
  });

  games.push(...semifinals);

  const thirdPlaceHome = getWinnerFromGame(semifinals[0], predictions)
    ? `Perdedor ${semifinals[0].id}`
    : `Perdedor ${semifinals[0].id}`;

  const thirdPlaceAway = getWinnerFromGame(semifinals[1], predictions)
    ? `Perdedor ${semifinals[1].id}`
    : `Perdedor ${semifinals[1].id}`;

  games.push(
    createKnockoutMatch({
      matchNumber: matchNumber++,
      phase: 'Disputa de 3º lugar',
      round: 'Disputa de 3º lugar',
      date: '2026-07-18',
      time: '16:00',
      home: thirdPlaceHome,
      away: thirdPlaceAway,
      stadium: stadiums[(matchNumber - 2) % stadiums.length]
    })
  );

  const finalHome = getWinnerFromGame(semifinals[0], predictions);
  const finalAway = getWinnerFromGame(semifinals[1], predictions);

  games.push(
    createKnockoutMatch({
      matchNumber: matchNumber++,
      phase: 'Final',
      round: 'Final',
      date: '2026-07-19',
      time: '16:00',
      home: finalHome || `Vencedor ${semifinals[0].id}`,
      away: finalAway || `Vencedor ${semifinals[1].id}`,
      stadium: 'MetLife Stadium, Nova York/Nova Jersey'
    })
  );

  return games;
}

const groupGames = groupStageGames();

export function getGamesWithUpdatedKnockout(predictions = {}) {
  const standingsByGroup = calculateGroupStandings(groupGames, predictions);
  const knockout = knockoutGames(groupGames.length + 1, predictions, standingsByGroup);

  return [...groupGames, ...knockout];
}

export function getStandings(predictions = {}) {
  return calculateGroupStandings(groupGames, predictions);
}

export const games = getGamesWithUpdatedKnockout({});

export default games;