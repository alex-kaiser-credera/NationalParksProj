import React, { useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { InputLabel, FormHelperText } from '@material-ui/core';
import { Select, FormControl, MenuItem, Input } from '@material-ui/core';
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, FormLabel, Radio, RadioGroup, FormControlLabel } from '@material-ui/core';
import axios from 'axios';
import LogIn from "../SignIn";
import Avatar from '@material-ui/core/Avatar';
import Cookies from 'js-cookie';

const API_KEY = "http://ec2-3-83-136-233.compute-1.amazonaws.com/api/"

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  avatar: {
    height: 100,
    width: 100,
    backgroundImage: `url(https://ncptt.nps.gov/rt66/wp-content/uploads/2014/03/nps-logo-200x262-2.png)`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'inherit',
    float: "right",
    marginRight: 780,
    marginTop: 5
  },
// tableRow: onHover {
//   backgroundColor: }

}));

function CustomizedTables(props) {
  if( Cookies.get('cookie') == null ) { 
    alert("OH NOES U NO HAS COOKIE");
    window.location.replace(`${API_KEY}login`);
  }
  // const { cookies } = props;
  const classes = useStyles();
  // const [{ parkLocation }] = LogIn().park;
  const parkLocation = Cookies.get('parkIdCookie') || null;
  //const parkLocation = 43;
  const [result, setResult] = React.useState([]);
  const [request, setRequest] = React.useState([]);
  const [dropdown, setDropdown] = React.useState('');
  const [textField, setTextField] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const [value, setValue] = React.useState();
  const [idSelect, setIdSelect] = React.useState('');
  const [count, setCount] = React.useState(0);
  const [filter, setFilter] = React.useState('All');
  const [note, setNote] = React.useState('');
  const [emailNotes, setEmailNotes] = React.useState('');
  const [visitorEmail, setVisitorEmail] = React.useState('');

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleNotesChange(event) {
    setNote(event.target.value);
  }

  function handleEmailChange(event) {
    setEmailNotes(event.target.value);
  }

  function handleHover() {
    setChecked(prev => !prev);
  }

  const handleClickOpen = (id, email) => {
    console.log(id);
    setIdSelect(id);
    setVisitorEmail(email);
    setOpen(true);

  }

  function handleClose() {
    setOpen(false);
    setValue('');
    setEmailNotes('');
    setNote('');
    setVisitorEmail('');

  }

  const handleConfChange = (event) => {
    setTextField(event.target.value);
  }
  const handleFilterChange = (event) => {
    setDropdown(event.target.value);
  }

  var date = new Date().toLocaleDateString();

  const handleStatusSubmit = (event) => {

    if(value != ''){
      changeStatus();
    }
    if(note != ''){
      changeNotes();
    }
    if(emailNotes != ''){
      changeEmail()
    }

    setCount(count + 1);
    handleClose();
  }

  async function changeNotes() {
    axios({
      method: 'put',
      url: `${API_KEY}status/updateNotes/${idSelect}?status=${value}`,
      data: {
        noteUpdate: note
      },
    })
  }

  async function changeEmail() {
    axios({
      method: 'post',
      url: `${API_KEY}status/send`,
      data: {
        email: visitorEmail,
        body: emailNotes
      },
    })
  }

//   const handleDateSort = (key) => {
//     this.setState({
//         data: data.sort((a, b) => (
//             this.state.direction[key] === 'asc'
//             ? 
//              parseFloat(a[key]) - parseFloat(b[key])
//             : parseFloat(b[key]) - parseFloat(a[key])
//         )),

//         direction: {
//             [key]: this.state.direction[key] === 'asc'
//             ? 'desc'
//             : 'asc'
//         }
//     })
// }


  async function changeStatus() {
    axios({
      method: 'put',
      url: `${API_KEY}status/updateStatus/${idSelect}?status=${value}`,
    })
  }

  useEffect(() => {
    async function fetchAll() {
      
      const result = await axios(`${API_KEY}status/view/${parkLocation}?status=All`);
      
      console.log(result);
      // Mock response
      // const result = {
      //   data: [
      //     {
      //       id: `123`,
      //       status: `In Progress`,
      //       dateCreated: `b`,
      //       dateCompleted: `c`,
      //       parkLocation: {
      //         name: `d`,
      //       },
      //       requestType: `e`,
      //       problemDescription: `f`,
      //       email: `g`,
      //     },
      //     {
      //       id: `124`,           
      //       status: `Completed`,
      //       dateCreated: `ba`,
      //       dateCompleted: `ca`,
      //       parkLocation: {
      //         name: `da`,
      //       },
      //       requestType: `ea`,
      //       problemDescription: `fa`,
      //       email: `ga`,
      //     },
      //     {
      //       id: `125`,
      //       status: `In Progress`,
      //       dateCreated: `bb`,
      //       dateCompleted: `cb`,
      //       parkLocation: {
      //         name: `db`,
      //       },
      //       requestType: `eb`,
      //       problemDescription: `fb`,
      //       email: `gb`,
      //     },
      //   ]
      // }

      setResult(result.data);
    }
    fetchAll();
  }, [count, dropdown]);

  const selectRequest = (event) => {
    setRequest(event.target.value);
  }

  const [isSortedDesc, setIsSortedDesc]  = React.useState(false);

  const sortByDateCreated = (isSortedDesc) => {
    setIsSortedDesc(!isSortedDesc);
    setResult(result.slice(0).sort((a, b) => (isSortedDesc ? a.dateCreated < b.dateCreated: a.dateCreated > b.dateCreated) ? 1 : -1));
  }

  const sortByDateCompleted = (isSortedDesc) => {
    setIsSortedDesc(!isSortedDesc);
    setResult(result.slice(0).sort((a, b) => (isSortedDesc ? a.dateCompleted < b.dateCompleted: a.dateCompleted > b.dateCompleted) ? 1 : -1));
  }

  const sortById = (isSortedDesc) => {
    setIsSortedDesc(!isSortedDesc);
    setResult(result.slice(0).sort((a, b) => (isSortedDesc ? a.id < b.id: a.id > b.id) ? 1 : -1));
  }

  // Filter by status
  let filteredData = result;
  if (dropdown === 2) {
    // Filter down to in progress status items only
    filteredData = result.filter(item => item.status === `In Progress`);

  } else if (dropdown === 3) {
    // Filter down to completed status items only
    filteredData = result.filter(item => item.status === `Completed`);
  } else if (dropdown === 4) {
    // Filter down to not started status items only
    filteredData = result.filter(item => item.status === `Not Started`);
  }

  // Filter by confirmation number
  if (textField !== ``) {
    filteredData = result.filter(item => item.id === parseInt(textField));
  }

  console.log(props.parkLocation)

  return (
    <div>
      {/* <FilterList> 
    </FilterList> */}
      <Avatar className={classes.avatar} />
      <div>
        <FormControl>
          <InputLabel htmlFor='filter'>Filter</InputLabel>
          <Select
            value={dropdown}
            onChange={handleFilterChange}
            inputProps={{
              name: 'filter',
              id: 'filter',
            }}>
            <MenuItem value={1}>All</MenuItem>
            <MenuItem value={2}>In progress</MenuItem>
            <MenuItem value={3}>Completed</MenuItem>
            <MenuItem value={4}>Not Started</MenuItem>
          </Select>
          <FormHelperText>Please select a filter</FormHelperText>
        </FormControl>
      </div>
 
      {/* <Confirmation>
    </Confirmation> */}
      <div>
        <FormControl>
          <InputLabel htmlFor='confirmation'>Confirmation Number</InputLabel>
          <Input
            id='description'
            value={textField}
            onChange={handleConfChange}
          />
          <FormHelperText>Please input Confirmation Number</FormHelperText>
        </FormControl>
      </div>

      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <StyledTableCell isSortedDesc={false} align="right" onClick={() => sortById(isSortedDesc)}>Confirmation Number</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell isSortedDesc={false} align="right" onClick={() => sortByDateCreated(isSortedDesc)}>Date Created</StyledTableCell>
              <StyledTableCell isSortedDesc={false} align="right" onClick={() => sortByDateCompleted(isSortedDesc)}>Date Completed</StyledTableCell>
              <StyledTableCell align="right">Park</StyledTableCell>
              <StyledTableCell align="right">Request Type</StyledTableCell>
              <StyledTableCell align="right">Description</StyledTableCell>
              <StyledTableCell align="right">Notes</StyledTableCell>
              <StyledTableCell align="right">Visitor Email</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody
            className={classes.labels}
            value={request}
            // onClick={selectRequest}
            inputProps={{
              id: 'request.id',
              status: 'request.status',
              dateCreated: 'request.datecreated',
              dateCompleted: 'request.datecompleted',
              parkLocation: 'request.parklocation',
              requestType: 'request.requesttype',
              problemDescription: 'request.problemdescription',
              notes: 'request.notes',
              email: 'request.email',
            }}
          >
            {filteredData.map((e) => (
              <StyledTableRow hover key={e.id} onClick={() => handleClickOpen(e.id, e.email)} value={e.id}>
                <StyledTableCell align="right">{e.id}</StyledTableCell>
                <StyledTableCell align="right">{e.status}</StyledTableCell>
                <StyledTableCell align="right">{e.dateCreated}</StyledTableCell>
                <StyledTableCell align="right">{e.dateCompleted}</StyledTableCell>
                <StyledTableCell align="right">{e.parkLocation.name}</StyledTableCell>
                <StyledTableCell align="right">{e.requestType}</StyledTableCell>
                <StyledTableCell align="right">{e.problemDescription}</StyledTableCell>
                <StyledTableCell align="right">{e.notes}</StyledTableCell>
                <StyledTableCell align="right">{e.email}</StyledTableCell>
              </StyledTableRow>

            ))}
          </TableBody>
        </Table>
      </Paper>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Request Status</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Select the status of the visitor request
          </DialogContentText>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Status</FormLabel>
            <RadioGroup
              aria-label="status"
              name="status"
              className={classes.group}
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel value="Not Started" control={<Radio />} label="Not Started" />
              <FormControlLabel value="In Progress" control={<Radio />} label="In Progress" />
              <FormControlLabel value="Completed" control={<Radio />} label="Completed" />
            </RadioGroup>
          </FormControl>
          <TextField
            autoFocus
            margin="dense"
            id="notes"
            label="Add Notes To The Request!"
            fullWidth
            onChange={handleNotesChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Write to the request maker!"
            onChange={handleEmailChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="black">
            Cancel
          </Button>
          <Button onClick={handleStatusSubmit} color="black">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CustomizedTables