import mongoose = require('mongoose');

const VotedUsersSchema = new mongoose.Schema({
    _id: false,
    name: {
        type: String,
        required: true,
    },
    imageId: String,
    points: {
        type: Number,
        required: true,
    },
});

const RatingSchema = new mongoose.Schema({
    _id: false,
    points: Number,
    votes: Number,
    votedUsers: [VotedUsersSchema],
});

const localeSchema = new mongoose.Schema({
    _id: false,
    name: String,
    capital: String,
    description: String,
});

const SightSchema = new mongoose.Schema({
    _id: false,
    sightId: {
        type: Number,
        required: true,
    },
    smallImageId: String,
    imageId: String,
    rating: RatingSchema,
    localizations: [localeSchema],
});

const CountrySchema = new mongoose.Schema({
    countryId: {
        type: Number,
        required: true,
    },
    imageId: String,
    smallImageId: String,
    currencyCode: String,
    videoUrl: String,
    utcOffset: {
        type: Number,
        required: true,
    },
    coords: {
        type: [Number],
        required: true,
    },
    sights: {
        type: [SightSchema],
        required: true,
    },
    localizations: [localeSchema],
    },
    {
    versionKey: false
    }
);

export = CountrySchema;
