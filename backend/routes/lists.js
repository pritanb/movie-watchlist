const router = require('express').Router();
const List = require('../models/List');
const verify = require('../verifyToken');

// list CRUD operations

// create
router.post('/', verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newList = new List(req.body);

    try {
      const list = await newList.save();
      res.status(201).json(list);
    } catch(err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("Cannot create list");
  }
});

// delete
router.delete('/:id', verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await List.findByIdAndDelete(req.params.id);
      res.status(200).json('List has been deleted');
    } catch(err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("Cannot delete list");
  }
});

// get
router.get('/', verify, async (req, res) => {
  const typeQ = req.query.type;
  const genreQ = req.query.genre;
  let list = [];
  try {
    if (typeQ) {
      if (genreQ) {
        list = await List.aggregate([
          {$sample: {size: 10}},
          {$match: {type: typeQ, genre: genreQ}}
        ]);
      } else {
        list = await List.aggregate([
          {$sample: {size: 10}},
          {$match: {type: typeQ}}
        ]);
      }
    } else {
      list = await List.aggregate([{$sample: {size: 10}}]);
    }
    res.status(200).json(list);
  } catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router; 