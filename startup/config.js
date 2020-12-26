const config = require('config'); 

module.exports = function() {
    if(!config.get('jwtPrivateKey')) {
        throw new Error('FATAL ERROR: jwtPrivateKey is not defined.');
    }
}

// set the environment variable using `$ export app_jwtPrivateKey=<SECURE KEY>`