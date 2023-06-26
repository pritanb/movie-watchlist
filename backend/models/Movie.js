const mongoose = require('mongoose');

// Schema for movies
const MovieSchema = new mongoose.Schema({
  user: {type: String, required: true},
  movie: {type: Object, required: true, unique: true},
  },
  {timestamps: true}
);

module.exports = mongoose.model('Movie', MovieSchema);