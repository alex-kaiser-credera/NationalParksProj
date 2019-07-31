import React from 'react';
import Textfield from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles,  createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    // marginRight: theme.spacing(2),
  },
}));

const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        background: 'transparent!important',
        color: '#000!important',
        boxShadow: 'none!important',
      }
    }
  }
});

// export default function DenseAppBar() {
//     const classes = useStyles(theme => ({
//         root: {
//           flexGrow: 1,
//         },
//         menuButton: {
//           marginRight: theme.spacing(2),
//         },
//       }));

// background: transparent;
// color: #000;
// box-shadow: none;

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" text-color="black">
              Home
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
}