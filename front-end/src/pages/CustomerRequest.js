import React from 'react';
//import {withStyles} from 'material-ui/styles';

//import {List} from 'material-ui/List';
//import Typography from 'material-ui/styles/typography';
import {Typography, Select, FormControl, InputLabel, MenuItem, FormHelperText, Input, Button} from '@material-ui/core';

// const Styles = theme => ({
//     root: {
//         width: 100%
//     }


// });

const CustomerRequest = () => {
    const [park, setPark] = React.useState('');
    const [request, setRequest] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [email, setEmail] = React.useState('');

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

    return(
    <div>
        <Typography
            noWrap
            align='center'
            variant='h1'
            color='inherit'
        >
            Customer Demand
        </Typography>
        <div align='center'>
        <FormControl>
        <InputLabel htmlfor='email'>Email</InputLabel>
        <Input 
            id='description'
            onChange={handleEmailChange}
            value={email}
        />
        <FormHelperText>Type in your email</FormHelperText>
        </FormControl>
        </div>
        <div align='center'>
        <FormControl>
        <InputLabel htmlfor='park'>Park</InputLabel>
        <Select 
            value={park}
            onChange={handleParkChange}
            inputProps={{
            name: 'park',
            id: 'park',
            }}

        >
            <MenuItem value={1}>Yosemite</MenuItem>
            <MenuItem value={2}>YellowStone</MenuItem>
            <MenuItem value={3}>Lol</MenuItem>
        </Select>
        <FormHelperText>Select your national park!</FormHelperText>
        </FormControl>
        </div>
        <div align='center'>
        <FormControl>
        <InputLabel htmlfor='request'>Request</InputLabel>
        <Select 
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
        <FormHelperText>Select your Request!</FormHelperText>
        </FormControl>
        </div>
        <div align='center'>
        <FormControl>
        <InputLabel htmlfor='description'>Request Description</InputLabel>
        <Input 
            id='description'
            onChange={handleDescriptionChange}
            value={description}
            multiline
            rowsMax="4"
        />
        <FormHelperText>Describe your Request!</FormHelperText>
        </FormControl>
        </div>
        <div align='center'>
            <Button variant='contained'>Submit</Button>
        </div>
    </div>
    );
};

export default (CustomerRequest);