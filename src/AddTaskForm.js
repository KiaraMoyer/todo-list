import React from 'react';

const AddTaskForm = (props) => {
    const [userId, setUserId] = React.useState('')
    const [title, setTitle] = React.useState('')
    // const [id, setId] = React.useState('')
    const [completed, setCompleted] = React.useState('')

    const userIdHandler = (e) => {
        const currentValue = e.target.value
        setUserId(currentValue)
    }
    const titleHandler = (e) => {
        const currentValue = e.target.value
        setTitle(currentValue)
    }
    const completedHandler = (e) => {
        const currentValue = e.target.value
        setCompleted(currentValue)
    }

    const onSubmit = () => {
        props.handleSubmit(userId, title, completed)
    }

    const clearInput = () => {
        setTitle('')
        setUserId('')
        setCompleted('')
    }

    return (
        <div>
            <span>
                <label htmlFor="userId">User Id: </label>
                <input id="textform" onChange={userIdHandler} value={userId} type="text" name="userId" />
                {/* <label htmlFor="id">Id: </label>
                <input id="textform"  value={} type="text" name="id" readOnly /> */}
                <label htmlFor="title">Task: </label>
                <input id="textform" onChange={titleHandler} value={title} type="text" name="title" />
                <label htmlFor="completed">Completed: </label>
                <input id="textform" onChange={completedHandler} value={completed} type="text" name="completed" />
            </span>
            <button onClick={() => { onSubmit(); clearInput(); }}>Add</button>
        </div>
    );
};

export default AddTaskForm;