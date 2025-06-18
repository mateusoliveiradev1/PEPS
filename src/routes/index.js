const express = require('express');
const router = express.Router();
const trainingData = require('../data/training.json');

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/pagina002', (req, res) => {
  res.render('pagina002');
});
router.get('/pagina003', (req, res) => {
  res.render('pagina003');
});
router.get('/pagina004', (req, res) => {
  res.render('pagina004');
});
router.get('/treinamento', (req, res) => {
  res.render('treinamento');
});

router.get('/api/training', (req, res) => {
  res.json(trainingData);
});

module.exports = router;
