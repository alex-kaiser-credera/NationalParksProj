import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


export default function TaskCard(props) {
    const classes = useStyles();
    const [state, setState] = useState();

    const [data, setData] = useState({});

    /*fields
        id
        status
        dateCreated
        dateCompleted
        parkLocation
        requestType
        problemDesc
        email
    */
  // React Hooks https://reactjs.org/docs/hooks-intro.html
//   useEffect(() => {
//     // ES8 Async/Await https://alligator.io/js/async-functions/
//     async function getRequest(id) {
//       const result = await axios.get(`https://localhost:8080/filter/?id=${id}`);

//       // You know why this is important ;)
//       result.data.data.children = result.data.data.children.filter(
//         ele => !ele.data.over_18
//       );

//       setData(d => ({
//         ...d,
//         all: result.data.data
//       }));

//     //   -(false);
//     }
//     fetchAll();
//   }, []);//["https://www.reddit.com/r/all.json"]);
    

    // useEffect

    const handleChange = (event) => {
        event.preventDefault();
        setState({...state, requestStatus: event.target.value});
        //Call API, set value, rerender page
    }

    return (
        <Container component="main" >
            <Typography>
                <div
                    style={{
                        paddingBottom: `1rem`,
                    }}>Request ID: {state.requestId}</div>
            </Typography>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel 
                    component="legend"
                    style={{
                        color: 'black',
                    }}>Request Status: </FormLabel>
                <RadioGroup
                    aria-label="status"
                    name="status"
                    className={classes.group}   
                    // value={value}
                    onChange={e => handleChange(e)}  
                    // setState({ ...state, search: e.target.value })}
                    // onChange={handleChange}
                >
                    <FormControlLabel value="notassigned" control={<Radio />} label="Not Assigned" />
                    <FormControlLabel value="inprogress" control={<Radio />} label="In Progress" />
                    <FormControlLabel value="completed" control={<Radio />} label="Completed" 
                        style={{color: `green`}}
                    />
                </RadioGroup>
            </FormControl>
            <Typography>
                <div>Employee: {state.employee}</div>
                <div>Description: {state.description}</div>
                <div>Date Requested: {state.dateRequested}</div>
                <div>Date Completed: {state.dateCompleted}</div>
                <div>Visitor Email: {state.visitorEmail}</div>
            </Typography>
        </Container>
    );
}