const express = require('express'); 
const users = require('../routes/users'); 
const auth = require('../routes/auth');
const customers = require('../routes/customers');
const genres = require('../routes/genres');
const movies = require('../routes/movies');
const rentals = require('../routes/rentals');

module.exports = function(app) {
    app.use(express.json());
    app.use('/api/users', users); 
    app.use('/api/auth', auth); 
    app.use('/api/customers', customers);
    app.use('/api/genres', genres);
    app.use('/api/movies', movies);
    app.use('/api/rentals', rentals);
}