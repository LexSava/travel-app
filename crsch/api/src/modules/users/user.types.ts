import mongoose = require('mongoose');

export interface IUserSchema {
    name: String,
    imageId: String,
    lang: String,
}

export interface IUserDocument extends IUserSchema, mongoose.Document {}

export interface IUserModel extends mongoose.Model<IUserDocument> {}