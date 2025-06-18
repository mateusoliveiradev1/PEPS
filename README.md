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

Site feito para mostrar os conceitos do PEPS.


## Como executar localmente

Basta abrir o arquivo `index.html` em seu navegador ou iniciar um servidor estático na raiz do projeto. Um exemplo com Python:

```bash
python3 -m http.server
```

Depois acesse `http://localhost:8000` no navegador.

## Estrutura do projeto

- **Style/** – contém o CSS utilizado nas páginas. O arquivo `style.css` define estilos base e regras de responsividade.
- **imagens/** – guarda todos os ativos de imagem usados pelo site.
- **paginaXXX.html** – páginas de conteúdo adicionais. Para criar uma nova, duplique uma existente e ajuste os links do menu se necessário.

## Scripts


- **theme.js**: centraliza a lógica de alternância do tema claro/escuro.
- **menu.js** (após refatorar): arquivo planejado para reunir todo o código de
  abertura e fechamento do menu mobile, que hoje está duplicado dentro das
  páginas HTML.

## Implantação

Por ser um site estático, a publicação pode ser feita em qualquer hospedagem
que sirva arquivos HTML, como GitHub Pages ou um servidor HTTP simples.

- `theme.js` gerencia a troca de tema claro/escuro e salva a preferência no `localStorage`.
- `menu.js` concentra a lógica do menu mobile, evitando repetição de código nos arquivos HTML.


