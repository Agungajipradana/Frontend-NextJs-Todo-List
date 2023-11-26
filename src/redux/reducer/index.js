import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import ProjectReducer from "./ProjectReducer";
import TaskReducer from "./TaskReducer";

const rootReducer = combineReducers({
  userState: UserReducer,
  projectState: ProjectReducer,
  taskState: TaskReducer,
});

export default rootReducer;
