import React from 'react';

const AddTaskForm = (props) => {
    const [desc, setDesc] = React.useState('')

    const descHandler = (e) => {
        const currentValue = e.target.value
        setDesc(currentValue)
    }

    const onSubmit = () => {
        props.handleSubmit(desc)
    }

    const clearInput = () => {
        setDesc('')
    }

    return (
        <div>
            <span>
                <label htmlFor="desc">Task: </label>
                <input id="textform" onChange={descHandler} value={desc} type="text" name="desc" />
            </span>
            <button onClick={() => { onSubmit(); clearInput(); }}>Add</button>
        </div>
    );
};

export default AddTaskForm;