import mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageId: String,
    lang: String,
    },
    {
    versionKey: false
    }
);

export = UserSchema;