/* CLASE 2HW */

const Peliculas = require("./peliculasModule.js");
const { toHtml } = require("./DOMModule.js");

function movieToHtml(data) {
  const contenedorPeliculas = document.getElementById("divFinal");
  contenedorPeliculas.innerHTML = "";

  data.forEach((movieData) => {
    const { title, year, director, duration, genre, rate, poster } = movieData;
    const peli = new Peliculas(
      title,
      year,
      director,
      duration,
      genre,
      rate,
      poster
    );
    const movieHtml = toHtml(peli);
    contenedorPeliculas?.appendChild(movieHtml);
  });
}

const axios = require("axios"); /* REQUERIR AXIOS */
/* HW async/await */
async function convertirPeliculasAHtml() {
  const contenedorPeliculas = document.getElementById("divFinal");
  contenedorPeliculas.innerHTML = "";

  try {
    const data = await axios.get("http://localhost:3000/movies");
    const datos = data.data;

    movieToHtml(datos);
  } catch (error) {
    console.log("falló");
    console.log(error.message);
  }
}

convertirPeliculasAHtml();
