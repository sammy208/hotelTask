const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const roomTypeRouter = require('./routes/roomTypeRouter.js');
const roomRouter = require('./routes/roomRouter.js');
const errorHandler = require('./utils/utils.js');
const apiKeyValidator = require('./validations/api-key-validator.js');
const logger = require('./utils/logger.js');
const userrouter = require('./routes/userrouter.js');
const cookieParser = require('cookie-parser');



// LOAD ENVIRONMENT VARIABLES FROM .ENV FILE
dotenv.config();

// CREATING EXPRESS APP
const app = express();


// MIDDLEWARE
app.use(bodyParser.json());

// MIDDLEWARE TO VALIDATE API KEY FOR ALL ROUTES
app.use(apiKeyValidator);

// LOGGER MIDDLEWARE
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});
app.use (cookieParser())

// ROUTES
app.use('/api/v1', roomTypeRouter);
app.use('/api/v1/rooms', roomRouter);
app.use('/', userrouter)

// ERROR HANDLING MIDDLEWARE
app.use(errorHandler);

// STARTING THE SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  logger.info(`Server listening on port ${PORT}`);
});