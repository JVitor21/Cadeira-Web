const AnimeService = require('../services/animeservice');

class AnimeController {
    static getAll(req, res) {
        const animes = AnimeService.getAll();
        res.json(animes);
    }

    static getByID(req, res) {
        try {
            const id = parseInt(req.params.id);
            const anime = AnimeService.getByID(id);
            res.json(animes);
        } catch (error) {
            res.status(404).send(error.message);
        }
    }

    static create(req, res) {
        try {
            const newAnime = AnimeService.create(req.body);
            res.status(201).json(newAnime);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    static update(req, res) {
        try {
            const id = parseInt(req.params.id);
            const updateAnime = AnimeService.update(id, req.body);
            res.json(updateAnime);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    static delete(req, res) {
        try {
            const id = parseInt(req.params.id);
            AnimeService.delete(id);
            res.status(201).send();
        } catch (error) {
            res.status(404).send(error.message);
        }
    }
}

module.exports = AnimeController;