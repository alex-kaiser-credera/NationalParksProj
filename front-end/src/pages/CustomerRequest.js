import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Select, FormControl, InputLabel, MenuItem, FormHelperText, Input, Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import axios from "axios";
import { useInput } from '../UseInput';

const API_KEY = "http://ec2-3-83-136-233.compute-1.amazonaws.com/api/"
const useStyles = makeStyles(theme => ({
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundPosition: 'center 40%',
        zIndex: -1
    },
    header: {
        color: 'inherit',
        paddingBottom: 30,
    },
    paper: {
        marginTop: theme.spacing(8),
        marginLeft: 285,
        padding: 50,
        width: 550,
        border: '4px solid grey',
        height: 650,
    },
    labels: {
        display: 'block',
        width: 200,
    },
    button: {
        margin: 30,
        marginLeft: 55,
    },
    spacing: {
        marginBottom: 20,
    },
    avatar: {
        height: 100,
        width: 100,
        marginBottom: 35,
        backgroundImage: `url(https://ncptt.nps.gov/rt66/wp-content/uploads/2014/03/nps-logo-200x262-2.png)`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'inherit',
        left: 222,
    },
    dropdown: {
        backgroundColor: '#FFFFFF'
    }
}));


export default function CustomerRequest() {
    const classes = useStyles();
    const [park, setPark] = React.useState('');
    const [request, setRequest] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [result, setResult] = React.useState([]);
 


    async function getPark(id) {
        await axios.get(`${API_KEY}getAllParks/`)
            .then(response => {
                setResult(response.data.map(ele => {
                    return (ele)
                    }))
            }
        );
    }

    const handleParkChange = (event) => {
        setPark(event.target.value);
    }

    const handleRequestChange = (event) => {
        setRequest(event.target.value);
    }
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const requestStrings = [
        'Bathroom Needs Service',
        'Potable Water Is Empty',
        'Trail Is Blocked By Obstruction',
        'Road Sign Needs Service',
        'Trail Sign is Broken/Unreadable',
        'Campsite Needs Cleanup',
        'Other'
    ];

    const requestType = requestStrings[request-1];

        var date = new Date().toLocaleDateString();

    async function submitRequest() {
        console.log(`Verify Request\ndateCreated: ${date}\nparkLocation: ${park}\nrequestType: ${request}
                \nproblemDescription: ${description}\nemail: ${email}`)  
        axios({
            method: 'post',
            url: `${API_KEY}status/visitor`,
            data: {
                "status":"Not Started",
                "dateCreated": date,
                "dateCompleted": null,
                "parkLocation":park,
                "requestType":requestType,
                "problemDescription":description,
                "email":email
            }
        }).then(response => {
          console.log(response);
        }, (error) => {
          console.log(error);
        });;
    }
      const handleSubmit = (event) => {
        event.preventDefault();

        if (park !== '' && requestType !== '' && email !== ''){
        submitRequest();
        alert('Thank you for your Request! A work order has been submitted.')
        setEmail('');
        setPark('');
        setRequest('');
        setDescription('');
        } else {
            alert('Error: Please fill all required fields')
        }
    }


    getPark(5);
    return (
        <div>
            <Container id="signIn-form" component="main" >
                <div className={classes.paper}>
                    <Avatar className={classes.avatar} />
                    <Typography
                        noWrap
                        className={classes.header}
                        align='center'
                        component='h1'
                        variant='h5'
                    >
                        Visitor Request Form
        </Typography>
                    <div align='center'>
                        <FormControl>
                            <InputLabel className={classes.labels} htmlFor='email'>Email*</InputLabel>
                            <Input
                                className={classes.labels}
                                id='description'
                                onChange={handleEmailChange}
                                value={email}
                    
                            />
                            <FormHelperText className={classes.spacing}>Type in your email</FormHelperText>
                        </FormControl>
                    </div>
                    <div align='center'>
                        <FormControl>
                            <InputLabel className={classes.labels} htmlFor='park'>Park*</InputLabel>
                            <Select
                                className={classes.labels}
                                value={park}
                                onChange={handleParkChange}
                                inputProps={{
                                    name: 'park.name',
                                    id: 'park.id',
                                }}
                            >
       
                            
                            {result.map((e) => {
                                return (<MenuItem className={classes.dropdown} value={e.id}>{e.name}</MenuItem>)
                            })}
                    
                            </Select>
                            <FormHelperText className={classes.spacing}>Select park location</FormHelperText>
                        </FormControl>
                    </div>
                    <div align='center'>
                        <FormControl>
                            <InputLabel className={classes.labels} htmlFor='request'>Request*</InputLabel>
                            <Select
                                className={classes.labels}
                                value={request}
                                onChange={handleRequestChange}
                                inputProps={{
                                    name: 'request',
                                    id: 'request',
                                }}

                            >

                                    <MenuItem className={classes.dropdown} value={1}>Bathroom Needs Service</MenuItem>
                                    <MenuItem className={classes.dropdown} value={2}>Potable Water Is Empty</MenuItem>
                                    <MenuItem className={classes.dropdown} value={3}>Trail Is Blocked By Obstruction</MenuItem>
                                    <MenuItem className={classes.dropdown} value={4}>Road Sign Needs Service</MenuItem>
                                    <MenuItem className={classes.dropdown} value={5}>Trail Sign is Broken/Unreadable</MenuItem>
                                    <MenuItem className={classes.dropdown} value={6}>Campsite Needs Cleanup</MenuItem>
                                    <MenuItem className={classes.dropdown} value={7}>Other</MenuItem>

                            </Select>
                            <FormHelperText className={classes.spacing}>Select request type</FormHelperText>
                        </FormControl>
                    </div>
                    <div align='center'>
                        <FormControl>
                            <InputLabel className={classes.labels} htmlFor='description'>Request Description</InputLabel>
                            <Input
                                className={classes.labels}
                                id='description'
                                onChange={handleDescriptionChange}
                                value={description}
                                multiline
                                rowsMax="4"
                            />
                            <FormHelperText className={classes.spacing}>Describe request details</FormHelperText>
                            <div className={classes.button}>
                                <Button
                                    onClick={(e) => handleSubmit(e)}
                                    variant='contained'
                                    color="primary"
                                >Submit</Button>
                            </div>
                        </FormControl>
                    </div>
                </div>
            </Container>
        </div>
    );
};