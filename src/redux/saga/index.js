import { takeEvery, all } from "redux-saga/effects";
import * as ActionUser from "../constant/UserConstant";
import * as ActionTypeProject from "../constant/ProjectConstant";
import { handleSignin, handleSignout, handleSignup } from "./UserSaga";
import { handleAddProject, handleDelProject, handleEditProject, handleFindProject, handleListProject } from "./ProjectSaga";

function* watchAll() {
  yield all([
    // user
    takeEvery(ActionUser.SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionUser.SIGNUP_REQUEST, handleSignup),
    takeEvery(ActionUser.SIGNOUT_REQUEST, handleSignout),

    //project
    takeEvery(ActionTypeProject.LIST_PROJECT_REQUEST, handleListProject),
    takeEvery(ActionTypeProject.ADD_PROJECT_REQUEST, handleAddProject),
    takeEvery(ActionTypeProject.FIND_PROJECT_REQUEST, handleFindProject),
    takeEvery(ActionTypeProject.EDIT_PROJECT_REQUEST, handleEditProject),
    takeEvery(ActionTypeProject.DEL_PROJECT_REQUEST, handleDelProject),
  ]);
}

export default watchAll;
