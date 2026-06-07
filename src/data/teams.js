export const teamFlags = {
  'México': { code: 'MX', flag: '🇲🇽' },
  'África do Sul': { code: 'ZA', flag: '🇿🇦' },
  'Coreia do Sul': { code: 'KR', flag: '🇰🇷' },
  'Tchéquia': { code: 'CZ', flag: '🇨🇿' },
  'Canadá': { code: 'CA', flag: '🇨🇦' },
  'Bósnia e Herzegovina': { code: 'BA', flag: '🇧🇦' },
  'Catar': { code: 'QA', flag: '🇶🇦' },
  'Suíça': { code: 'CH', flag: '🇨🇭' },
  'Brasil': { code: 'BR', flag: '🇧🇷' },
  'Marrocos': { code: 'MA', flag: '🇲🇦' },
  'Haiti': { code: 'HT', flag: '🇭🇹' },
  'Escócia': { code: 'GB-SCT', flag: '🏴' },
  'Estados Unidos': { code: 'US', flag: '🇺🇸' },
  'Paraguai': { code: 'PY', flag: '🇵🇾' },
  'Austrália': { code: 'AU', flag: '🇦🇺' },
  'Turquia': { code: 'TR', flag: '🇹🇷' },
  'Alemanha': { code: 'DE', flag: '🇩🇪' },
  'Curaçao': { code: 'CW', flag: '🇨🇼' },
  'Costa do Marfim': { code: 'CI', flag: '🇨🇮' },
  'Equador': { code: 'EC', flag: '🇪🇨' },
  'Holanda': { code: 'NL', flag: '🇳🇱' },
  'Japão': { code: 'JP', flag: '🇯🇵' },
  'Suécia': { code: 'SE', flag: '🇸🇪' },
  'Tunísia': { code: 'TN', flag: '🇹🇳' },
  'Bélgica': { code: 'BE', flag: '🇧🇪' },
  'Egito': { code: 'EG', flag: '🇪🇬' },
  'Irã': { code: 'IR', flag: '🇮🇷' },
  'Nova Zelândia': { code: 'NZ', flag: '🇳🇿' },
  'Espanha': { code: 'ES', flag: '🇪🇸' },
  'Cabo Verde': { code: 'CV', flag: '🇨🇻' },
  'Arábia Saudita': { code: 'SA', flag: '🇸🇦' },
  'Uruguai': { code: 'UY', flag: '🇺🇾' },
  'França': { code: 'FR', flag: '🇫🇷' },
  'Senegal': { code: 'SN', flag: '🇸🇳' },
  'Iraque': { code: 'IQ', flag: '🇮🇶' },
  'Noruega': { code: 'NO', flag: '🇳🇴' },
  'Argentina': { code: 'AR', flag: '🇦🇷' },
  'Argélia': { code: 'DZ', flag: '🇩🇿' },
  'Áustria': { code: 'AT', flag: '🇦🇹' },
  'Jordânia': { code: 'JO', flag: '🇯🇴' },
  'Portugal': { code: 'PT', flag: '🇵🇹' },
  'Colômbia': { code: 'CO', flag: '🇨🇴' },
  'Uzbequistão': { code: 'UZ', flag: '🇺🇿' },
  'República Democrática do Congo': { code: 'CD', flag: '🇨🇩' },
  'Inglaterra': { code: 'GB-ENG', flag: '🏴' },
  'Croácia': { code: 'HR', flag: '🇭🇷' },
  'Gana': { code: 'GH', flag: '🇬🇭' },
  'Panamá': { code: 'PA', flag: '🇵🇦' }
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
