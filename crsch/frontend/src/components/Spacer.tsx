import React from 'react';
import { useStyles } from '../mui-style';

const Spacer: React.FC = () => {
  const classes = useStyles();

  return (
    <span className={classes.spacer}></span>
  )
}

export default Spacer;