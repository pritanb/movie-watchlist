const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const verify = require('../verifyToken');

// user CRUD operations

// update
router.put('/:id', verify, async (req, res) => {
  if (req.user.isAdmin || req.user.id === req.params.id) {
    if (req.body.password) {
      req.body.password = CryptoJS.SHA256(req.body.password).toString();
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id, 
        {$set: req.body},
        {new: true}
        );
      res.status(200).json(updatedUser);
    } catch(err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("Cannot update account");
  }
});

// delete
router.delete('/:id', verify, async (req, res) => {
  if (req.user.isAdmin || req.user.id === req.params.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User deleted");
    } catch(err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("Cannot delete account");
  }
});

// get
router.get('/find/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const {password, email, ...info} = user._doc;
    res.status(200).json(info);
  } catch(err) {
    res.status(500).json(err);
  }
});

// get all
router.get('/', verify, async (req, res) => {
  const query = req.query.new;
  if (req.user.isAdmin) {
    try {
      const users = query ? await User.find().sort({_id:-1}).limit(2) : await User.find();
      res.status(200).json(users);
    } catch(err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("Admin only");
  }
});

// TODO: - get user stats

module.exports = router; 