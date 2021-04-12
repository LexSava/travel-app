import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { theme } from "../mui-style";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { ICountryAvatarProps } from '../interfaces';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      marginBottom: theme.spacing(2), 
      borderRadius: 'unset'           
    },
    details: {
      display: 'flex',      
    },
    content: {
      flex: '0 1 100%',
      textAlign: 'center',
      padding: theme.spacing(0, 2)
    },
    cover: {
      flex: '0 1 100%',
      height: '250px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      filter: 'blur(2px)'
    },
    title: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(0.5),
    },
    subtitle: {
      marginBottom: theme.spacing(2),
    },
    
  }),
);

const MediaControlCard:React.FC<ICountryAvatarProps> = (props) => {  
  const classes = useStyles();
  const { name, capital, description, imageUrl } = props; 

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={imageUrl}
        title={name}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h3" variant="h3" className={classes.title} >
            {name}
          </Typography>
          <Typography variant="h5" color="primary" className={classes.subtitle}>
            {capital}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {description}
          </Typography>
        </CardContent>        
      </div>      
    </Card>
  );
}

export { MediaControlCard as CountryAvatar };