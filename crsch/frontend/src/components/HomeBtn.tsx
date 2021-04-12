import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Home } from '@material-ui/icons';
import { Link, Route } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  }),
);

export default function UploadButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Route path="/country">
        <Link to={'/'}>
          <IconButton color="secondary" aria-label="go home" component="span">
            <Home />
          </IconButton>
        </Link>
      </Route>
    </div>
  );
}