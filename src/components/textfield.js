import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AuthLP from "../pages/AuthLP"

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} >
      {/* <TextField id="standard-basic" label="Standard" /> */}
      <TextField id="filled-basic" label="" variant="filled" />
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
    </form>
  );
}
