import React, { useState } from "react";

 
const TodoForm = (props) => {
  const [value, setValue] = useState("");
  const [isError, setIsError] = useState(false);

  const onChangeHandler = (event) => {
    // if (!event.target.value) {
    //   setIsError(true);
    // }

    setValue(event.target.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (value.trim().length === 0) {
      setIsError(true)
      return;
    }
    props.onAdd(value)

    setValue("")
    setIsError(false)
  }

  return (
    <React.Fragment>

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
      {isError && <div className="display-error"> <p>Empty Field! Enter a valid task</p></div>}
    </form>
    </React.Fragment>
  );
};

export default TodoForm;
