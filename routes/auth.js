const express = require('express');
const router = express.Router();
const Joi = require('joi');
const bcrypt = require('bcrypt'); 
const { User } = require('../models/user');

// User login
router.post('/', async (req, res) => {
    // Validate email and password
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);

    // Get user by email
    let user = await User.findOne({ email: req.body.email });
    if(!user) return res.status(400).send('Invalid email or password.');

    // Check password
    const validPassword = await bcrypt.compare(req.body.password, user.password); 
    if (!validPassword) return res.status(400).send('Invalid email or password.'); 
    
    // Send login token
    const token = user.generateAuthToken();
    res.send(token); 
});

function validate(req) {
    const schema = Joi.object({
        email: Joi.string().min(5).max(255).required().email(), 
        password: Joi.string().min(5).max(255).required()
    });
    return schema.validate(req); 
}

module.exports = router; 