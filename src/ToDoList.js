import React from 'react';
import AddTaskForm from './AddTaskForm';
import './ToDoList.css';
import $ from 'jquery';

const defaultTasks = [
  {
    userId: 1,
    id: 1,
    title: 'test',
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: 'testing',
    completed: true,
  },
]

const TaskTable = (props) => {
  let [tasks, setTasks] = React.useState(defaultTasks)

  React.useEffect(() => {
    $.ajax(`https://jsonplaceholder.typicode.com/todos/`).then((result) => {
      console.log(result);
      setTasks(result.data)
    })
  })

  const HeaderRow = (props) => {
    return <h2 className="Header">To Do List</h2>
  }

  var rows = tasks.map(tasks => <TaskTable task={tasks}/>)

  for (let i=0; i<tasks.length; i++) {
    rows.push(<TaskTable tasks={tasks[i]}/>)
  }

  const handleSubmit = (userId, id, title, completed) => {
    const newTask = {
      userId: userId,
      id: id,
      title: title,
      completed: completed
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

