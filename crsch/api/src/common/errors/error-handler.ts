import errorsList = require('./errors-list');
import logger = require('../logging/logger');

interface IResponse {
  status?: number,
  data?: object,
}

export = (err, path) => {
  // Handle mongoose duplicate errors
  if (err.code === 11000) {
    err = new errorsList.MongoDuplicateError(
      `'${Object.keys(err.keyValue)}' already used`
    );
  }

  if (!err.reason) {
    logger.error(err.message, err.stack);
    err = new errorsList.InternalServerError();
  }

  const response: IResponse = {};
  const { reason, statusText, status } = err;

  response.status = status;
  response.data = {
    status,
    error: statusText,
    detail: reason,
    path,
  };

  return response;
};
