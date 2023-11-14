import { call, put } from "redux-saga/effects";
import UserApi from "@/features/user/UserApi";
import { UserSignupSuccess, UserSignupFailed, UserSigninSuccess, UserSigninFailed, UserSignoutSuccess, UserSignoutFailed, UserSignupRequest } from "../action/UserAction";
import { deleteCookie, setCookie } from "cookies-next";

function* handleSignup(action) {
  const { payload } = action;
  try {
    const result = yield call(UserApi.signup, payload);
    yield put(UserSignupSuccess(result.data));
  } catch (error) {
    yield put(UserSignupFailed(error));
  }
}

// Use cookie
function* handleSignin(action) {
  const { payload } = action;
  try {
    const result = yield call(UserApi.signin, payload);
    console.log("Signin Result:", result);
    if (Object.keys(result.data).length === 0) {
      yield put(UserSigninFailed({ message: "email or password not match, try again" }));
    } else {
      setCookie("token", result.data.data.token);
      const profile = yield call(UserApi.profile);
      setCookie("profile", JSON.stringify(profile.data));
      yield put(UserSigninSuccess(profile.data));
      console.log("Signin Success Payload:", profile.data);
    }
  } catch (error) {
    yield put(UserSigninFailed(error));
  }
}

// Use Session Storage
// function* handleSignin(action) {
//   const { payload } = action;
//   try {
//     const result = yield call(UserApi.signin, payload);
//     console.log("Signin Response:", result);
//     if (Object.keys(result.data).length === 0) {
//       yield put(UserSigninFailed({ message: "user or password not match, try again" }));
//     } else {
//       sessionStorage.setItem("token", result.data.data.token);
//       const profile = yield call(UserApi.profile);
//       sessionStorage.setItem("profile", JSON.stringify(profile.data));
//       yield put(UserSigninSuccess(profile.data));
//     }
//   } catch (error) {
//     yield put(UserSigninFailed(error));
//   }
// }

function* handleSignout() {
  try {
    deleteCookie("token");
    deleteCookie("profile");
    yield put(UserSignoutSuccess({ message: "User Success Signout" }));
  } catch (error) {
    yield put(UserSignoutFailed(error));
  }
}

// function* handleSignout() {
//   try {
//     sessionStorage.clear();
//     yield put(UserSignoutSuccess({ message: "User Success Signout" }));
//   } catch (error) {
//     yield put(UserSignoutFailed(error));
//   }
// }

export { handleSignup, handleSignin, handleSignout };
