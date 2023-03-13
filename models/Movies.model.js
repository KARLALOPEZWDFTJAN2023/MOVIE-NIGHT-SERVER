const { Schema, model } = require("mongoose");

const moviesSchema = new Schema(
  {
     movies: {
        type: String,
      },
     category: {
        type: String,
      },
    director :{ 
      type:String},
  }
);

const Movies = model("Movies", moviesSchema);

module.exports = Movies;