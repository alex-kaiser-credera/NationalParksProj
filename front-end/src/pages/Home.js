import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  image: {
    left: 300,
    top: 250,
    border: '4px solid white',
    position: 'relative',
    height: 300
  },
  imageButton: {
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
    fontSize: 45,
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageText: {
    textDecoration: 'none'
  }
}));

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
  
  function handleClick(i) {
    console.log(`here!! button`, i.url);
  }

  return (
    <div className={classes.root}>
      <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/c/c7/YosemitePark2_amk.jpg)`,
            }}
          />
      {images.map(i => (
        <Link to={`${i.url}`} className={classes.imageText}>
          <ButtonBase
            focusRipple
            key={i.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: i.width,
              margin: 25,
            }}

            onClick={() => handleClick(i)}
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
  );
}