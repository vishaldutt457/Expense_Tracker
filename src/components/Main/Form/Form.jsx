import React,{useState,useContext} from 'react';
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import useStyles from './styles';
import { ExpenseTrackerContext } from '../../../context/context';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  amount: '',
  category: '',
  type: 'Income',
  date: new Date(),
};

function Form() {
    const classes=useStyles()
    const [formData, setFormData] = useState(initialState);
    const {addTransaction}= useContext(ExpenseTrackerContext)


    const createTransaction=()=>{
      const transaction={...formData, amount:Number(formData.amount), id:uuidv4()}
      addTransaction(transaction);
      setFormData(initialState)
    }

  return (
    <Grid container spacing={2}>
    <Grid item xs={12}>
      <Typography align="center" variant="subtitle2" gutterBottom>
     
     
      </Typography>
    </Grid>
    <Grid item xs={6}>
      <FormControl fullWidth>
        <InputLabel>Type</InputLabel>
        <Select value={formData.type} onChange={(e)=>setFormData({...formData,type:e.target.value})}>
          <MenuItem value="Income">Income</MenuItem>
          <MenuItem value="Expense">Expense</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={6}>
      <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
          <MenuItem value="business">Business</MenuItem>
          <MenuItem value="salary">Salary</MenuItem>

        </Select>
      </FormControl>
      <Grid item xs={6}>
        <TextField type="number" label="Amount" value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} fullWidth />
      </Grid>
      <Grid item xs={6}>
        <TextField fullWidth label="Date" type="date"  onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
      </Grid>
      <Button className={classes.button} variant="outlined" color="primary" fullWidth onClick={createTransaction}>Create</Button>
    </Grid>

    
  </Grid>
);
  
}

export default Form;
