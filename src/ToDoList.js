import React from 'react';
import AddTaskForm from './AddTaskForm';
import './ToDoList.css';
import $ from 'jquery';


const TaskTable = (props) => {
  let [tasks, setTasks] = React.useState(1)

  React.useEffect(() => {
    $.ajax(`https://jsonplaceholder.typicode.com/todos`).then((result) => {
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

