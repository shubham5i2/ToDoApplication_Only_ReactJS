import React from "react";
import { useState } from "react";
import TodoList from "./TodoList";

const Todo = () => {
  const [item, newItem] = useState();
  const [items, setItems] = useState([]);

  const itemAddEvent = (event) => {
    newItem(event.target.value);
  };

  const listOfItems = (e) => {
    setItems((oldItems) => {
      return [...oldItems, item];
    });
    newItem(" ");
  };

  const deleteTodoItem = (id) => {
    console.log("deleted id:" + id);
    setItems((oldItems) => {
      return oldItems.filter((arr, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>Todo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add Items"
            onChange={itemAddEvent}
            value={item}
          />
          <button onClick={listOfItems}> + </button>
          <ol>
            {items.map((value, index) => {
              return (
                <TodoList
                  text={value}
                  key={index}
                  id={index}
                  onSelect={deleteTodoItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Todo;
