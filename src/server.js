const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3000;

app.engine('hbs', exphbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '..', 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..')));

app.get('/index.html', (req, res) => {
  res.render('index');
});

app.get('/', (req, res) => {
  res.render('index');
});

// rotas para as páginas convertidas em templates
app.get('/pagina002.html', (req, res) => {
  res.render('pagina002');
});

app.get('/pagina003.html', (req, res) => {
  res.render('pagina003');
});

app.get('/pagina004.html', (req, res) => {
  res.render('pagina004');
});

app.get('/treinamento.html', (req, res) => {
  res.render('treinamento');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/courses', (req, res) => {
  res.render('courses');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
