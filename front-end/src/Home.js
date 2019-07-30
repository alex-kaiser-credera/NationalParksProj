import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const images = [
  {
    url: 'https://farm3.staticflickr.com/2896/33650426736_7a5088b717_z.jpg',
    title: 'I am a Visitor',
    width: '30%',
  },
  
  {
    url: 'https://farm3.staticflickr.com/2896/33650426736_7a5088b717_z.jpg',
    title: 'I am an Employee',
    width: '30%',
  },
];
const useStyles = makeStyles(theme => ({
  image: {
    left: 300,
    top: 250,
    border: '4px solid white',
    position: 'relative',
    height: 300,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
  },
  imageButton: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
}));

export default function ButtonBases() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span
            className={classes.imageSrc}
            style={{
            backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/c/c7/YosemitePark2_amk.jpg)`,
            }}
          />
      {images.map(image => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
            margin: 25,
          }}
        >
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}