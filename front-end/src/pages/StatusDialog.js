import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';

const requestStatus = [
  'Not Started',
  'In Progress',
  'Completed',
];
const useStyles = makeStyles({
  avatar: {
    // backgroundColor: blue[100],
    // color: blue[600],
    backgroundColor: 'black',
    color: 'black',
  },
});

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  function handleClose() {
    onClose(selectedValue);
  }

  function handleListItemClick(value) {
    console.warn(`###handleListItemClick`, value)
    // Call back-end api and pass comments and status selection here
    
    // onClose(value);
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Set Request Status</DialogTitle>
      <List>
        {requestStatus.map(item => (
          <ListItem
            button
            onClick={() => handleListItemClick(item)}
            key={item}
            style={{
              textAlign: 'center'
            }}
          >
            {/* <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar> */}
            <ListItemText primary={item} />
          </ListItem>
        ))}
        {/* <DialogTitle id="form-dialog-title">Comments</DialogTitle> */}
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Comments"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>'

        {/* <ListItem button onClick={() => handleListItemClick('addAccount')}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="add account" />
        </ListItem> */}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(requestStatus[1]);

  function handleClickOpen() {
    setOpen(true);
  }

  const handleClose = value => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      {/* <Typography variant="subtitle1">Selected: {selectedValue}</Typography> */}
      <br />
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </div>
  );
}



// import React, { useState, useEffect } from 'react';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
// import axios from 'axios';

// const useStyles = makeStyles(theme => ({
//     '@global': {
//         body: {
//             backgroundColor: theme.palette.common.white,
//         },
//     },
//     paper: {
//         marginTop: theme.spacing(8),
//         display: 'flex',
//         flexDirection: 'column',
//     },
//     avatar: {
//         margin: theme.spacing(1),
//         backgroundColor: theme.palette.secondary.main,
//     },
//     form: {
//         width: '100%', // Fix IE 11 issue.
//         marginTop: theme.spacing(3),
//     },
//     submit: {
//         margin: theme.spacing(3, 0, 2),
//     },
// }));


// export default function TaskCard(props) {
//     const classes = useStyles();
//     const [state, setState] = useState();

//     const [data, setData] = useState({});

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

//     const handleChange = (event) => {
//         event.preventDefault();
//         setState({...state, requestStatus: event.target.value});
//         //Call API, set value, rerender page
//     }

//     return (
//         <Container component="main" >
//             <Typography>
//                 <div
//                     style={{
//                         paddingBottom: `1rem`,
//                     }}>Request ID: {state.requestId}</div>
//             </Typography>
//             <FormControl component="fieldset" className={classes.formControl}>
//                 <FormLabel 
//                     component="legend"
//                     style={{
//                         color: 'black',
//                     }}>Request Status: </FormLabel>
//                 <RadioGroup
//                     aria-label="status"
//                     name="status"
//                     className={classes.group}   
//                     // value={value}
//                     onChange={e => handleChange(e)}  
//                     // setState({ ...state, search: e.target.value })}
//                     // onChange={handleChange}
//                 >
//                     <FormControlLabel value="notassigned" control={<Radio />} label="Not Assigned" />
//                     <FormControlLabel value="inprogress" control={<Radio />} label="In Progress" />
//                     <FormControlLabel value="completed" control={<Radio />} label="Completed" 
//                         style={{color: `green`}}
//                     />
//                 </RadioGroup>
//             </FormControl>
//             <Typography>
//                 <div>Employee: {state.employee}</div>
//                 <div>Description: {state.description}</div>
//                 <div>Date Requested: {state.dateRequested}</div>
//                 <div>Date Completed: {state.dateCompleted}</div>
//                 <div>Visitor Email: {state.visitorEmail}</div>
//             </Typography>
//         </Container>
//     );
// }