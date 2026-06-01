export const teamFlags = {
  'México': { code: 'MX', flag: '🇲🇽' },
  'África do Sul': { code: 'ZA', flag: '🇿🇦' },
  'Coreia do Sul': { code: 'KR', flag: '🇰🇷' },
  'Tchéquia': { code: 'CZ', flag: '🇨🇿' },
  'Estados Unidos': { code: 'US', flag: '🇺🇸' },
  'Paraguai': { code: 'PY', flag: '🇵🇾' },
  'Suíça': { code: 'CH', flag: '🇨🇭' },
  'Camarões': { code: 'CM', flag: '🇨🇲' },
  'Brasil': { code: 'BR', flag: '🇧🇷' },
  'Escócia': { code: 'GB-SCT', flag: '🏴' },
  'Haiti': { code: 'HT', flag: '🇭🇹' },
  'Panamá': { code: 'PA', flag: '🇵🇦' },
  'Austrália': { code: 'AU', flag: '🇦🇺' },
  'Turquia': { code: 'TR', flag: '🇹🇷' },
  'Alemanha': { code: 'DE', flag: '🇩🇪' },
  'Curaçao': { code: 'CW', flag: '🇨🇼' },
  'Holanda': { code: 'NL', flag: '🇳🇱' },
  'Japão': { code: 'JP', flag: '🇯🇵' },
  'Uruguai': { code: 'UY', flag: '🇺🇾' },
  'Cabo Verde': { code: 'CV', flag: '🇨🇻' },
  'Arábia Saudita': { code: 'SA', flag: '🇸🇦' },
  'Portugal': { code: 'PT', flag: '🇵🇹' },
  'Colômbia': { code: 'CO', flag: '🇨🇴' }
};

export function getTeamFlag(teamName) {
  if (!teamName) return { code: '--', flag: '🏳️' };

  const direct = teamFlags[teamName];
  if (direct) return direct;

  const normalized = teamName
    .replace(/\s+[A-Z]\d$/i, '')
    .replace(/\s+\d+$/i, '')
    .trim();

  return teamFlags[normalized] || { code: '--', flag: '🏳️' };
}
