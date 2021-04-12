import mongoose = require('mongoose');
import config = require('../config');
import logger = require('../logging/logger');

const connectToDB = () => {
  mongoose
    .connect(config.MONGO_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .catch((err) => logger.error(err.message));

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    logger.info('Mongo connection successfully!');
  });
};

export = connectToDB;
