const { getMovies, createMovieService } = require("../services/moduleMovies");

const moviesController = async (req, res) => {
  try {
    const movies = await getMovies();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({
      error: "Error del servidor",
    });
  }
};
const createMovie = async (req, res) => {
  try {
    const { title, year, director, duration, genre, rate, poster } = req.body;
    const newMovie = await createMovieService({
      title,
      year,
      director,
      duration,
      genre,
      rate,
      poster,
    });
    console.log("Se creo correctamente la pelicula en la base de datos");
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).json({
      error: "Error al crear la pelicula en la base de datos",
    });
  }
};
module.exports = { moviesController, createMovie };
