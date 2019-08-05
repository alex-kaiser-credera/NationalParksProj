import React, { useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { InputLabel, FormHelperText } from '@material-ui/core';
import { Select, FormControl, MenuItem, Input} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
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
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

//

function createData(id, status, employee, description, daterequested, datecompleted) {
  return { id, status, employee, description, daterequested, datecompleted};
}

const rows = [
  createData(8, "In progress", "John", "hello", "Jan 28", "Jan 29"),
  createData(4, "Completed", "Amanda", "hi", "Jan 28", "Feb 1"),
];

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
}));

const FilterList = () => {
    const [dropdown, setDropdown] = React.useState('');
    const classes = useStyles();
    const handleChange = (event) => {
        setDropdown(event.target.value);
    }
      
    return(
        
        <div>
            <FormControl>
                <InputLabel htmlfor='filter'>Filter</InputLabel>
                <Select 
                value= {dropdown}
                onChange= {handleChange}
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
    )
}

const Confirmation = () => {
    const [textField, setTextField] = React.useState('');

    const handleChange = (event) => {
        setTextField(event.target.value);
    }
    return(
        <div>
        <FormControl>
               <InputLabel htmlfor='confirmation'>Confirmation Number</InputLabel>
                 <Input 
                 id='description'
                value= {textField}
                onChange= {handleChange}
                 />
                <FormHelperText>Please input Confirmation Number</FormHelperText>
        </FormControl>
        </div>
    )
}

        

function CustomizedTables() {
  const classes = useStyles();
  const [result, setResult] = React.useState([]);
  const [request, setRequest] = React.useState([]);

  const temp = 43;
  // getRequests(temp);

  useEffect(() => {
    setRequest(r =>({...r, loading: true}));
  },[]);
  // async function getRequests(parkId) {
  //   await axios.get(`http://localhost:8080/status/view/${parkId}?status=In%20Progress`)
  //   //await axios.get(`http://localhost:8080/getPark/?id=${id}`)
  //     .then(response => {
  //       //setResult(response.data)
  //       setResult(response.data.map(ele => {
  //         return (ele.name)
  //       }))
  //     }
  //   );  
  // }

  const selectRequest = (event) => {
    setRequest(event.target.value);
}

  return (
    <div>
    <FilterList> 
    </FilterList>

    <Confirmation>
    </Confirmation>


    <Paper className={classes.root}>
      <Table className={classes.table}>
        <InputLabel className={classes.labels} htmlfor='park'>Park</InputLabel>

        <Select
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
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">Confirmation Number</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right">Date Created</StyledTableCell>
              <StyledTableCell align="right">Date Completed</StyledTableCell>
              <StyledTableCell align="right">Park</StyledTableCell>
              <StyledTableCell align="right">Description</StyledTableCell>
              <StyledTableCell align="right">Visitor Email</StyledTableCell>
            </TableRow>
          </TableHead>

          
          {/* //   {result.map((e) => {
          //     //console.log(park);
          //     return (<MenuItem value={e.id}>{e.name}</MenuItem>)
          //   })} */}

          {/* <TableBody 
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
            {result.map((e) => (
              <StyledTableRow key={e.id}>
                <StyledTableCell align="right">{e.id}</StyledTableCell>
                <StyledTableCell align="right">{e.status}</StyledTableCell>
                <StyledTableCell align="right">{e.dateCreated}</StyledTableCell>
                <StyledTableCell align="right">{e.dateCompleted}</StyledTableCell>
                <StyledTableCell align="right">{e.parkLocation}</StyledTableCell>
                <StyledTableCell align="right">{e.requestType}</StyledTableCell>
                <StyledTableCell align="right">{e.problemDescription}</StyledTableCell>
                <StyledTableCell align="right">{e.email}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody> */}
        </Select>
      </Table>
    </Paper>

    </div>
  );
}

export default CustomizedTables