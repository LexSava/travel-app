import morgan = require('morgan');
import logger = require('../common/logging/logger');

const format = process.env.NODE_ENV === 'production' ? 'short' : 'dev';
const options = {
  stream: {
    write: (message) => logger.info(message.trim()),
  },
};

export = morgan(format, options);
