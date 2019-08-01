import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import {useInput} from './UseInput';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Component} from 'react';
import {Route, Redirect} from 'react';

// class ProtectedRoute extends Component {
//   render() {
//     const { component: Component, ...props } = this.props

//     return (
//       <Route 
//         {...props} 
//         render={props => (
//           this.state.authenticated ?
//             <Component {...props} /> :
//             <Redirect to='/login' />
//         )} 
//       />
//     )
//   }
// }

const useStyles = makeStyles(theme => ({
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        zIndex: -1
      },

  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 50,
    border: '4px solid grey',
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
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


 const LogIn = props => {

  const classes = useStyles();
  const userPassword = 'hello';
  const userName = 'MeganMoore'

  const {value: username, bind:bindUsername, reset:resetUsername} = useInput('');
  const {value: password, bind:bindPassword, reset:resetPassword} = useInput('');


   function handleSubmit(event) {
    event.preventDefault();
    if (username !== userName){
        alert("Error: Username does not exist");
    } else if(password !== userPassword){
        alert("Error: Incorrect Password");
    } else {
    alert("Login successful");
    props.history.push("/employee_queue");

    }
    resetUsername();
    resetPassword();
  }


  return (
    <div>     
    <span
        className={classes.imageSrc}
        // style={{
        // backgroundImage: `url(https://www.rolwheels.com/public/upload/images/page-background-images/bg-mountain.jpg)`,
        // }}
      />
    <Container id="signIn-form" component="main" maxWidth="xs"> 
    {/* onSubmit={handleSubmit}> */}
      <div className={classes.paper}>
        <Avatar className={classes.avatar}/>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="current-username"
            autoFocus
            value={username}
            type= "username" {...bindUsername}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password" {...bindPassword}
            id="password"
            autoComplete="current-password"
            value={password}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          {/* <Link to="/employee_queue">  */}
            <Button
              onClick = { (e) => handleSubmit(e)}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
          {/* </Link> */}
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    </div>
  );
}

export default LogIn;