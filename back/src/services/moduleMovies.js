const Movie = require("../models/Movie");

const getMovies = async () => {
  try {
    const moviesDB = await Movie.find();
    console.log("moviesDB, try,correctamente");
    return moviesDB;
  } catch (error) {
    console.log("moviesDB, catch, error");
  }
};

const createMovieService = async (movie) => {
  const newMovie = await Movie.create(movie);

  return newMovie;
};

module.exports = { getMovies, createMovieService };
