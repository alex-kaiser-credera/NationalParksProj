import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { InputLabel, FormHelperText } from '@material-ui/core';
import { Select, FormControl, MenuItem, Input} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import { blue } from '@material-ui/core/colors';

import axios from 'axios';

import LogIn from "../SignIn";
import SimpleDialogDemo from "./StatusDialog"



// const emails = ['username@gmail.com', 'user02@gmail.com'];

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
    backgroundColor: blue[100],
    color: blue[600],
  },
}));
const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  function handleClose() {
    onClose(selectedValue);
  }

  function handleListItemClick(value) {
    console.log(value)

    onClose();
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
      <List>
        {emails.map(email => (
          <ListItem button onClick={() => handleListItemClick(email)} key={email}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))}

        <ListItem button onClick={() => handleListItemClick('addAccount')}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="add account" />
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

function CustomizedTables() {
  const classes = useStyles();
  // const [{ parkLocation }] = LogIn().park;

  const parkLocation = 43;
  const [result, setResult] = React.useState([]);
  const [request, setRequest] = React.useState([]);
  const [dropdown, setDropdown] = React.useState('');
  const [textField, setTextField] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);
  // const [status, setStatus] = React.useState('');
  // const [open, setOpen] = React.useState(false);
  // const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleConfChange = (event) => {
    setTextField(event.target.value);
  }
  const handleFilterChange = (event) => {
    setDropdown(event.target.value);
  }

  // function handleClickOpen() {
  //   setOpen(true);
  // }

  // const handleClose = value => {
  //   setOpen(false);
  //   setSelectedValue(value);
  // };

  const selectRequest = (event) => {
    setRequest(event.target.value);
  }

  useEffect(() => {
    async function fetchAll() {
      const result = await axios(`http://localhost:8080/status/view/${parkLocation}?status=All`);
      setResult(result.data);
    }
    fetchAll();
  },[]);

  function handleClickOpen(e) {
    console.log(e)
    setOpen(true);
  }

  const handleClose = value => {
    setOpen(false);
    setSelectedValue(value);
  };

  // Filter by status
  let filteredData = result;
  if (dropdown === 2) {
    // Filter down to in progress status items only
    filteredData = result.filter(item => item.status === `In Progress`);
  } else if (dropdown === 3) {
    // Filter down to completed status items only
    filteredData = result.filter(item => item.status === `Completed`);
  }
  
  // Filter by confirmation number
  if (textField !== ``) {
    filteredData = result.filter(item => item.id === parseInt(textField));
  }

  return (
    <div>
    {/* <FilterList> 
    </FilterList> */}
      <div>
        <FormControl>
          <InputLabel htmlfor='filter'>Filter</InputLabel>
          <Select 
            value= {dropdown}
            onChange= {handleFilterChange}
            inputProps={{
                name: 'filter',
                id: 'filter',
            }}>
              <MenuItem value={1}>All</MenuItem>
              <MenuItem value={2}>In progress</MenuItem>
              <MenuItem value={3}>Completed</MenuItem>
          </Select>
          <FormHelperText>Please select a filter</FormHelperText>
        </FormControl>
      </div>

    {/* <Confirmation>
    </Confirmation> */}
      <div>
        <FormControl>
          <InputLabel htmlfor='confirmation'>Confirmation Number</InputLabel>
          <Input 
            id='description'
            value= {textField}
            onChange= {handleConfChange}
          />
          <FormHelperText>Please input Confirmation Number</FormHelperText>
        </FormControl>
      </div>

      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">Confirmation Number</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right">Date Created</StyledTableCell>
              <StyledTableCell align="right">Date Completed</StyledTableCell>
              <StyledTableCell align="right">Park</StyledTableCell>
              <StyledTableCell align="right">Request Type</StyledTableCell>
              <StyledTableCell align="right">Description</StyledTableCell>
              <StyledTableCell align="right">Visitor Email</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody 
            className={classes.labels}
            value={request}
            onClick={selectRequest}
            inputProps={{
              id: 'request.id',
              status: 'request.status',
              dateCreated: 'request.datecreated',
              dateCompleted: 'request.datecompleted',
              parkLocation: 'request.parklocation',
              requestType: 'request.requesttype',
              problemDescription: 'request.problemdescription',
              email: 'request.email',
            }}
          >
          {filteredData.map((e) => (
            <StyledTableRow key={e.id}>
              <StyledTableCell align="right">{e.id}</StyledTableCell>
              <div>
                {/* <Typography variant="subtitle1">Selected: {selectedValue}</Typography> */}
                <br />
                <Button variant="outlined" color="primary" onClick={(e) => handleClickOpen(e)}>
                  {e.status}
                </Button>
                <SimpleDialog selectedValue={(s) => console.log(s.target)} open={open} onClose={handleClose} />
              </div>
              {/* <StyledTableCell align="right">{e.status} */}
              {/* <SimpleDialogDemo align="center" /> */}
              {/* </StyledTableCell> */}
              <StyledTableCell align="right">{e.dateCreated}</StyledTableCell>
              <StyledTableCell align="right">{e.dateCompleted}</StyledTableCell>
              <StyledTableCell align="right">{e.parkLocation.name}</StyledTableCell>
              <StyledTableCell align="right">{e.requestType}</StyledTableCell>
              <StyledTableCell align="right">{e.problemDescription}</StyledTableCell>
              <StyledTableCell align="right">{e.email}</StyledTableCell>
            </StyledTableRow>
          ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

export default CustomizedTables