
const { Router } = require("express");
const indexController = require("../controllers/indexController");

const moviesRouter = require("../routes/moviesRouter");

const router = Router();

router.get(
  "/",
  indexController
); 

router.use("/movies", moviesRouter); 

router.post("/movies", moviesRouter);

module.exports = router;
