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

## Backend e Banco de Dados

A pasta `backend/` contém uma API em Node.js que agora usa o [Supabase](https://supabase.com/) para armazenamento de dados. Crie um projeto no Supabase e defina as variáveis de ambiente `SUPABASE_URL` e `SUPABASE_KEY` antes de iniciar o servidor. Você pode criar um arquivo `.env` (baseado em `.env.example`) dentro da pasta `backend/` com esses valores:

```bash
cd backend
npm install
# copie .env.example para .env e edite com suas credenciais
cp .env.example .env
npm start        # inicia o servidor em http://localhost:3000
```

Exemplo de `.env`:

```bash
SUPABASE_URL=https://hovuxwfziehqsbclyvoh.supabase.co
SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvdnV4d2Z6aWVocXNiY2x5dm9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzMDMwMzcsImV4cCI6MjA2NTg3OTAzN30.B9H06zOdiVGcE1W72HoPnu92fojlcOXOnkvHeviq0Fw
```

Os modelos disponíveis são **users**, **courses** e **xp_history**. As operações CRUD são executadas nas tabelas do projeto Supabase.


## Testes

Para rodar a suíte de testes Python, instale as dependências e execute o `pytest` na raiz do projeto:

```bash
pip install -r requirements.txt
pytest
```


Este backend é opcional e não é utilizado diretamente pelas páginas HTML atuais. Suas rotas HTTP podem ser chamadas via JavaScript para adicionar funcionalidades dinâmicas, mas o frontend continua funcionando apenas com arquivos estáticos.

## Aplicação Flask

O arquivo `app.py` implementa um servidor em Flask que também pode servir as páginas e oferecer um fluxo simples de login. Para executá-lo, certifique-se de ter o Flask instalado e rode:

```bash
python app.py
```

O app iniciará em `http://localhost:5000` permitindo acessar `/login` e `/signup`. Ele funciona como um exemplo de backend em Python, protegendo a página `treinamento.html`, mas não é obrigatório para visualizar o conteúdo estático do site.


### Exemplo de uso da API

Algumas rotas disponíveis quando o servidor está rodando em `http://localhost:3000`:

```bash
# listar cursos
curl http://localhost:3000/courses

# criar um curso
curl -X POST http://localhost:3000/courses \
  -H "Content-Type: application/json" \
  -d '{"title": "Curso de PEPS", "description": "Introdução ao método"}'

# atualizar um curso
curl -X PUT http://localhost:3000/courses/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "Curso atualizado", "description": "Descrição"}'

# remover um curso
curl -X DELETE http://localhost:3000/courses/1

# adicionar XP para um usuário
curl -X POST http://localhost:3000/xp-history \
  -H "Content-Type: application/json" \
  -d '{"user_id": 1, "course_id": 1, "xp": 50}'

# histórico de XP do usuário
curl http://localhost:3000/xp-history/user/1
```

## Servidor Flask

O arquivo `app.py` disponibiliza um pequeno servidor em Flask para fins de
autenticação. Defina a variável de ambiente `SECRET_KEY` antes de executá-lo, a
fim de configurar a chave de sessão utilizada pela aplicação:

```bash
export SECRET_KEY=minha-chave-secreta
python app.py
```

Caso a variável não seja definida, um valor padrão será utilizado.



