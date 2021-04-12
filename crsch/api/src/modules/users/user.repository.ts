import model = require('./user.model');
import types = require('./user.types');

export const checkAndReg = async (obj: any): Promise<types.IUserSchema | null> => {
    const data: types.IUserDocument = await model.UserModel.findOne({ name: obj.name });

    if (data) {
        return null;
    }

    const newUser: types.IUserSchema = {
        ...obj,
        lang: 'en',
    };

    (new model.UserModel(newUser)).save();

    return newUser;
}

export const checkAndLogin = async (obj: any): Promise<types.IUserSchema | null> => {
    const data: types.IUserDocument = await model.UserModel.findOne({ name: obj.name });
    return data;
};

export const changeLang = async (obj: any) => {
    const data: types.IUserDocument = await model.UserModel.findOneAndUpdate(
        { name: obj.name },
        { $set: { "lang":obj.lang } }
    );
    data.lang = obj.lang;
    console.log(obj.lang);
    return data;
}