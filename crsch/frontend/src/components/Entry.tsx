import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Popup from './Popup';
import { useSelector } from "react-redux";
import { AppState } from "../interfaces";

const btnLogIn: Array<string> = ['Log in', 'Войти', 'Увайсці'];
const btnSignUp: Array<string> = ['Sign up', 'Зарегистрироваться', 'Зарэгістравацца'];

const Entry: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isSignUp, setIsSignUp] = useState<boolean>(false);
    const { lang } = useSelector<AppState, AppState>(state => state);

    const clickLogIn = () => {
        setIsOpen(true);
        setIsSignUp(false);
    };

    const clickSignUp = () => {
        setIsOpen(true);
        setIsSignUp(true);
    }

    return (
        <>
            <Popup isOpen={isOpen} setIsOpen={setIsOpen} isSignUp={isSignUp} />
            <Button color="inherit" onClick={clickLogIn}>{btnLogIn[lang - 1]}</Button>
            <Button color="inherit" onClick={clickSignUp}>{btnSignUp[lang - 1]}</Button>
        </>
    );
}

export default Entry;
