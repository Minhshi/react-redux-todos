import { combineReducers } from "redux";
import todosReducer from "./todosReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  todos: todosReducer,
  users: usersReducer
});
