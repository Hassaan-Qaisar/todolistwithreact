import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = (props) => {
    const onClickParaHandler = () => {
        props.onToggleComplete(props.id);
        
    }

    const onDeleteHandler = () => {
        props.onDeleteTodo(props.id);
    }

    const onEditHandler = () => {
        props.onEditTodo(props.id);
    }

  return (
    <div className="Todo">
      <p
        className={`${props.completed ? 'completed' : ''}`}
        onClick={onClickParaHandler}
        
      >
        {props.task}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={onEditHandler}
          
        />
        <FontAwesomeIcon icon={faTrash} onClick={onDeleteHandler} />
      </div>
    </div>
  );
};

export default Todo;
