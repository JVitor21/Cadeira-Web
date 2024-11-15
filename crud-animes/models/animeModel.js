let animes = [{
    id: 1,
    nome: "Naruto",
    genero: "Ação",
    studio: "Pierrot"
},
{
    id: 2,
    nome: "One Piece",
    genero: "Ação",
    studio: "Toei Animation"
}
];

class AnimeModel {
    static getAll() {
        return animes;
    }

    static getByID(id) {
        return animes.find(anime => anime.id == id);
    }

    static create(newAnime) {
        animes.push(newAnime);
        return newAnime;
    }

    static update(id, updateAnime) {
        const indez = animes.findIndex(anime => anime.id === id);
        if (index === -1) return null;
        animes[index] = { id, ...updateAnime };
        return animes[index];
    }

    static delete(id) {
        const index = animes.findIndex(anime => anime.id === id);
        if (index === -1) return null;
        animes.splice(index, 1)
        return true;
    }
}

module.exports = AnimeModel;