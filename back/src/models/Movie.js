const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  year: {
    type: Number,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  genre: {
    type: Array,
    required: true,
  },
  rate: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
});

const Movie = model("Movie", movieSchema); a

module.exports = Movie; 