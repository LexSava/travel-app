import React from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from "react-redux";
import { setUser } from '../actions/set-user';
import { useSelector } from "react-redux";
import { AppState } from "../interfaces";

const btnLogOut: Array<string> = ['Log out', 'Выйти', 'Выйсці'];

const LogOut: React.FC = () => {
    const dispatch = useDispatch()
    const { lang } = useSelector<AppState, AppState>(state => state);

    const handleClick = () => {
        dispatch(setUser(null));
    }

    return (
        <Button color="inherit" onClick={handleClick}>{btnLogOut[lang - 1]}</Button>
    );
}

export default LogOut;