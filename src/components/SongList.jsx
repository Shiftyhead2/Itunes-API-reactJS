import React from 'react';
import { Grid } from '@mui/material';
import Song from './Song';

const SongList = ({data}) => {
   
    return(
     <Grid container spacing = {2} direction="row" justifyContent="center" alignItems="center">
        {data.map((song) => (
            <Grid item key = {song.trackId}>
                <Song song = {song} />
            </Grid>
        ))}
     </Grid>
    );
}

export default SongList;