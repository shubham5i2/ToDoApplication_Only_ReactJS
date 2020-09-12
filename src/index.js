import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Todo from "./components/Todo";

ReactDOM.render(
  <React.StrictMode>
    {/* <Greet name="Shubham">
      <p>This is a Greeting</p>
    </Greet>
    <Greet name="John">
      <button>Click to subscribe</button>
    </Greet>
    <Greet name="Alex" /> */}
    {/* <Counter /> */}
    {/* <Form name="Shubham">
      <p>Hello hope you are doing a great!!</p>
    </Form> */}
    <Todo />
  </React.StrictMode>,
  document.getElementById("root")
);
