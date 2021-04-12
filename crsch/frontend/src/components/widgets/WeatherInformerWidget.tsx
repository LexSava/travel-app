import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { fade } from '@material-ui/core/styles/colorManipulator';
import { AppState, IWeatherParams, Language } from "../../interfaces";
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    maxWidth: 300,
    width: 240,
    marginBottom: theme.spacing(2),
    borderRadius: 8,
    color: 'white',
    backgroundColor: fade(theme.palette.primary.light, 0.8),
  },
  action: {
    '&:hover': {
      cursor: 'unset'
    }
  },
  cover: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 46,
    right: 84,
  }
}));
interface IWheather {
  weather: [
    {
      main: string;
      icon: string;
    }
  ]
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  }
  wind: {
    speed: number;
  },
  name: string;
}

const WeatherInformerWidget: React.FC = () => {
  const classes = useStyles();
  const lang = useSelector<AppState>(state => state.lang);
  const weatherParams = useSelector<AppState, IWeatherParams | null>(state => state.weatherParams);

  const api = {
    key: '1b49f5edda5dd68a6e6fa012bd990fb5',
    base: 'https://api.openweathermap.org/data/2.5/'
  }
  const weatherInformation = {
    [Language.en]: ['feels like', 'humidity', 'wind speed'],
    [Language.ru]: ['ощущается как', 'влажность','скорость ветра'],
    [Language.by]: ['адчуваецца як', 'вільготнасць','хуткасць ветру']
  }

  const [weather, setWeather] = useState<IWheather | null>(null);

  useEffect(() => {
    if (weatherParams) {
      const lat = weatherParams.coords[0];
      const lon = weatherParams.coords[1];
      fetch(`${api.base}weather?lat=${lat}&lon=${lon}&units=metric&APPID=${api.key}&lang=by`)
        .then(res => res.json())
        .then(result => {
          if (result && result.cod === 200) {
            setWeather(result);
          }
        })
    }
  }, [ weatherParams ])

  return (
    <Card className={classes.root} onClick={(event) => event.stopPropagation()}>
      <CardActionArea className={classes.action}>
        {weather && (
          <CardContent>
            <Typography gutterBottom variant="h5" component="h3">
              {weatherParams!.capital}
            </Typography>
            <Typography gutterBottom variant="h5" component="h3">
              {weather.main.temp} °C
              <CardMedia
                className={classes.cover}
                image={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                // title={weather.weather[0].main}
              />
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              {weatherInformation[lang as Language][0]}:{" "}
              <span style={{ color: "white" }}>
                {weather.main.feels_like} °C
              </span>
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              {weatherInformation[lang as Language][1]}:{" "}
              <span style={{ color: "white" }}>{weather.main.humidity} %</span>
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              {weatherInformation[lang as Language][2]}:{" "}
              <span style={{ color: "white" }}>{weather.wind.speed} m/s</span>
            </Typography>
          </CardContent>
        )}
      </CardActionArea>
    </Card>
  );
};

export default WeatherInformerWidget;
