import React, { useState } from 'react';
import {
    Typography,
    TextField,
    Button,
  } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { useDispatch } from "react-redux";
import { setUser } from '../actions/set-user';
import { useSelector } from "react-redux";
import { AppState } from "../interfaces";

const useStyles = makeStyles((theme: Theme) => createStyles({
    heading: {
        textAlign: 'center',
        paddingBottom: theme.spacing(2),
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 150,
    },
  }));

  const heading: Array<string> = ['Log in', 'Войти', 'Увайсці'];
  const label: Array<string> = ['Nickname', 'Прозвище', 'Мянушку'];
  const messageEmptyField: Array<string> = ['field is empty', 'поле не заполнено', 'поле пустое'];

interface IProps {
    setIsOpen: (value: boolean) => void
}

const LogIn: React.FC<IProps> = ({ setIsOpen }: IProps) => {
    const classes = useStyles();
    const [value, setValue] = useState<string>('');
    const [isError, setIsError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const { lang } = useSelector<AppState, AppState>(state => state);
    const dispatch = useDispatch();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    const isNickname = () => {
        if (value.length) return true;
        return false;
    }

    const requestToBackend = async () => {
        const response = await fetch("/api/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ name: value }),
        });

        return await response;
      }

    const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (isNickname()) {
            const result = await requestToBackend();
            if (result.status === 200) {
                const user = await result.json();
                dispatch(setUser(user));
                setIsOpen(false);
            } else {
                const message = await result.json();
                setErrorMessage(message.message[lang - 1]);
                setIsError(true);
            }
        } else {
            setErrorMessage(messageEmptyField[lang - 1]);
            setIsError(true);
        }
    }

    const handleFocus = () => {
        setErrorMessage('');
        setIsError(false);
    }

    return (
        <>
            <Typography
                    variant="h4"
                    className={classes.heading}
                >
                    {heading[lang - 1]}
                </Typography>
                <form onSubmit={e => { e.preventDefault(); }}
                    method="post"
                    encType="multipart/form-data"
                    className={classes.form}
                >
                    <TextField
                        onChange={handleChange}
                        onFocus={handleFocus}
                        value={value}
                        required
                        label={label[lang - 1]}
                        error={isError}
                        helperText={errorMessage}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleClick}
                    >
                        {heading[lang - 1]}
                    </Button>
                </form>
        </>
    );
}

export default LogIn;