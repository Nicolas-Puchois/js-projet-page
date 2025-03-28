import { fetchData } from "../lib/functions.js";

window.addEventListener("DOMContentLoaded", () => {
  fetchData({
    route:
      "/games?key=de462d1e145d44e084148f017bf5976d&dates=2019-09-01,2019-09-30&platforms=18,1,7",
  })
    .then((data) => data.results)
    .then((games) => {
      if (games && games.length > 0) {
        createCarrousel(games);
      } else {
        console.error("aucun jeu trouvé ...");
      }
    });
});

function createCarrousel(games) {
  const carrousel = document.querySelector(".carrousel");
  // créer un slide par objet
  games.forEach((game) => {
    const slide = document.createElement("div");
    slide.className = "carrousel-slide";
    const imgGame = document.createElement("img");
    imgGame.src = game.background_image;
    imgGame.alt = game.name;
    slide.appendChild(imgGame);
  });
}
