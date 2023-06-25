const mongoose = require('mongoose');

// Schema for list
const ListSchema = new mongoose.Schema({
  user: {type: String, required: true, unique: true},
  title: {type: String, required: true, unique: true},
  data :{type: Array}
  },
  {timestamps: true}
);

module.exports = mongoose.model('List', ListSchema);