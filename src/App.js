import "./App.css";
import React from "react";
import Taskinput from "./Taskinput";
import pic from "../src/task.jpg";

function App() {
  return (
    <div className="container">
      <div className="header">
        <strong>QuadB Tech Task</strong>
      </div>
      <img src={pic} alt="Task" className="task-image" />
      <Taskinput />
    </div>
  );
}

export default App;
