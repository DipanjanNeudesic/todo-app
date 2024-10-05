import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useStore from '@/stores/store';
import ToDoItem from '../ToDoItem/todo_item';



function ToDoList() {

  const todoItems: string[] = useStore("toDoItems");
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
            <TableCell>ToDo Items</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {todoItems.map((row, index) => (
            <ToDoItem key ={index} item={row} position={index}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ToDoList