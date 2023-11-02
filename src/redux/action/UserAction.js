import * as ActionUser from "../constant/UserConstant";

export const UserSignupRequest = (payload) => ({
  type: ActionUser.SIGNUP_REQUEST,
  payload,
});

export const UserSignupSuccess = (payload) => ({
  type: ActionUser.SIGNUP_SUCCESS,
  payload,
});

export const UserSignupFailed = (payload) => ({
  type: ActionUser.SIGNUP_FAILED,
  payload,
});

export const UserSigninRequest = (payload) => ({
  type: ActionUser.SIGNIN_REQUEST,
  payload,
});

export const UserSigninSuccess = (payload) => ({
  type: ActionUser.SIGNIN_SUCCESS,
  payload,
});

export const UserSigninFailed = (payload) => ({
  type: ActionUser.SIGNIN_FAILED,
  payload,
});

export const UserSignoutRequest = (payload) => ({
  type: ActionUser.SIGNOUT_REQUEST,
  payload,
});

export const UserSignoutSuccess = (payload) => ({
  type: ActionUser.SIGNOUT_SUCCESS,
  payload,
});

export const UserSignoutFailed = (payload) => ({
  type: ActionUser.SIGNOUT_FAILED,
  payload,
});
