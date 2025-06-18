# PEPS

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

- `theme.js` gerencia a troca de tema claro/escuro e salva a preferência no `localStorage`.
- `menu.js` concentra a lógica do menu mobile, evitando repetição de código nos arquivos HTML.

