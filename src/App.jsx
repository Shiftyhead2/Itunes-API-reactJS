import React, {useState, useEffect} from 'react';
import SearchForm from './components/SearchForm';
import SongList from './components/SongList';
import './App.css';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';

function App() {

  const [searchInputText,setSearchInputText] = useState("");
  const [data,setData] = useState([]);

  useEffect(() => {
    fetch(`https://itunes.apple.com/search?term=${searchInputText}&limit=5&entity=musicTrack` , {
      method: "GET",
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    })
    .then((res) => res.json())
    .then((data) => {
      if(searchInputText === ""){
        throw Error("Search input field cannot be empty");
      }
      setData(data.results);
    })
    .catch((err) => console.err(err));
  },[searchInputText]);

  return (
    <Grid container spacing = {2} direction = "column" justifyContent="center" alignItems="center">
      <Grid item xs = {6}>
        <Typography variant = "h3" component="h1">Itunes Search API</Typography>
      </Grid>
      <Grid item xs = {6}>
        <SearchForm setSearchInputText = {setSearchInputText}/>
      </Grid>
      <Grid item xs = {6}>
        <SongList data = {data}/>
      </Grid>
    </Grid>
  );
}

export default App;
