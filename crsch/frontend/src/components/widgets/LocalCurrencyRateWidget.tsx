import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { fade } from '@material-ui/core/styles/colorManipulator';
import { AppState, ICountryFull, Language } from "../../interfaces";

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    maxWidth: 300,
    width: 240,
    borderRadius: 8,
    color: 'white',
    backgroundColor: fade(theme.palette.primary.light, 0.8),
  },
  action: {
    '&:hover': {
      cursor: 'unset',
    },
  },
}));

const LocalCurrencyRateWidget: React.FC = () => {
  const classes = useStyles();
  const { lang, country } = useSelector<AppState, AppState>(state => state);
  const api = {
    base: 'https://v6.exchangerate-api.com/v6/66412dc229d14c0839a3b6b2/latest/'
  }

  const [rates, setRates] = useState<any>(null);
  useEffect(() => {
    if (!country) { return; }

    const localCurrency = (country as ICountryFull).currencyCode;

    fetch(`${api.base}${localCurrency}`)
      .then(res => res.json())
      .then(result => {
        setRates(result.conversion_rates);
      }).catch((err) => {
        alert(err);
      });
  }, [ country ]);

  const currencyRateInformation = {
    [Language.en]: ['Currency rates'],
    [Language.ru]: ['Курсы валют'],
    [Language.by]: ['Курсы валют']
  }

  function getRate(currency: 'USD' | 'EUR' | 'BYN'): string {
    if (!country || !rates) {
      return '';
    }
    return (1/rates[currency]).toFixed(2) + ' ' + (country as ICountryFull).currencyCode;
  }

  return (
    country && (<Card className={classes.root} onClick={(event) => event.stopPropagation()}>
      <CardActionArea className={classes.action}>
        <CardContent>
          <Typography variant="h5" component="h3">
            {currencyRateInformation[lang as Language][0]}
          </Typography>
          <Typography variant="body1" component="h3">
            <span style={{ color: "rgba(0, 0, 0, 0.54)" }}>1 USD = </span>
            {getRate('USD')}
          </Typography>
          <Typography variant="body1" component="h3">
            <span style={{ color: "rgba(0, 0, 0, 0.54)" }}>1 EUR = </span>
            {getRate('EUR')}
          </Typography>
          <Typography variant="body1" component="h3">
            <span style={{ color: "rgba(0, 0, 0, 0.54)" }}>1 BYN = </span>
            {getRate('BYN')}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>)
  );
};

export default LocalCurrencyRateWidget;
