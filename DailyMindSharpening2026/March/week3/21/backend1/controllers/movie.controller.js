const MoviesModel = require("../models/movies.model")


//adding movie
const addMovie = async (req, res) =>{
    try{
        const movie = await MoviesModel.create(req.body);
        res.status(201).json({message : "movie is added ", movie})
    }catch(error){
        res.status(500).json({message: "failed adding movie", error:error.message})
    }
}

//getting all movies
const getMovies = async (req, res)=>{
    try{
        const movies = await MoviesModel.find();
        res.status(200).json({message : "list of all movies", movies})
    }catch(error){
        res.status(500).json({message : "failed getting movies", error: error.message})
    }
}

module.exports = {addMovie, getMovies}