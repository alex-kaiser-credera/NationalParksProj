import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
//import { ThemeProvider } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { sizing } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
  root:{
    height: '100%',
    width: '100%'
  },
  image: {
    // left: 300,
    // top: 250,
    border: '4px solid black',
    width: '30%',
    textAlign: 'center',
    textDecoration: 'none',
    margin: 20,
    // position: 'relative',
    // height: 250,
  },
  imageButton: {
    // position: 'relative',
    color: theme.palette.common.white,
  },
  imageSrc: {
    // position: 'absolute',
    // left: 0,
    // right: 0,
    // top: 0,
    // bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageTitle: {
    // position: 'relative',
    fontFamily: 'Cambria',
    color:'black',
    fontSize: "3rem",
    // padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageText: {
    // width: '50%',
    textAlign: 'center'
    // margin: '0 -5rem',
  },
  buttonWrapper: {
    justifyContent: 'center',
  }
}));

// const theme = createMuiTheme({
//   overrides: {
//     MuiButtonBase: {
//       root: {
//         left: '0px!important',
//       }
//     }
//   }
// });

export default function ButtonBases() {
  const classes = useStyles();

  const images = [
      {
        title: 'I am a Visitor',
        // width: '30%',
        url: '/visit_request'
      },
      {
        title: 'I am an Employee',
        // width: '30%',
        url: '/employee_queue'
      },
    ];
  
  // function handleClick(i) {
  //   console.log(`here!! button`, i.url);
  // }

  return (
    //<ThemeProvider theme={theme}>
      <div className={classes.root}>
        <span
          className={classes.imageSrc}
          alignItems={60}
          // style={{
          //   backgroundImage: `url(https://www.rolwheels.com/public/upload/images/page-background-images/bg-mountain.jpg)`,
          // }}
        />
        {/* <div 
          className={classes.buttonWrapper}
          style={{
          display: 'flex',
        }}> */}
        <Grid container className={classes.root} spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
        >
          {images.map(value => (
            <Grid key={value} 
              item 
              className={classes.image}
              component={props => <Link to={value.url} {...props} />}

            >
              <ButtonBase
                focusRipple
                key={value.title}
                focusVisibleClassName={classes.image}
                style={{
                  // width,
                  //width: '50%',
                  textJustify: 'center',
                  padding: '1rem'
                }}

                // onClick={() => handleClick(i)}
              >
                {/* <Grid item xs={5} sm={4}
                  className={classes.image} 
                  spacing={3}
                > */}
                <span className={classes.imageButton}>
                  
                  <Typography
                    className={classes.imageTitle}
                  >
                    {value.title}
                  </Typography>
                </span>
                {/* </Grid> */}
              </ButtonBase>
            </Grid>
          ))}
        </Grid>
      </div>
    
      // </div>
    //</ThemeProvider>
  );
}