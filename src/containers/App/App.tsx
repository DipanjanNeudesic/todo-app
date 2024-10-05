'use client';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import ToDoList from '@/components/ToDoList/todo_list';
import './App.css';


function App() {
  return (
     <div className='App__container'>
      <CssBaseline />
      <ToDoList />
      </div>
  );
}

export default App;
