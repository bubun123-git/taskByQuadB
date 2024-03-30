import "./App.css";
import React from "react";
import Taskinput from "./Taskinput";
import pic from "../src/task.jpg";
import store from "./Store/Store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <div className="header">
          <strong>QuadB Tech Task</strong>
        </div>
        <img src={pic} alt="Task" className="task-image" />
        <Taskinput />
      </div>
    </Provider>
  );
}

export default App;
