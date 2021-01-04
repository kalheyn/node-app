const winston = require('winston');
require('express-async-errors');
require('winston-mongodb');

const log = winston.createLogger({
    transports: [
        new winston.transports.File({ 
            filename: 'logfile.log' 
        }),
        new winston.transports.MongoDB({
            db: 'mongodb://localhost/node-app',
            // level: 'info'e
        }), 
        new winston.transports.Console(),
    ], 
    exceptionHandlers: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: './exceptions.log', timestamp: true, maxsize: 1000000 })
      ],  
    exitOnError: false,
});

process.on('unhandledRejection', (ex) => {
    throw ex;
  });

module.exports = {
    log: log
};