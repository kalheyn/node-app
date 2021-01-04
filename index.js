const express = require('express');
const app = express();
const logger = require('./startup/logging');

require('./startup/routes')(app); 
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();

const port = process.env.PORT || 3000; 
app.listen(port, () => logger.errorLog.info(`Listening on port ${port}...`));  