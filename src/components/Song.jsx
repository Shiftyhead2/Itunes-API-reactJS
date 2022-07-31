import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const Song = ({song}) => {
  return (
    <Card variant = "outlined" sx = {{maxWidth: 250 , minHeight: 350}}>
      <CardHeader title = {song.artistName} />
        <CardMedia component= "img" alt = {song.trackName} height = "100"  image = {song.artworkUrl100} />
        <CardContent>
            <p>{song.trackName}</p>
        </CardContent>
        <CardActions>
          <Button size="small" onClick = {() => window.open(`${song.trackViewUrl}`,"_blank")}>Preview</Button>
        </CardActions>
      </Card>
  );
}

export default Song;