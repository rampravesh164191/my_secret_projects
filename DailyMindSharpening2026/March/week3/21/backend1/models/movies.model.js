const mongoose = require("mongoose");
const moviesSchema = new mongoose.Schema(
    {
        title : {type : String, required : true, trim:true, minlength : 1},
        genre : {type: String, required : true},
        releaseYear : {type : Date, default : Date.now},
        durationMins : {type:Number, default : 120}
    }
)
const MoviesModel = mongoose.model("movies", moviesSchema);
module.exports = MoviesModel;