import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles({
    AppBar: {
        position: 'sticky',
        backgroundColor: '#424242',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    title: {
        fontWeight: 'bolder'
    }
});

export default function Header() {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.AppBar}>
        <Toolbar className={classes.toolbar}>
          <IconButton className={classes.Icon} color="inherit">
            <i className="fas fa-music"></i>
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            The LyricsHunt
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
