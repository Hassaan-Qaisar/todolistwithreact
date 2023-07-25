import React, { useState } from "react";
 
const TodoForm = (props) => {
  const [value, setValue] = useState("");

  const onChangeHandler = (event) => {
    setValue(event.target.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    props.onAdd(value)

    setValue("")
  }

  return (
    <form className="TodoForm" onSubmit={onSubmitHandler} >
      <input
        type="text"
        className="todo-input"
        placeholder="Task time! What's on your list?"
        value={value}
        onChange={onChangeHandler}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
