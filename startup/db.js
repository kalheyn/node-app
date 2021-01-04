const mongoose = require('mongoose');
const logger = require('./logging');

module.exports = function() {
    mongoose.connect('mongodb://localhost/node-app', { 
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useFindAndModify: false, 
        useCreateIndex: true 
    })
        .then(() => logger.log.info('Connected to MongoDB...'))
        .catch((ex) => logger.log.Error("Could not connect to MongoDB."));
}

// connect to database using `$ mongod --dbpath=/Users/kalmanheyn/data/db`