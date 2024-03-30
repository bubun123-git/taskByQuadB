import React from "react";
import "./Tasklist.css";
import { connect } from "react-redux";
import { deleteTask } from "./Store/TaskAction";

function Tasklist({ taskList, onDelete }) {
  return (
    <div>
      <ul>
        {taskList.map((task, index) => (
          <li className="liStyle" key={index}>
            <strong style={{ color: "whitesmoke" }}>
              {task.toUpperCase()}
            </strong>
            <button onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default connect(null, { deleteTask })(Tasklist);
