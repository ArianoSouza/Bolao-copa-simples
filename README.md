# Bolão Copa 2026

Aplicação React simples para coletar palpites da Copa do Mundo 2026 e exportar um PDF paginado com os palpites.

## Como rodar

```bash
npm install
npm run dev
```

## Principais recursos

- Formulário com jogos da Copa 2026.
- Inputs de placar para cada jogo.
- Filtro por fase e busca por seleção, grupo ou estádio.
- Salvamento automático no navegador via `localStorage`.
- Botão para limpar todos os palpites.
- Exportação em PDF A4, separado por grupos e fases.
- Design com paleta visual inspirada na Copa: azul, vermelho, verde, amarelo, azul escuro e base clara.

## Estrutura

```text
bolao-copa-2026/
  index.html
  package.json
  src/
    main.jsx
    App.jsx
    styles.css
    data/
      games.js
```

## Observação sobre jogos

A base `src/data/games.js` já traz 104 jogos estruturados. Os jogos de fases eliminatórias ficam como placeholders, porque dependem da classificação durante a Copa. Caso a tabela oficial seja atualizada, edite apenas esse arquivo.
