import idLocalStorage from './constants/idLocalStorage';
import { IUser } from './interfaces';

const getUser = (): IUser | null => {
    const result: string | null = localStorage.getItem(`${idLocalStorage}user`);
    if (result) return JSON.parse(result);
    return null;
}

export default getUser;