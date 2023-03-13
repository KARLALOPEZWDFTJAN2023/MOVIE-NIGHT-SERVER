const router =require("express").Router()
const {
    getMovies,
    getMoviesByID,
    createMovies,
    updateMovies,
    deleteMovies
}=require("../Controllers/Movies")

router.get("/all-movies", getMovies)
router.get("/movie/:id", getMoviesByID)
router.post("/crete/movies", createMovies)
router.put("/update/:id",  updateMovies)
router.delete("/delete/:id", deleteMovies)

module.exports= router