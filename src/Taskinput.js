import React, { useState } from "react";
import Tasklist from "./Tasklist";
import "./TaskInput.css";

function Taskinput() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTaskList([...taskList, task]);
    setTask("");
  };

  const handleDelete = (index) => {
    const newTask = [...taskList];
    for (let i = 0; i < newTask.length; i++) {
      if (i === index) {
        newTask.splice(i, 1);
        break;
      }
    }
    setTaskList(newTask);
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          placeholder="Enter Task"
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="submit-btn" type="submit">
          Add Task
        </button>
      </form>
      <strong className="strong">Task List:</strong>
      <span>
        <Tasklist taskList={taskList} onDelete={handleDelete} />
      </span>
    </div>
  );
}

export default Taskinput;
