import { takeEvery, all } from "redux-saga/effects";
import * as ActionUser from "../constant/UserConstant";
import * as ActionTypeProject from "../constant/ProjectConstant";
import * as ActionTypeTask from "../constant/TaskConstant";
import { handleSignin, handleSignout, handleSignup } from "./UserSaga";
import { handleAddProject, handleDelProject, handleEditProject, handleFindProject, handleListProject } from "./ProjectSaga";
import { handleAddTask, handleDelTask, handleEditTask, handleFindTask, handleListTask } from "./TaskSaga";

function* watchAll() {
  yield all([
    // user
    takeEvery(ActionUser.SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionUser.SIGNUP_REQUEST, handleSignup),
    takeEvery(ActionUser.SIGNOUT_REQUEST, handleSignout),

    // project
    takeEvery(ActionTypeProject.LIST_PROJECT_REQUEST, handleListProject),
    takeEvery(ActionTypeProject.ADD_PROJECT_REQUEST, handleAddProject),
    takeEvery(ActionTypeProject.FIND_PROJECT_REQUEST, handleFindProject),
    takeEvery(ActionTypeProject.EDIT_PROJECT_REQUEST, handleEditProject),
    takeEvery(ActionTypeProject.DEL_PROJECT_REQUEST, handleDelProject),

    // task
    takeEvery(ActionTypeTask.LIST_TASK_REQUEST, handleListTask),
    takeEvery(ActionTypeTask.ADD_TASK_REQUEST, handleAddTask),
    takeEvery(ActionTypeTask.FIND_TASK_REQUEST, handleFindTask),
    takeEvery(ActionTypeTask.EDIT_TASK_REQUEST, handleEditTask),
    takeEvery(ActionTypeTask.DEL_TASK_REQUEST, handleDelTask),
  ]);
}

export default watchAll;
