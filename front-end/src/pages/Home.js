import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import { sizing } from '@material-ui/system';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  root:{
    height: '100%',
    width: '100%'
  },

  image: {
    // left: 300,
    // top: 250,
    border: '4px solid black',
    // width: '30%',
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
    //textAlign: 'center'
    // margin: '0 -5rem',
  },
  buttonWrapper: {
    justifyContent: 'center',
  },
//   paper: {
//     marginTop: theme.spacing(8),
//     marginLeft: 250,
//     padding: 50,
//     width: 600,
//     border: '4px solid grey',
//     height: 650,
// },
  avatar: {
    height: 100,
    width: 100,
    backgroundImage: `url(https://ncptt.nps.gov/rt66/wp-content/uploads/2014/03/nps-logo-200x262-2.png)`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'inherit',
    marginLeft: '39em',
    marginTop: 115
  },
  
}));

const theme = createMuiTheme({
  overrides: {
    MuiButtonBase: {
      root: {
        // left: '0px!important',
        // border: '3px solid black',
        width: '50%',
        margin: '0 1rem',
      }
    }
  }
});

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
        url: '/login'
      },
    ];
  
  // function handleClick(i) {
  //   console.log(`here!! button`, i.url);
  // }

  return (
    <ThemeProvider theme={theme}>
      <div>
      {/* <div className={classes.paper}> */}
        <Avatar className={classes.avatar}/>
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
        {/* <Grid container className={classes.root} spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
        > */}
        <Container
          maxWidth="sm"
          style={{ marginTop: '4rem' }}>
          <div style={{ display: 'flex' }}>
            {images.map(value => (
              <Grid key={value} 
                item 
                className={classes.image}
                component={props => <Link to={value.url} {...props} />}
              >
                <ButtonBase
                  // className={classes.image} 
                  focusRipple
                  key={value.title}
                  focusVisibleClassName={classes.image}
                  style={{
                    // width,
                    //width: '50%',
                    // border: '3px solid black',
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
          </div>
        </Container>
        {/* </Grid> */}
      </div>
    
      {/* // </div> */}
      {/* </div> */}
    </ThemeProvider>
  );
}