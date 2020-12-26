const mongoose = require('mongoose');

module.exports = function() {
    mongoose.connect('mongodb://localhost/video-store', { 
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useFindAndModify: false, 
        useCreateIndex: true 
    })
        .then(() => console.log('Connected to MongoDB...'));
}

// connect to database using `$ mongod --dbpath=/Users/kalmanheyn/data/db`