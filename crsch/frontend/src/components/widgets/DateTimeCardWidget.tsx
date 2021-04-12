import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { fade } from '@material-ui/core/styles/colorManipulator';
import { AppState, Language } from "../../interfaces";

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    maxWidth: 300,
    width: 240,
    marginBottom: theme.spacing(2),

    'border-radius': 8,
    color: 'white',
    'background-color': fade(theme.palette.primary.light, 0.8),

  },
  action: {
    '&:hover': {
      cursor: 'unset'
    }
  },
}));

const DateTimeCardWidget: React.FC = () => {
  const classes = useStyles();
  const { lang, utcOffset } = useSelector<AppState, AppState>(state => state);

  const enMonthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const ruMonthNames = [
    'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Ноября', 'Декабря'
  ];
  const byMonthNames = [
    'Студзеня', 'Лютага', 'Сакавiка', 'Красавiка', 'Мая', 'Чэрвеня', 'Лiпеня', 'Жнiуня', 'Верасня', 'Кастрычнiка', 'Лiстапада', 'Снежня'
  ];

  const enDayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const ruDayNames = ['Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  const byDayNames = ['Нядзеля', 'Панядзелак', 'Аўторак', 'Серада', 'Чацвер', 'Пятніца', 'Субота'];

  const dayLocales = {
    [Language.en]: enDayNames,
    [Language.ru]: ruDayNames,
    [Language.by]: byDayNames
  }
  const monthLocales = {
    [Language.en]: enMonthNames,
    [Language.ru]: ruMonthNames,
    [Language.by]: byMonthNames
  }

  const [currentDate, setCurrentDate] = useState<Date>(
    new Date(Date.now() + (60 * (utcOffset as number) + new Date().getTimezoneOffset()) * 1000 * 60)
  );

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentDate(new Date(Date.now() + (60 * (utcOffset as number) + new Date().getTimezoneOffset()) * 1000 * 60));
    }, 1000);
    return () => clearInterval(timerId);
  });

  function getCurrentTime(): string {
    const minutes = (currentDate.getMinutes() < 10 ? '0' : '') + currentDate.getMinutes();
    const seconds = (currentDate.getSeconds() < 10 ? '0' : '') + currentDate.getSeconds();
    return currentDate.getHours() + ':' + minutes + ':' + seconds;
  }

  function getCurrentDay(): string {
    return dayLocales[lang as Language][currentDate.getDay()];
  }

  function getCurrentMonth(): string {
    return monthLocales[lang as Language][currentDate.getMonth()];
  }
  function getCurrentYear() {
    return currentDate.getFullYear();
  }

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.action} onClick={(event) => event.stopPropagation()}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            {currentDate.getDate()} {getCurrentMonth()}, 
          </Typography>
          <Typography gutterBottom variant="h5" component="h3">
            {getCurrentYear()}
          </Typography>
          <Typography gutterBottom variant="h5" component="h3">
            {getCurrentDay()}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {getCurrentTime()}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DateTimeCardWidget;
