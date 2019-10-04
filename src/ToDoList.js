import React from 'react';
import AddTaskForm from './AddTaskForm';
import './ToDoList.css';
// import $ from 'jquery';

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

  // React.useEffect(() => {
  //   $.ajax('https://jsonplaceholder.typicode.com/todos/1').then((result) => {
  //     console.log(result);
  //     setTasks(result.data)
  //   })
  // })

  fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then((result) => {
      setTasks(result);
    });

  const HeaderRow = (props) => {
    return <th className="Header">To Do List</th>
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
      <thead>
        <tr>
          <HeaderRow tasks={tasks}/>
        </tr>
      </thead>
      {tasks.map(t => <TaskTableRow tasks={t} key={t.id}/>)}
    </table>
    <AddTaskForm handleSubmit={handleSubmit}/>
    </>
}

const TaskTableRow = (props) => {
  const task = props.tasks;
  return (
    <tbody>
      <tr>
        <td className="userId">User ID: {task.userId}</td>
        <td className="Id">ID: {task.id}</td>
        <td className="Tasks">Task: {task.title}</td>
        <td className="Completed">Completed: {task.completed.toString()}</td>
      </tr>
    </tbody>
  );
}

export default TaskTable

