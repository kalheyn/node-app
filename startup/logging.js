const winston = require('winston');
require('express-async-errors');
require('winston-mongodb');

const errorLog = winston.createLogger({
    transports: [
        new winston.transports.File({ filename: 'logfile.log' }),
        new winston.transports.MongoDB({
            db: 'mongodb://localhost/node-app',
            // level: 'info'
        })
    ]
});

module.exports = {
    errorLog: errorLog
};