# PEPS

Este repositório contém uma pequena aplicação web estática utilizada em treinamentos
sobre as boas práticas de reposição de hortifrúti (PEPS - Primeiro que Entra,
Primeiro que Sai). O projeto é composto por diversas páginas HTML estilizadas com
[Tailwind CSS](https://cdn.tailwindcss.com/) e imagens ilustrativas.

## Como abrir as páginas

Não há processo de build. Basta clonar o repositório e abrir o arquivo
`index.html` em seu navegador preferido. Se desejar trabalhar com um servidor
local, qualquer servidor estático simples (como a extensão Live Server do VS
Code ou `python -m http.server`) funcionará.

As demais páginas (`pagina002.html`, `pagina003.html`, `pagina004.html` e
`treinamento.html`) podem ser acessadas por links contidos na página inicial.

## Scripts

- **theme.js**: centraliza a lógica de alternância do tema claro/escuro.
- **menu.js** (após refatorar): arquivo planejado para reunir todo o código de
  abertura e fechamento do menu mobile, que hoje está duplicado dentro das
  páginas HTML.

## Implantação

Por ser um site estático, a publicação pode ser feita em qualquer hospedagem
que sirva arquivos HTML, como GitHub Pages ou um servidor HTTP simples.
