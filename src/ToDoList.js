import React from 'react';

const tasks = [
  {
    id: 1,
    desc: 'Mow the Lawn',
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
  var rows = tasks.sort(function(a,b) {
    return a.id - b.id
  })
  rows = tasks.map(tasks => <TaskTable task={tasks}/>)

  for (let i=0; i<tasks.length; i++) {
    rows.push(<TaskTable tasks={tasks[i]}/>)
  }

  return <table>
    {tasks.map(task => <TaskTableRow tasks={task}/>)}
  </table>
}

const TaskTableRow = (props) => {
  const task = props.tasks;
  return <tr>
    <td>{task.id}</td>
    <td>{task.desc}</td>
  </tr>
}

export default TaskTable

