// database de jogos
const games = {
    nexus: {
        title: "Project Nexus",
        desc: "Immersive sci-fi experience",
        cover: "assets/images/game-cover.jpg",
        thumb: "assets/images/thumb.jpg",
        trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        images: [
            "assets/images/game1.jpg",
            "assets/images/game2.jpg",
            "assets/images/game3.jpg"
        ]
    },

    void: {
        title: "Project Void",
        desc: "Dark exploration game",
        cover: "assets/images/void.jpg",
        thumb: "assets/images/void-thumb.jpg",
        trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        images: [
            "assets/images/v1.jpg",
            "assets/images/v2.jpg"
        ]
    }
};

// pega parâmetro da URL (?game=nexus)
const params = new URLSearchParams(window.location.search);
const gameId = params.get("game");

const game = games[gameId];

// aplica dados
document.getElementById("title").innerText = game.title;
document.getElementById("desc").innerText = game.desc;
document.getElementById("hero").style.backgroundImage = `url(${game.cover})`;
document.getElementById("thumb").src = game.thumb;

// galeria
const gallery = document.getElementById("gallery");
game.images.forEach(img => {
    const el = document.createElement("img");
    el.src = img;
    gallery.appendChild(el);
});

// trailer modal
function openTrailer(){
    document.getElementById("modal").style.display = "flex";
    document.getElementById("video").src = game.trailer;
}

function closeTrailer(){
    document.getElementById("modal").style.display = "none";
    document.getElementById("video").src = "";
}
