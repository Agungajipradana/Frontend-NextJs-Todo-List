import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import ProjectReducer from "./ProjectReducer";

const rootReducer = combineReducers({
  userState: UserReducer,
  projectState: ProjectReducer,
});

export default rootReducer;
