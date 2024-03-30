import { createStore } from "redux";
import { taskReducer } from "./Taskreducer";

const store = createStore(taskReducer);

export default store;
