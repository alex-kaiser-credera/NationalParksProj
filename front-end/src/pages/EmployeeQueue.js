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
import Collapse from '@material-ui/core/Collapse';
import axios from 'axios';
import LogIn from "../SignIn";
import Avatar from '@material-ui/core/Avatar';

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

}));

function CustomizedTables(props) {
  const classes = useStyles();
  // const [{ parkLocation }] = LogIn().park;
  const parkId = props.parkId
  const parkLocation = 43;
  const [result, setResult] = React.useState([]);
  const [request, setRequest] = React.useState([]);
  const [dropdown, setDropdown] = React.useState('');
  const [textField, setTextField] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const [value, setValue] = React.useState();
  const [idSelect, setIdSelect] = React.useState('');
  const [count, setCount] = React.useState(0);
  const [filter, setFilter] = React.useState('All')

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleHover() {
    setChecked(prev => !prev);
  }

  const handleClickOpen = (id) => {
    console.log(id);
    setIdSelect(id);
    setOpen(true);

  }

  function handleClose() {
    setOpen(false);
    setValue('');
  }

  const handleConfChange = (event) => {
    setTextField(event.target.value);
  }
  const handleFilterChange = (event) => {
    setDropdown(event.target.value);
  }

  const handleStatusSubmit = (event) => {
    changeStatus();
    handleClose();
    setCount(count + 1);
  }

  async function changeStatus() {
    axios({
      method: 'put',
      url: `http://localhost:8080/status/${idSelect}?status=${value}`,
    })
  }

  useEffect(() => {
    async function fetchAll() {
      const result = await axios(`http://localhost:8080/status/view/25?status=All`);

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

  console.log()

  return (
    <div>
      {/* <FilterList> 
    </FilterList> */}
      <Avatar className={classes.avatar} />
      <div>
        <FormControl>
          <InputLabel htmlfor='filter'>Filter</InputLabel>
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
            // onClick={selectRequest}
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
              <StyledTableRow key={e.id} onClick={() => handleClickOpen(e.id)} value={e.id}>
                <StyledTableCell align="right">{e.id}</StyledTableCell>
                <StyledTableCell align="right">{e.status}</StyledTableCell>
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
            id="name"
            label="Write to the request maker!"
            type="email"
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