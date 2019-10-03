import React from 'react';
import AddTaskForm from './AddTaskForm';
import './ToDoList.css';

const defaultTasks = [
  {
    id: 1,
    desc: 'Mow the lawn',
  },
  {
    id: 2,
    desc: 'Feed the cow',
  },
  {
    id: 3,
    desc: 'Do the dishes',
  },
  {
    id: 0,
    desc: 'Do the things',
  }
]



const TaskTable = (props) => {
  let [tasks, setTasks] = React.useState(defaultTasks)

  const HeaderRow = (props) => {
    return <h2 className="Header">To Do List</h2>
  }

  var rows = tasks.sort(function (a, b) {
    return a.id - b.id
  })
  rows = tasks.map(tasks => <TaskTable task={tasks}/>)

  for (let i=0; i<tasks.length; i++) {
    rows.push(<TaskTable tasks={tasks[i]}/>)
  }

  const handleSubmit = (desc) => {
    const newTask = {
      id: tasks.length,
      desc: desc
    };
    const newTasks = [...tasks]
    newTasks.push(newTask)
    setTasks(newTasks)
  }
  return <>
    <table className='table'>
      <HeaderRow />
      {tasks.map(task => <TaskTableRow tasks={task}/>)}
    </table>
    <AddTaskForm handleSubmit={handleSubmit}/>
    </>
}

const TaskTableRow = (props) => {
  const task = props.tasks;
  return <tr>
    <td className="Id">ID: {task.id}</td>
    <td className="Tasks">Task: {task.desc}</td>
  </tr>
}

export default TaskTable

