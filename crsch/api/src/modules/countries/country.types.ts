import mongoose = require('mongoose');

export enum Language {
    en = 1,
    ru = 2,
    by = 3
}

export interface IRatingRequest {
    countryId: number,
    sightId: number,
    name: string,
    imageId: string,
    points: number,
}

export interface IUser {
    name: string;
    imageId: string;
}

export interface IVotedUser extends IUser {
    points: number;
}

export interface IRating {
    points: number;
    votes: number;
    votedUsers: Array<IVotedUser>;
}

export interface ISight {
    id: number;
    smallImageId: string,
    imageId: string;
    name: string;
    description: string;
    rating?: IRating;
}

export interface ICountryBase {
    id: number;
    name: string;
    capital: string;
    smallImageId?: string;
}

export interface ICountryFull extends ICountryBase {
    imageId: string;
    videoUrl: string;
    description: string;
    coords: Array<number>;
    currencyCode: string,
    utcOffset: number,
    sights: Array<ISight>;
}

interface IVotedUserSchema {
    name: string;
    imageId: string;
    points: number;
}

export interface IRatingSchema {
    points: number;
    votes: number;
    votedUsers: Array<IVotedUserSchema>;
}
interface ILocaleSchema {
    name: string,
    capital?: string,
    description: string,
}
export interface ISightSchema {
    sightId: number;
    smallImageId: string,
    imageId: string;
    rating?: IRatingSchema;
    localizations: Array<ILocaleSchema>;
}

export interface ICountrySchema {
    countryId: number,
    imageId: string,
    smallImageId: string,
    currencyCode: string,
    videoUrl: string,
    utcOffset: number,
    coords: Array<number>,
    sights: Array<ISightSchema>,
    localizations: Array<ILocaleSchema>,
}

export interface ICountryDocument extends ICountrySchema, mongoose.Document {}

export interface ICountryModel extends mongoose.Model<ICountryDocument> {}