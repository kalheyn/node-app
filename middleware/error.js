const logger = require('../startup/logging');

module.exports = function (err, req, res, next) {
    logger.errorLog.error("Error logged: ", err); 

    res.status(500).send('Something failed.');
}