import React from "react";
import "../index.css";

const TodoList = (props) => {
  return (
    <>
      <div className="todo_style">
        <li>
          <i
            className="fa fa-times"
            aria-hidden="true"
            onClick={() => {
              props.onSelect(props.id);
            }}
          />
          {props.text}
        </li>
      </div>
    </>
  );
};

export default TodoList;
