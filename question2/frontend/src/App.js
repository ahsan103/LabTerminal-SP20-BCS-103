import './App.css';
import { Box } from '@mui/material'
import { useEffect, useState } from 'react';
import axios from 'axios'
import MyCard from './Components/MyCard';
function App() {
  const [todo , setTodo] = useState([])
  useEffect(()=>{
    axios
      .get("http://localhost:4000/api/todo")
      .then(res => setTodo(res.data.todo))
      .catch(err => console.error(err));
  },[])

  return (
    <Box>
    {todo.map((data , key)=><MyCard data={data}  key={key}/>)}
    </Box>
  );
}

export default App;
