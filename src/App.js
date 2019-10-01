import React from 'react';
import './App.css';
import TaskTable from './ToDoList.js';

function App() {
  return (
  React.createElement('div', {className: 'App'},
    React.createElement(TaskTable)
    )
  )
}

export default App;
