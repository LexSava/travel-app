import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { ListItemIcon, SvgIcon, Select, MenuItem } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { AppState, Language } from '../interfaces';
import { onLanguageChanged } from '../actions/language-action'
import { useStyles } from '../styles/custom-select-style';
import { ReactComponent as US } from '../assets/images/US.svg';
import { ReactComponent as BY } from '../assets/images/BY.svg';
import { ReactComponent as RU } from '../assets/images/RU.svg';
import { setUser } from '../actions/set-user';

// Original design here: https://github.com/siriwatknp/mui-treasury/issues/540
const LanguageSelect: React.FC = () => {
  const classes = useStyles();
  
  const dispatch = useDispatch()
  
  const { lang, user } = useSelector<AppState, AppState>(state => state);

  const requestToBackend = async () => {
    const response = await fetch("/api/users/lang", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ ...user, lang: Language[lang] }),
    });

    const refUser = await response.json();
    dispatch(setUser(refUser));
  }

  useEffect(() => {
    if (user) {
      requestToBackend();
    }
  }, [lang]);
    
  const handleChange = (event: any) => {
    dispatch(onLanguageChanged(event.target.value))
  };

  const ArrowIcon = (props: any) => (<ExpandMoreIcon className={`${props.className} ${classes.icon}`}/>);

  // moves the menu below the select input
  const menuProps = {
    classes: {
      paper: classes.paper,
      list: classes.list
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left"
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left"
    },
    getContentAnchorEl: null
  };

  return (
    <Select
      disableUnderline
      classes={{ root: classes.select }}
      MenuProps={menuProps as any}
      IconComponent={ArrowIcon}
      value={lang}
      onChange={handleChange}
    >
      <MenuItem value={1}>
        <ListItemIcon classes={{ root: classes.listIcon }}>
          <SvgIcon ><US/></SvgIcon>
        </ListItemIcon>
        <span style={{marginTop:3}}>
          English
        </span>
      </MenuItem>
      <MenuItem value={2}>
        <ListItemIcon classes={{ root: classes.listIcon }}>
          <SvgIcon ><RU/></SvgIcon>
        </ListItemIcon>
        <span style={{marginTop:3}}>
          Русский
        </span>
      </MenuItem>
      <MenuItem value={3}>
        <ListItemIcon classes={{ root: classes.listIcon } as any}>
          <SvgIcon ><BY/></SvgIcon>
        </ListItemIcon>
        <span style={{marginTop:3}}>
          Беларуская
        </span>
      </MenuItem>
    </Select>
  );
};

export default LanguageSelect;