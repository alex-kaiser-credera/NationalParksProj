import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import { useInput } from './UseInput';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from "axios";
import { useCookies } from 'react-cookie';




const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(15),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 50,
    width: 585,
    border: '4px solid grey',
    marginLeft: 263
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

  const [values, setValues] = React.useState({});

  const [ cookies, setCookie ] = useCookies(['cookie']);

  const classes = useStyles();

  const { value: username, bind: bindUsername } = useInput('');
  const { value: password, bind: bindPassword } = useInput('');

  
 
  const handleUsernameChange = username => event => {
    setValues({ ...values, [username]: event.target.value });
  };

  const handlePasswordChange = password => event => {
    setValues({ ...values, [password]: event.target.value });
  };


  async function verifyLogin() {
    console.log(`Verify Login called\nUsername: ${username}\nPassword: ${password}`)
    axios({
      method: 'post',
      url: 'http://localhost:8080/password/',
      data: {
        un: username,
        pw: password
      }
    }).then((response) => {
      if (response.data.successful === false) {
        alert("Error: Invalid Username or Password")
      } else {
        const parkLocation = response.data.parkId;
    
        setCookie('cookie', response.data.token, ['/']);
        setCookie('parkIdCookie', response.data.parkId, ['/']);
        props.callBackFromApp(parkLocation);

        console.log(response)
        //console.log(parkLocation)
        //const temp = { successful: true, parkId: 52, token: "lol" };
        props.history.push("/employee_queue");
      }
    }, (error) => {
      console.log(error);
    });;
  }
  function handleSubmit(event) {
    event.preventDefault();
    verifyLogin()
  }

  return (
    <div>
      {/* <span
        className={classes.imageSrc}
      /> */}
      <Container id="signIn-form" component="main">
        <div className={classes.paper}>
          <Avatar className={classes.avatar} />
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
              onChange={handleUsernameChange('username')}
              value={username}
              type="username" {...bindUsername}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              autoComplete="current-password"
              autoFocus
              onChange={handlePasswordChange('password')}
              value={password}
              type="password" {...bindPassword}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              onClick={(e) => handleSubmit(e)}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default LogIn;