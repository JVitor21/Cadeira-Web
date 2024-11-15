const express = require('express');
const AnimeController = require('./controllers/animeController');

const app = express();

app.use(express.json());

app.get('/animes', AnimeController.getAll);
app.get('/animes/:id', AnimeController.getByID);
app.post('/animes', AnimeController.create);
app.put('/animes/:id', AnimeController.update);
app.delete('/animes/:id', AnimeController.delete);

// Exporta o app para uso no server.js
module.exports = app;
