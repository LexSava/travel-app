import React from "react";
import { Route } from "react-router-dom";
import { createStyles, IconButton, makeStyles, Theme } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import MenuIcon from '@material-ui/icons/Menu';

import { onToggleSideBar } from "../actions/side-bar-action";
import { AppState } from "../interfaces";

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    marginRight: theme.spacing(2),
  },
  button: {
    transition: 'all 400ms ease',
  },
  closed: {
    transform: 'rotate(-90deg) '
  }

}));

const MenuButton: React.FC = () => {
  const isSideBarOpened = useSelector<AppState>(state => state.isSideBarOpened);
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Route exact path="/country/:id">
      <IconButton edge="start" 
        className={classes.root} 
        color="inherit" 
        aria-label="menu" 
        onClick={() => dispatch(onToggleSideBar(!isSideBarOpened))}
      >
        <MenuIcon  
          className={`${classes.button} ${isSideBarOpened ? classes.closed : ''}`} 
        />
      </IconButton>
    </Route>
  );
};

export default MenuButton;
