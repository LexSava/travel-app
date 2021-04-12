import React from "react";
import '../styles/CountryCard.scss';
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { Link } from "react-router-dom";
import Box from '@material-ui/core/Box';
import cloudName from '../constants/cloudName';
import cloudUrl from '../constants/cloudUrl';
import { ICountryCard } from "../interfaces";
import { lightGreen } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    maxWidth: 400,
    width: 300,
    maxHeight: 284.38,
    'border-radius': 8,
    transition: 'all 0.3s;',
    '&:hover': {
      transform: 'scale(1.1)',
      backgroundColor: lightGreen[100],
    }

  },
  action: {
    textAlign: 'center',
    '&:hover': {
      color: theme.palette.primary.dark,
      fontWeight: 600,
    },

  },
  content: {
  },
  media: {
    height: 180,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
  },
}));

const CountryCard: React.FC<ICountryCard> = (props) => {
  const { name, capital, smallImageId, id } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link to={`/country/${id}`} className="card__link">
        <CardActionArea className={classes.action}>
          <Box
            style={{ backgroundImage: `url('${cloudUrl}/${cloudName}/image/upload/h_500/${smallImageId}')` }}
            className={classes.media}
          />
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
              {capital}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default CountryCard;
