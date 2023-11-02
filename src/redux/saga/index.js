import { takeEvery, all } from "redux-saga/effects";
import * as ActionUser from "../constant/UserConstant";
import { handleSignin, handleSignout, handleSignup } from "./UserSaga";

function* watchAll() {
  yield all([takeEvery(ActionUser.SIGNIN_REQUEST, handleSignin), takeEvery(ActionUser.SIGNUP_REQUEST, handleSignup), takeEvery(ActionUser.SIGNOUT_REQUEST, handleSignout)]);
}

export default watchAll;
