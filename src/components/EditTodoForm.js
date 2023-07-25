import React, { useState } from "react";
 
const EditTodoForm = (props) => {
  const [value, setValue] = useState(props.task);

  const onChangeHandler = (event) => {
    setValue(event.target.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    props.onEdit(value, props.id)

    setValue("")
  }

  return (
    <form className="TodoForm" onSubmit={onSubmitHandler} >
      <input
        type="text"
        className="todo-input"
        placeholder="Update Task"
        value={value}
        onChange={onChangeHandler}
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};

export default EditTodoForm;
