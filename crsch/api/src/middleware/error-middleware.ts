/* eslint-disable no-unused-vars */
import errorHandler = require('../common/errors/error-handler');

export = (err, req, res, next) => {
  const path = req.originalUrl;

  const { status, data } = errorHandler(err, path);

  res.status(status);
  res.json({ errors: data });
};
