const express = require("express");
const { addMovie, getMovies } = require("../controllers/movie.controller");
const MovieRouter = express.Router();

//add movie
MovieRouter.post("/", addMovie);

//get movies
MovieRouter.get("/", getMovies);

module.exports = MovieRouter;