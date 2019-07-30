import React, { useState, useEffect } from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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
    const [state, setState] = useState({
        requestId: "",
        requestStatus: "", 
        employeeName: "", 
        description:"",
        dateRequested:"",
        dateCompleted:"",
        visitorEmail:"",
    });
    
    // useEffect

    const handleChange = (event) => {
        event.preventDefault();
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
                <FormLabel component="legend">Request Status: </FormLabel>
                <RadioGroup
                    aria-label="status"
                    name="status"
                    className={classes.group}
                    // value={value}
                    onChange={handleChange}
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