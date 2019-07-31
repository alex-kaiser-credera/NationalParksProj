import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  image: {
    left: 300,
    top: 250,
    border: '4px solid black',
    position: 'relative',
    height: 300
  },
  imageButton: {
    position: 'relative',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageTitle: {
    position: 'relative',
    fontFamily: 'Cambria',
    color:'black',
    fontSize: 45,
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageText: {
    textDecoration: 'none',
    width: '50%',
    textAlign: 'center',
    margin: '0 -5rem',
  },
  buttonWrapper: {
    justifyContent: 'center',
  }
}));

const theme = createMuiTheme({
  overrides: {
    MuiButtonBase: {
      root: {
        left: '0px!important',
      }
    }
  }
});

export default function ButtonBases() {
  const classes = useStyles();

  const images = [
      {
        title: 'I am a Visitor',
        width: '30%',
        url: '/visit_request'
      },
      {
        title: 'I am an Employee',
        width: '30%',
        url: '/employee_queue'
      },
    ];
  
  // function handleClick(i) {
  //   console.log(`here!! button`, i.url);
  // }

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <span
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(https://www.rolwheels.com/public/upload/images/page-background-images/bg-mountain.jpg)`,
          }}
        />
        <div 
          className={classes.buttonWrapper}
          style={{
          display: 'flex',
        }}>
        {images.map(i => (
          <Link to={`${i.url}`} className={classes.imageText}>
            <ButtonBase
              focusRipple
              key={i.title}
              className={classes.image}
              focusVisibleClassName={classes.focusVisible}
              style={{
                // width: i.width,
                width: '50%',
                margin: 25,
              }}

              // onClick={() => handleClick(i)}
            >
              <span className={classes.imageButton}>
                
                <Typography
                  className={classes.imageTitle}
                >
                  {i.title}
                </Typography>
              </span>
            </ButtonBase>
          </Link>
        ))}
        </div>
      </div>
      </ThemeProvider>
  );
}