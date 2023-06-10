const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

// register
router.post('/register', async (req, res) => {
  // retrive values from request body
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.SHA256(req.body.password).toString()
  });

  try {
    // save user in DB
    const user = await newUser.save(); 
    // send result
    res.status(201).json(user);
  } catch(err) {
    res.status(500).json(err); 
  }

});

// login
router.post('/login', async (req, res) => {
  try {
    // search for user in DB
    const user = await User.findOne({username: req.body.username});
    // if not found set 401 status
    !user && res.status(401).json("Invalid username");
    // if user is found
    // compare passwords
    const userPwd = user.password;
    const reqPwd = CryptoJS.SHA256(req.body.password).toString();
    userPwd !== reqPwd && res.status(401).json("Invalid password");

    // user authenticated
    // destructure password from user info
    /* _doc is the field that the mongoose library uses internally 
      that stores the data pulled directly from mongo  */
    const {password, ...info} = user._doc;
    const accessTkn = jwt.sign(
      {id: user._id, isAdmin: user.isAdmin}, 
      process.env.SECRET_KEY,
      {expiresIn: "7d"}
    );

    res.status(200).json({...info, accessTkn});
  } catch(err) {
    res.status(500).json(err);
  } 
});

module.exports = router;