import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { TextField, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ClearIcon from "@material-ui/icons/Clear";

import { theme } from '../mui-style';
import searchFieldStyles from '../styles/custom-search-field-style';
import { AppState } from '../interfaces';
import { onFilterStringChanged } from '../actions/filter-action';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    // width: 400,
    display: 'flex',
    margin: theme.spacing(0.8)
  },
  buttonRoot: {
    padding: theme.spacing(1),
  }
});

const SearchField = () => {
  const inputBaseStyles = searchFieldStyles.useBaseStyles();
  const inputLabelStyles = searchFieldStyles.useLabelStyles();
  const classes = useStyles();

  const dispatch = useDispatch();

  const { filterString, lang } = useSelector<AppState, AppState>(state => state);

  const text: Array<string> = ['Country or capital', 'Страна или столица', 'Краіна або сталіца'];

  return  (
    <div>
      <TextField
        className={classes.root}
        color={'secondary'}
        // label={'Куда направишься?'}
        placeholder={text[lang - 1]}
        margin={'normal'}
        value={filterString}
        onChange={(event) => {dispatch(onFilterStringChanged(event.target.value))}}
        InputLabelProps={{ shrink: true, classes: inputLabelStyles }}
        InputProps={{
          classes: inputBaseStyles,
          disableUnderline: true,
          endAdornment: (
            <IconButton className={classes.buttonRoot} onClick={() => {filterString && dispatch(onFilterStringChanged())}}>
              <ClearIcon color="primary" />
            </IconButton>
          )
        }}
      />
    </div>
  )
};

export default SearchField;