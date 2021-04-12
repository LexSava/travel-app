import React from 'react';
import {
    Box,
    Dialog,
    List,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
    Typography,
  } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import { AppState, IRating } from '../interfaces';
import cloudUrl from '../constants/cloudUrl';
import cloudName from '../constants/cloudName';
import { Rating } from '@material-ui/lab';
import { useSelector } from 'react-redux';


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
}));

interface IProps {
  isOpen: boolean;
  rating: IRating | {points: number, votedUsers?: []};
  setIsOpen: (value: boolean) => void;
}

const heading: Array<string> = ['Rating', 'Рейтинг', 'Рэйтынг'];

const ReactPopup: React.FC<IProps> = ({ isOpen, setIsOpen, rating }: IProps) => {
    const classes = useStyles();

    const { lang } = useSelector<AppState, AppState>(state => state);

    const onClose = () => {
      setIsOpen(false);
    }

    return (
      <Dialog open={isOpen} onClose={onClose}>
        <Box className={classes.container}>
          <Typography
              variant="h4"
              className={classes.heading}
          >
              {heading[lang - 1]}
          </Typography>
          <CloseIcon className={classes.close} onClick={onClose} />

          <List dense={false} className={classes.list}>

          {(rating.votedUsers || []).map((user) => (
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
                {/* <IconButton edge="end" aria-label="delete">
                  {user.points}
                </IconButton> */}
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

        </Box>
      </Dialog>
    );
}

export default ReactPopup;