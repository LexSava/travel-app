import { IUser } from '../interfaces';
import idLocalStorage from '../constants/idLocalStorage';

export const setUser = (user: IUser | null) => {
    if (user) {
        localStorage.setItem(`${idLocalStorage}user`, JSON.stringify(user));
    } else {
        localStorage.removeItem(`${idLocalStorage}user`);
    }
    return {type: 'SET_USER', user};
}