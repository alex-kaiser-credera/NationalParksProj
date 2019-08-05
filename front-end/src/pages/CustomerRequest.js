import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Select, FormControl, InputLabel, MenuItem, FormHelperText, Input, Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import axios from "axios";

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
        marginLeft: 250,
        padding: 50,
        width: 600,
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
        marginBottom: 25,
        backgroundImage: `url(https://ncptt.nps.gov/rt66/wp-content/uploads/2014/03/nps-logo-200x262-2.png)`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'inherit',
        left: 250,
    },
}));


export default function CustomerRequest() {
    const classes = useStyles();
    const [park, setPark] = React.useState('');
    const [request, setRequest] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [result, setResult] = React.useState([]);

    async function getPark(id) {
        await axios.get(`http://localhost:8080/getAllParks/`)
        //await axios.get(`http://localhost:8080/getPark/?id=${id}`)
            .then(response => {
                 //setResult(response.data)
                setResult(response.data.map(ele => {
                    return (ele.name)
                }))
            }
        );
    }
    // console.log(typeof result)
    // var parkNames = [];
    // result.forEach(function(element){
    //     parkNames.push(element.name)
    // })

    const handleParkChange = (event) => {
        event.preventDefault();
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



    const items = ["yellowstone", "big bend", "park3"];

    getPark(5);
    return (
        <div>
            {/* <div>{JSON.stringify(result)}</div> */}
            {result.map(ele => (<div>{ele}</div>))}
            {/* <div>{JSON.stringify(parkNames)}</div> */}
            <Container id="signIn-form" component="main" >
                <div className={classes.paper}>
                    {/* <span
            className={classes.imageSrc}
            // style={{
            //   backgroundImage: `url(https://www.rolwheels.com/public/upload/images/page-background-images/bg-mountain.jpg)`,
            // }}
          /> */}
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
                            <InputLabel className={classes.labels} htmlfor='email'>Email</InputLabel>
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
                            <InputLabel className={classes.labels} htmlfor='park'>Park</InputLabel>
                            <Select
                                className={classes.labels}
                                value={park}
                                onChange={handleParkChange}
                                // onOpen={handleParkClick}
                                inputProps={{
                                    name: 'park',
                                    id: 'park',
                                }}

                            >
                                {result.map((e) => (
                                    <MenuItem>{e}</MenuItem>
                                ))}
                                {/* <MenuItem value={2}>YellowStone</MenuItem>
            <MenuItem value={3}>Lol</MenuItem> */}
                            </Select>
                            <FormHelperText className={classes.spacing}>Select park location</FormHelperText>
                        </FormControl>
                    </div>
                    <div align='center'>
                        <FormControl>
                            <InputLabel className={classes.labels} htmlfor='request'>Request</InputLabel>
                            <Select
                                className={classes.labels}
                                value={request}
                                onChange={handleRequestChange}
                                inputProps={{
                                    name: 'request',
                                    id: 'request',
                                }}

                            >
                                <MenuItem value={1}>Bathroom Needs Service</MenuItem>
                                <MenuItem value={2}>Potable Water Is Empty</MenuItem>
                                <MenuItem value={3}>Trail Is Blocked By Obstruction</MenuItem>
                                <MenuItem value={4}>Road Sign Needs Service</MenuItem>
                                <MenuItem value={5}>Trail Sign is Broken/Unreadable</MenuItem>
                                <MenuItem value={6}>Campsite Needs Cleanup</MenuItem>
                                <MenuItem value={7}>Other</MenuItem>
                            </Select>
                            <FormHelperText className={classes.spacing}>Select request type</FormHelperText>
                        </FormControl>
                    </div>
                    <div align='center'>
                        <FormControl>
                            <InputLabel className={classes.labels} htmlfor='description'>Request Description</InputLabel>
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

//export default (CustomerRequest);