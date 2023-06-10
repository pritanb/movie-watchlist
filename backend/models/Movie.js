const mongoose = require('mongoose');

// Schema for movies
const MovieSchema = new mongoose.Schema({
  title: {type: String, required: true, unique: true},
  description: {type: String},
  year: {type: String},
  genre: {type: String},
  img: {type: String},
  imgThumbnail: {type: String},
  trailer: {type: String},
  limit: {type: Number},
  isMovie: {type: Boolean, default: true}
  },
  {timestamps: true}
);

module.exports = mongoose.model('Movie', MovieSchema);