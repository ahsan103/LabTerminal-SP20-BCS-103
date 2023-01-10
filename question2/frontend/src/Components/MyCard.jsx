import { Box, Button, Card, Typography } from '@mui/material'
import React from 'react'
import axios from 'axios';
function MyCard(props) {
  const deleteme = ()=>{
    axios
      .delete(`http://localhost:4000/api/todo/${props.data._id}`)
      .then(res => console.log('done'))
      .catch(err => console.error(err));
  }
  return (
    <Card sx={{display:'flex' , justifyContent:'space-around' , margin:2 , padding:2}}>
        <Typography>{props.data.title}</Typography>
        <Box>
        <Button sx={{marginX:2}} variant='contained'>Update</Button>
        <Button color='error' variant='contained' onClick={deleteme}>Delete</Button>
        </Box>
    </Card>
  )
}

export default MyCard