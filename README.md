# PEPS

Este repositório contém uma pequena aplicação web utilizada em treinamentos sobre boas práticas de reposição de hortifrúti (PEPS - Primeiro que Entra, Primeiro que Sai). Agora o projeto roda em [Node.js](https://nodejs.org) com [Express](https://expressjs.com/) e usa [EJS](https://ejs.co/) para renderização das páginas.

## Como executar localmente

```bash
npm install
npm start
```

O servidor ficará disponível em `http://localhost:3000`. Todas as rotas correspondem às antigas páginas HTML: `/`, `/pagina002`, `/pagina003`, `/pagina004` e `/treinamento`.

## Estrutura do projeto

- **src/** – contém o servidor Express, rotas e templates EJS.
- **imagens/** – guarda todos os ativos de imagem usados pelo site.
- **Style/** – contém o CSS utilizado nas páginas.
- **menu.js** e **theme.js** – scripts compartilhados para o menu e alternância de tema.

A página de treinamento também consome dados disponibilizados em `/api/training`, exibindo o conteúdo de forma dinâmica.
