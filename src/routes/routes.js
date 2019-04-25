const express = require('express');

const routes = express.Router();

// Metodos Arquitetura REST - GET / POST / PUT / DELETE
routes.get('/', (req, res) => {
  res.send('funciona');
  console.warn('funciona');
});

module.exports = routes;
