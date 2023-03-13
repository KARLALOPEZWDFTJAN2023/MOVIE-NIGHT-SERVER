const Movies =require('../models/Movies.model')

exports.getMovies=async(req,res)=>{
    const movies=await Movies.find()
    res.json(movies)
}

exports.getMovieByID=async(req, res)=>{
    const {id}=req.params
    const movie=await Movies.findById(id)
    res.json({movie})
}

exports.createMovie=async(req,res)=>{
    const {movies,category,director}=req.body
    console.log(req.body)
    const movie=await Movies.create({movies, category, director})
    res.json(movie)
}

exports.updateMovies=async(req, res)=>{
    const {id}=req.params
    const {movies, category, director}=req.body
    const movie=await Movies.findByIdAndUpdate(id, {movies, category, director})
    res.json(movie)
}

exports.deleteMovies=async (req, res)=>{
    const {id}= req.params
    await Movies.findByIdAndDelete(id)
    res.json({message:"BYE BYE!"})
}