import model = require('./country.model');
import types = require('./country.types');

const getBasicData = (country: types.ICountryDocument, lang: number) => ({
    id: country.countryId,
    smallImageId: country.smallImageId,
    name: country.localizations[lang].name,
    capital: country.localizations[lang].capital,
    // utcOffset: country.utcOffset,
});

const getFullBasicData = (country: types.ICountryDocument) => ({
    id: country.countryId,
    imageId: country.imageId,
    videoUrl: country.videoUrl,
    coords: country.coords,
    utcOffset: country.utcOffset,
    currencyCode: country.currencyCode,
});

const getLocalization = (country: types.ICountryDocument, lang: types.Language) => ({
    name: country.localizations[lang].name,
    description: country.localizations[lang].description,
    capital: country.localizations[lang].capital,
});

const getSights = (sights: Array<types.ISightSchema>, lang: types.Language) => {
    const arr =  sights.map((sight) => ({
        name: sight.localizations[lang].name,
        description: sight.localizations[lang].description,
        id: sight.sightId,
        smallImageId: sight.smallImageId,
        imageId: sight.imageId,
        rating: sight.rating,
    }));
    return {sights: arr};
};

export const getAllByLang = async (lang: number): Promise<Array<types.ICountryBase>> => {
    const data = await model.CountryModel.find({});
    return data.map((cur) => {
        return {
            ...getBasicData(cur, lang - 1),
        }
    })
}

export const getOneByLang = async (id: number, lang: number): Promise<types.ICountryFull> => {
    const data = await model.CountryModel.findOne({ countryId: id });
    return {
        ...getFullBasicData(data),
        ...getLocalization(data, lang - 1),
        ...getSights(data.sights, lang - 1),
    }
}

const isVotedUser = (users: Array<types.IVotedUser>, name: string): boolean => {
    let isUser: boolean = false;
    users.forEach((user) => {
        if (user.name === name) isUser = true;
    });

    return isUser;
}

const calcPoints = (rating: types.IRatingSchema, obj: types.IRatingRequest): number => {
    const sumPoints: number = (rating.points * rating.votes + obj.points);
    const points: number = +(sumPoints / (rating.votes + 1)).toFixed(2);
    const truncNumber: number = Math.trunc(points);
    const rest: number = points - truncNumber;
    if (rest < 0.25) return truncNumber;
    if (rest <= 0.5) return truncNumber + 0.5;
    return Math.ceil(points);
}

const changeRating = (rating: types.IRatingSchema, obj: types.IRatingRequest): types.IRatingSchema => {
        rating.points = calcPoints(rating, obj);
        rating.votes += 1;
        rating.votedUsers.push({
            name: obj.name,
            imageId: obj.imageId,
            points: obj.points,
        });

    return rating;
}

const setData = async (newData: types.ICountrySchema, obj: types.IRatingRequest): Promise<void> => {
    await model.CountryModel.updateOne(
        { countryId: obj.countryId },
        { $set: { "sights":newData.sights } }
    );
}

export const putAndGetRating = async (obj: types.IRatingRequest): Promise<types.ICountrySchema | null> => {
    const data: types.ICountrySchema = await model.CountryModel.findOne({ countryId: obj.countryId });
    const rating: types.IRatingSchema = data.sights[obj.sightId - 1].rating;
    const users: Array<types.IVotedUser> = rating.votedUsers;
    if (!isVotedUser(users, obj.name)) {
        data.sights[obj.sightId - 1].rating = changeRating(rating, obj);
        setData(data, obj);

        return data;
    }

    return null;
}