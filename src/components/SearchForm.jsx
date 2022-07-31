import React , {useState} from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SearchForm = ({setSearchInputText}) => {

  const[value,setValue] = useState("");

  const inputFieldHandler = (event) => {
    setValue(event.target.value);
  }

  const onClickHandler = (event) => {
    event.preventDefault();
    setSearchInputText(value.replace(' ','+'));
    setValue("");
  }

  return (
    <Grid container spacing = {1} direction = "column" justifyContent="center" alignItems="center">
      <Grid item xs = {6}>
        <TextField id = "seach-input" label = "Enter a song or artist name" variant='filled' value = {value} size = "medium" onChange={inputFieldHandler} />
      </Grid>
      <Grid item xs = {6}>
        <Button variant = "contained" size = "large" onClick={onClickHandler}>Search</Button>
      </Grid>
    </Grid>
  );
}

export default SearchForm;