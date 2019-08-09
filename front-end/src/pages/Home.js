import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles(theme => ({
  root:{
    height: '100%',
    width: '100%'
  },
 
  image: {
    border: '4px solid black',
    textAlign: 'center',
    textDecoration: 'none',
    margin: 20,
    minWidth: 250,
    position: 'relative',
  },
  imageButton: {
    color: theme.palette.common.white,
  },
  imageSrc: {
    backgroundSize: 'cover',
  },
  imageTitle: {
    fontFamily: 'Cambria',
    color:'black',
    fontSize: "3rem",
  },
  buttonWrapper: {
    justifyContent: 'center',
  },
  paper: {
    marginTop: theme.spacing(15),
    marginLeft: 263,
    padding: 50,
    //paddingTop: 50,
    width: 585,
    border: '4px solid grey',
    height: 500,
},
  avatar: {
    height: 100,
    width: 100,
    backgroundImage: `url(https://ncptt.nps.gov/rt66/wp-content/uploads/2014/03/nps-logo-200x262-2.png)`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'inherit',
    margin: 45,
    marginLeft: 243,
  },
  
}));

const theme = createMuiTheme({
  overrides: {
    MuiButtonBase: {
      root: {
        width: '50%',
      }
    }
  }
});

export default function ButtonBases() {
  const classes = useStyles();

  const images = [
      {
        title: 'I am a Visitor',
        url: '/visit_request'
      },
      {
        title: 'I am an Employee',
        url: '/login',
      },
    ];
 
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Container
          style={{ marginTop: '4rem' }}>
            <div className={classes.paper}>
            <Avatar className={classes.avatar}/>
                <div style={{ display: 'flex' }}>
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
                          textJustify: 'center',
                          padding: '1rem'
                        }}
                      >
                        <span className={classes.imageButton}>
                          <Typography
                            className={classes.imageTitle}
                          >
                            
                            {value.title}
                          </Typography>
                        </span>
                      </ButtonBase>
                     </Grid>
                  ))}
                </div>
              </div>
        </Container>
      </div>
    </ThemeProvider>
  );
}