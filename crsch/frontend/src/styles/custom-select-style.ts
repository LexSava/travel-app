import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => createStyles({
    select: {
    display: 'flex',
      minWidth: 135,
      color: 'white',
      background: theme.palette.primary.light,
      margin: '0 12px',
      fontWeight:500,
      borderStyle:'none',
      borderWidth: 2,
      borderRadius: 8,
      paddingLeft: 20,
      paddingTop: 10,
      paddingBottom: 10,
      boxShadow: '0px 5px 8px -3px rgba(0,0,0,0.14)',
      "&:focus":{
        borderRadius: 8,
        background: theme.palette.primary.light,
        borderColor: theme.palette.primary.dark
      },
    },
    icon:{
      right: 20,
      color: theme.palette.primary.dark,
      position: 'absolute',
      userSelect: 'none',
      pointerEvents: 'none',
    },
    paper: {
      borderRadius: 8,
      marginTop: 18,
      width: '135px !important',
    },
    list: {
      paddingTop:0,
      paddingBottom:0,

      background:'white',
      "& li":{
        fontWeight: 500,
        paddingLeft: 20,
        paddingTop:10,
        paddingBottom:10,
        color: theme.palette.primary.dark

      },
      "& li:hover":{
        background: theme.palette.primary.light[100]
      },
      "& li.Mui-selected":{
        color:'white',
        background: theme.palette.primary.light
      },
      "& li.Mui-selected:hover":{
        background: theme.palette.primary.main
      }
    },
    listIcon: {
      minWidth: 32,
    }
}));

  export default useStyles;