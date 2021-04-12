import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';

import { theme } from '../mui-style';
import { AppState } from '../interfaces';
import DateTimeCardWidget from './widgets/DateTimeCardWidget';
import WeatherInformerWidget from './widgets/WeatherInformerWidget';
import LocalCurrencyRateWidget from './widgets/LocalCurrencyRateWidget'
import { onToggleSideBar } from '../actions/side-bar-action';

const useStyles = makeStyles({
  root: {
    backgroundColor: fade(theme.palette.primary.light, 0.2),
    padding: theme.spacing(3, 0),
    width: 320,
    position: 'absolute',
    display: 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    top: 0,
    left: 0,
    bottom: 0,
    transition: 'all 400ms ease',
    zIndex: 1000
  },
  closed: {
    transform: 'translateX(-100%)'
  }
})

const SideBar: React.FC = () => {
  const classes = useStyles();
  
  const dispatch = useDispatch();

  const isSideBarOpened = useSelector<AppState>(state => state.isSideBarOpened);

  return (
    <div 
      className={`${classes.root} ${!isSideBarOpened ? classes.closed : ''}`} 
      onClick={() => dispatch(onToggleSideBar(!isSideBarOpened))}
    >
      <DateTimeCardWidget />
      <WeatherInformerWidget />
      <LocalCurrencyRateWidget />
    </div>
  )
}

export default SideBar;