const { Router } = require("express");
const {
  moviesController,
  createMovie,
} = require("../controllers/moviesController");

const moviesRouter = Router();
moviesRouter.get("/", moviesController);

moviesRouter.post("/movies", createMovie);

module.exports = moviesRouter;
