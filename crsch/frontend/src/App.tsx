import React, { useEffect } from 'react';
import { createStyles,makeStyles,Theme,ThemeProvider } from '@material-ui/core';
import './App.scss';
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";
import { theme } from './mui-style';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import { useDispatch, useSelector } from "react-redux";
import { setUser } from './actions/set-user';
import getUser from './getUser';

// simple api request
import { CloudinaryContext } from 'cloudinary-react';
import cloudName from './constants/cloudName';
import SideBar from './components/SideBar';
import { onLanguageChanged } from './actions/language-action';
import { AppState } from './interfaces';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100vh',
      display: 'flex',
      'flex-direction': 'column',
    },
    pageWrapper: {
      marginTop: 64,
      overflow: 'auto',
      position: 'relative',
      minHeight: 'calc(100% - 64px)',
      display: 'flex',
      flexDirection: 'column',
    },
    input: {
      display: 'none',
    },
  }),
);

function App() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const { user } = useSelector<AppState, AppState>(state => state);

  useEffect(() => {
    dispatch(setUser(getUser()));
  }, []);

  useEffect(() => {
    if (user) {
      const langs = ['en', 'ru', 'by'];
      const number = langs.indexOf(user.lang as string);
      dispatch(onLanguageChanged(number + 1));
    }
  }, [user]);

  return (
    <CloudinaryContext cloudName={cloudName} className={classes.root}>
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <div className={classes.pageWrapper}>
            <Switch>

              <Route path="/country/:id">
                <CountryPage />
                <SideBar />
              </Route>

              <Route path="/">
                <HomePage />
              </Route>

            </Switch>

          </div>


        </Router>
      </ThemeProvider>
    </CloudinaryContext>
  );
}

export default App;
