import React from 'react';
import {
    Typography,
    Box,
  } from '@material-ui/core';
import { useSelector } from "react-redux";
import { AppState, IUser } from '../interfaces';
import cloudName from '../constants/cloudName';
import cloudUrl from '../constants/cloudUrl';
import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => createStyles({
    name: {
        marginRight: theme.spacing(1),
        marginLeft: theme.spacing(1),
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: '50%',
        backgroundSize: 'cover',
        marginRight: theme.spacing(1),
    },
}));

const User: React.FC = () => {
    const classes = useStyles();
    const user = useSelector<AppState, IUser | null>(state => state.user);

    return (
       <>
            <Typography className={classes.name}>{user?.name}</Typography>
            <Box
                className={classes.image}
                style={{ backgroundImage: `url('${cloudUrl}/${cloudName}/image/upload/h_200/${user?.imageId}')` }}
            />
       </>
    );
}

export default User;