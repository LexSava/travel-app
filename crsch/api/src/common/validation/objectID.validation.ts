import mongoose = require('mongoose');
import errors = require('../errors/errors-list');

export = (id, resource) => {
  if (mongoose.Types.ObjectId.isValid(id)) {
    return true;
  }
  throw new errors.BadRequestError(`invalid ${resource} ID. ID must be objectID`);
};
