import userRepo = require('./user.repository');
import types = require('./user.types');

export const regUser = async (obj: any): Promise<types.IUserSchema | null> => {
    const res = await userRepo.checkAndReg(obj);
    return res;
}

export const loginUser = async (obj: any): Promise<types.IUserSchema | null> => {
    const res = await userRepo.checkAndLogin(obj);
    return res;
};

export const changeLang = async (obj: any) => {
    const res = await userRepo.changeLang(obj);
    return res;
}