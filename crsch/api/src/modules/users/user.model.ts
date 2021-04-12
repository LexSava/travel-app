import mongoose = require('mongoose');
import types = require('./user.types');
import UserSchema = require('./user.schema');

export const UserModel = mongoose.model<types.IUserDocument>("User", UserSchema);