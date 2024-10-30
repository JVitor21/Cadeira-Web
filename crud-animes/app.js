const express = require('express');
const app = express();

app.use(express.json());

//Um BD em memória
let animes = [
    {
        id: 1,
        name: "Naruto",
        genre: "Ação",
        studio: "Pierrot"
    }
];

// Lista todos os snimes
app.get('/animes', (req, res) => {
    res.json(animes);
});

// Lista animes por id
app.get('/animes/:id', (req, res) => {
    const anime = animes.find(a => a.id === parseInt(req.params.id));
    if (!anime) return res.status(404).send('Anime não encontrado!');
    res.json(anime);
});

//Cria um novo anime
app.post('/animes', (req, res) => {
    const { name, genre, studio } = req.body;

    if (!name || !genre || !studio) {
        return res.status(400).send('Todos os campos são obrigatorios');
    }

    const newAnime = {
        id: animes.length + 1, // Gera um id automáticamente
        name,
        genre,
        studio
    };

    animes.push(newAnime);
    res.status(201).json(newAnime)
});

//Atualiza um anime pelo id
app.put('/animes/:id', (req, res) => {
    const anime = animes.find(a => a.id === parseInt(req.params.id));
    if (!anime) return res.status(404).send('Anime não encontrado!');

    const { name, genre, studio } = req.body;

    if (!name || !genre || !studio) {
        return res.status(400).send('Todos os campos são obrigatórios!');
    }

    anime.name = name;
    anime.genre = genre;
    anime.studio = studio;
    res.json(anime);
});

//Deleta um anime pelo id
app.delete('/animes/:id', (req, res) => {
    const animeIndex = animes.findIndex(a => a.id === parseInt(req.params.id));
    if (animeIndex == -1) return res.status(400).send('Anime não encontrado!');

    animes.splice(animeIndex, 1);
    res.status(204).send(); //No Content
});

// Exporta o app para uso no server.js
module.exports = app;
