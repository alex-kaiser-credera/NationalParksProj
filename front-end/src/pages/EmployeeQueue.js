import React from 'react';
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
import axios from "axios";

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
                    <MenuItem value={4}>Date low-high</MenuItem>
                    <MenuItem value={5}>Date high-low</MenuItem>
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

    async function getPark(id) {
      await axios.get(`http://localhost:8080/status/filter?filter=All`)
        .then(response => {
          setResult(response.data)
            return (result)
            })
        } getPark();
  
  console.log(result);

  return (
    <div>
    <FilterList> 
    </FilterList>

    <Confirmation>
    </Confirmation>


    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Confirmation id</StyledTableCell>
            <StyledTableCell align="right">status</StyledTableCell>
            <StyledTableCell align="right">employee</StyledTableCell>
            <StyledTableCell align="right">description</StyledTableCell>
            <StyledTableCell align="right">date requested</StyledTableCell>
            <StyledTableCell align="right">date completed</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="right">{row.id}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
              <StyledTableCell align="right">{row.employee}</StyledTableCell>
              <StyledTableCell align="right">{row.description}</StyledTableCell>
              <StyledTableCell align="right">{row.daterequested}</StyledTableCell>
              <StyledTableCell align="right">{row.datecompleted}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>

    </div>
  );
}

export default CustomizedTables
