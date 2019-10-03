import React from 'react';

const AddTaskForm = (props) => {
    const [desc, setDesc] = React.useState('')

    const descHandler = (e) => {
        const currentValue = e.target.value
        setDesc(currentValue)
    }

    const handleSubmit = () => {
        props.handleSubmit(desc)
    }

    return (
        <div>
            <span>
                <label htmlFor="desc">Task: </label>
                <input onChange={descHandler} value={desc} type="text" name="desc" />
            </span>
            <button onClick={handleSubmit}>Add</button>
        </div>
    );
};

export default AddTaskForm;