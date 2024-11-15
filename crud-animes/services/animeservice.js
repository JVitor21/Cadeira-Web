const AnimeModel = require('../models/animeModel');

class AnimeService {
    static getAll() {
        return AnimeModel.getAll();
    }

    static getByID(id) {
        const anime = AnimeModel.getByID(id);
        if (!anime) throw new Error('Anime não encontrado!');
        return anime;
    }

    static create(data) {
        const { nome, genero, studio } = data;
        if (!nome || !genero || studio) {
            throw new Error('Todos os campos são obrigatorios!');
        }
        const newAnime = {
            id: AnimeModel.getAll().length + 1,
            nome,
            genero,
            studio
        };
        return AnimeModel.create(newAnime);
    }

    static update(id, data) {
        const { nome, genero, studio } = data;
        if (!nome || !genero || !studio) {
            throw new Error('Todos os campos são obrigatorios!');
        }
        const updateAnime = AnimeModel.update(id, { nome, genero, studio });
        if (!updateAnime) throw new Error('anime não encontrado!');
        return updateAnime;
    }

    static delete(id) {
        const success = AnimeModel.delete(id);
        if (!success) throw new Error('Anime não encontrado!');
    }
}

module.exports = AnimeService;