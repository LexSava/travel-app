import React from "react";
import { Container, Box, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({
  footer: {    
    backgroundColor: theme.palette.primary.main,
    bottom: 0,
    padding: theme.spacing(1.5, 0, 3.5),
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    columnGap: theme.spacing(5),
  },  
  logo: {
    width: "75px",
    // height: "75px",
  },  
  logoLink: {
    cursor: "pointer",
    display: "block",
    boxSizing: "content-box",
    textAlign: "center",
  },  
  creators: {    
    display: "flex",
    flexWrap: "wrap",
    columnGap: "10px",
    justifyContent: "center",
    alignItems: "center", 
    color: theme.palette.primary.contrastText,   
  },    
  author: {
    textDecoration: "none",
    cursor: "pointer",
    color: theme.palette.primary.contrastText,
  },
  year: {
    textDecoration: "none",
    color: theme.palette.primary.contrastText,
    fontWeight: 600,
  },
}))

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg" className={classes.container}>
        <Box>
          <a
            href="https://rs.school/js/"
            className={classes.logoLink}
            target="_blank"
            rel="noreferrer"
          >
            <img src="https://rs.school/images/rs_school_js.svg" className={classes.logo} alt="logo" />
          </a>
        </Box>
        <Box className={classes.creators}>
          <Typography></Typography>
          <a
            className={classes.author}
            href="https://github.com/GYegor"
            target="_blank"
            rel="noreferrer"
          >
            <Typography>GYegor</Typography>
          </a>  
          <hr/>        
          <a
            className={classes.author}
            href="https://github.com/KseniyaShukevich"
            target="_blank"
            rel="noreferrer"
          >
            <Typography>KseniyaShukevich</Typography>
          </a>
          <hr/>
          <a
            className={classes.author}
            href="https://github.com/pacetin"
            target="_blank"
            rel="noreferrer"
          >
            <Typography>pacetin</Typography>
          </a>
          <hr/>
          <a
            className={classes.author}
            href="https://github.com/MarinaYur"
            target="_blank"
            rel="noreferrer"
          >
            <Typography>MarinaYur</Typography>
          </a>
        </Box>
        <Box>
          <Typography className={classes.year}>&#169; 2021</Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
