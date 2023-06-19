const router = require('express').Router();
const Movie = require('../models/Movie');
const verify = require('../verifyToken');

// movie CRUD operations

// create
router.post('/', verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newMovie = new Movie(req.body);

    try {
      const movie = await newMovie.save();
      res.status(201).json(movie);
    } catch(err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("Cannot create movie");
  }
});

// update 
router.put('/:id', verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const movie = await Movie.findByIdAndUpdate(
        req.params.id, 
        {$set: req.body},
        {new: true}
      );
      res.status(200).json(movie);
    } catch(err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("Cannot update movie");
  }
});

// delete 
router.delete('/:id', verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Movie.findByIdAndDelete(req.params.id);
      res.status(200).json('Movie has been deleted');
    } catch(err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("Cannot delete movie");
  }
});

// get 
router.get('/find/:id', verify, async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json(movie);
  } catch(err) {
    res.status(500).json(err);
  }
});

// get featured movie/series
router.get('/random', verify, async (req, res) => {
  const type = req.query.type;
  let featured;
  try {
    if (type === "movie") {
      featured = await Movie.aggregate([
        {$match: {isMovie: true}},
        {$sample: {size: 1}},
      ]);
    } else if (type === "series") {
      featured = await Movie.aggregate([
        {$match: {isMovie: false}},
        {$sample: {size: 1}},
      ]);
    } else {
      featured = await Movie.aggregate([
        {$sample: {size: 1}}
      ]);
    }
    
    res.status(200).json(featured);
  } catch(err) {
    res.status(500).json(err);
  }
});

// get all movies 
router.get('/', verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const movies = (await Movie.find()).reverse();
      res.status(200).json(movies);
    } catch(err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("Cannot show all movies");
  }
});

module.exports = router; 