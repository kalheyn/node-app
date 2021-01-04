const mongoose = require('mongoose');

module.exports = function() {
    mongoose.connect('mongodb://localhost/node-app', { 
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useFindAndModify: false, 
        useCreateIndex: true 
    })
        .then(() => console.log('Connected to MongoDB...'))
        .catch((ex) => console.log("Could not connect to MongoDB."));
}

// connect to database using `$ mongod --dbpath=/Users/kalmanheyn/data/db`