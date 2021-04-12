import React, { useEffect, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { AppState, IRating, IRatingRequest, IVotedUser } from '../interfaces';
import RatingPopup from './RatingPopup';
import { Dialog, List, ListItem } from '@material-ui/core';
import { Box, ListItemAvatar, ListItemSecondaryAction, ListItemText, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import cloudName from '../constants/cloudName';
import cloudUrl from '../constants/cloudUrl';
import { onCountryChanged } from '../actions/country-action';
import { lightGreen } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    width: 400,
    maxWidth: 500,
    margin: theme.spacing(0, 1),
  },
  image: {
      height: 50,
      width: 50,
      borderRadius: '50%',
      backgroundSize: 'cover',
      marginRight: theme.spacing(1),
  },
  container: {
    padding: theme.spacing(2),
    backgroundColor: '#E5F6EB',
    // color: theme.palette.primary.main

  },
  close: {
    position: 'absolute',
    top: 5,
    right: 5,
    '&:hover': {
        cursor: 'pointer',
    },
  },
  heading: {
    textAlign: 'center',
    paddingBottom: theme.spacing(2),
  },
  list: {
    maxHeight: 500,
    'overflow-y': 'auto',
  },
  userRating: {
    display: 'flex', 
    justifyContent: 'space-around', 
    alignItems: 'center',
    marginBottom: theme.spacing(2)
  },
  yourRating: {
    fontSize: '1rem',
    fontWeight: 600
  },
}));



const heading: Array<string> = ['Rating', 'Рейтинг', 'Рэйтынг'];
const votedAverage: Array<string> = ['Voted / Average:  ', 'Проголосовало / Cредняя оценка:  ', 'Прагаласавала / Сярэдняя адзнака:  '];
const yourRating: Array<string> = ['Your rating:', 'Ваш рейтинг:', 'Ваш рэйтынг:'];
const votedMessage: Array<string> = ['You voted:', 'Вы проголосовали!:', 'Вы ужо прагаласавали'];
const forbidVote: Array<string> = ['Login for votinig:', 'Войдите чтобы проголосовать', 'Вайдзiце каб прагаласаваць'];

const SightRating: React.FC<{rating: IRating}> = ( { rating } ) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [userPoints, setUserPoints] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
    if (!user) {
      alert(forbidVote[lang - 1])
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
    
  const { country, lang, user  } = useSelector<AppState, AppState>(state => state);
  const [curRating, setCurRating] = useState<IRating>(rating);
  const dispatch = useDispatch();

  useEffect(() => {
    setCurRating(rating);
  }, [ rating, country ]);



  useEffect(() => {
    const getUserPoints = () => {
      if (user && rating) {
        return rating.votedUsers.find(usr => usr.name === user.name) ?
        (rating.votedUsers.find(usr => usr.name === user.name) as IVotedUser).points : 0
      } else {
        return 0;
      }
    }
    const curPoints = getUserPoints()
    setUserPoints(curPoints);
  }, [ rating, country ]);
  
  const setRating = async (event: React.ChangeEvent<{}>, points: number | null) => {
    event.preventDefault();

    const req: IRatingRequest = {
      countryId: country!.countryId || country!.id,
      sightId: rating.sightId!,
      name: user!.name,
      imageId: user!.imageId,
      points: points || 0,
    }

    const response = await fetch("/api/countries/rating", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(req),
    });

    const result = await response.json();
      if (result) {
        dispatch(onCountryChanged(result));
      } else  if (result === null){
          alert(votedMessage[lang - 1])
      }
  }
  
  return (
    <>
      <div className={classes.root} onClick ={handleClickOpen}>
        <Rating
          name="half-rating-read"
          value={curRating? curRating.points : 0}
          precision={0.5}
          readOnly={!(user && user.id)}
        />
      </div>


      <Dialog open={open} onClose={handleClose}>
        <Box className={classes.container}>
          <Typography
              variant="h4"
              className={classes.heading}
          >
              {heading[lang - 1]}
          </Typography>
          <CloseIcon className={classes.close} onClick={handleClose} />

          <div className={classes.userRating}>
            <Typography
              variant="h4"
              className={classes.yourRating}
            >
              {votedAverage[lang - 1]}
            </Typography>
            <p>&nbsp;&nbsp;{rating ? rating.votes : 0} / {rating ? rating.points : 0}</p>

          </div>

          <List dense={false} className={classes.list}>
          {(rating?.votedUsers || []).map((user) => (
            <ListItem key={user.id}>
              <ListItemAvatar>
                <Box
                  className={classes.image}
                  style={{
                    backgroundImage: `url('${cloudUrl}/${cloudName}/image/upload/h_200/${user.imageId}')`,
                  }}
                />
              </ListItemAvatar>
              <ListItemText className={classes.name} primary={user.name} />
              <ListItemSecondaryAction>
                <Rating
                  name="half-rating-read"
                  value={user.points}
                  precision={0.5}
                  readOnly={true}
                />
              </ListItemSecondaryAction>
            </ListItem>
          ))}
          </List>
          <br/>
          {user && <div className={classes.userRating}>
            <Typography
              variant="h4"
              className={classes.yourRating}
            >
              {yourRating[lang - 1]}
            </Typography>
            <Rating
              name="half-rating-read"
              color="primary"
              value={userPoints}
              precision={0.5}
              readOnly={!!userPoints}
              onChange={(e, newValue) => {
                setRating(e, newValue);
              }}
            />
          </div>}

        </Box>
      </Dialog>
    </>
  );
}

export default SightRating;