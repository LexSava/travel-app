import mongoose = require('mongoose');
import types = require('./country.types');
import CountrySchema = require('./country.schema');

export const CountryModel = mongoose.model<types.ICountryDocument>("Country", CountrySchema);