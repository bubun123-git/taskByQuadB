import React, { useState } from "react";
import Tasklist from "./Tasklist";
import "./TaskInput.css";
import { connect } from "react-redux";
import { addTask } from "./Store/TaskAction";

function Taskinput() {
  // State to hold the current task input
  const [task, setTask] = useState("");
  // State to store the list of tasks
  const [taskList, setTaskList] = useState([]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the current task to the task list
    setTaskList([...taskList, task]);

    setTask("");
  };

  // Function to handle task deletion
  const handleDelete = (index) => {
    const newTask = [...taskList];

    for (let i = 0; i < newTask.length; i++) {
      if (i === index) {
        newTask.splice(i, 1);

        break;
      }
    }
    // Update the task list state with the modified list
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
        {/* Rendering the Tasklist component with task list and delete function */}
        <Tasklist taskList={taskList} onDelete={handleDelete} />
      </span>
    </div>
  );
}

const mapState = (state) => {
  return {
    tasks: state.tasks
  };
};


export default connect(mapState, { addTask })(Taskinput);
