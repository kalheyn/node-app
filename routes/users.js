const express = require('express'); 
const router = express.Router(); 
const { User, validate } = require('../models/user');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

// Get user profile
router.get('/me', auth, async (req, res) => {
    const user = await User.findById(req.user._id).select('-password');
    res.send(user); 
});

// Register a user
router.post('/', async (req, res) => {
    // If the user attributes are not valid, send a corresponding error
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message); 

    // Check if a user is already registered under that email
    let user = await User.findOne({ email: req.body.email }); 
    if (user) return res.status(400).send('User already registered.'); 

    // Create a user and encrypt the password
    user = new User(_.pick(req.body, ['name', 'email', 'password']));
    const salt = await bcrypt.genSalt(10); 
    user.password = await bcrypt.hash(user.password, salt); 
    await user.save(); 

    // Return a token validating that user is logged in
    const token = user.generateAuthToken()
    res.header('x-auth-token', token).send(_.pick(user, ['_id', 'name', 'email', 'isAdmin'])); 
});

module.exports = router; 