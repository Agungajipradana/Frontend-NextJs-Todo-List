import { getCookie } from "cookies-next";
import * as ActionType from "../constant/UserConstant";

const getFromCookies = (key) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  const cookieValue = getCookie(key);
  return typeof cookieValue === "string" ? cookieValue : "";
};

// Use Session Storage
// const getFromStorage = (key) => {
//   if (!key || typeof window === "undefined") {
//     return "";
//   }
//   return sessionStorage.getItem(key);
// };

const profileCookieValue = getFromCookies("profile");
// console.log("Profile Cookie Value:", profileCookieValue);

// Use cookie
const INIT_STATE = {
  userProfile: profileCookieValue ? profileCookieValue : null,
  // userSignup: null,
};

// Use Session Storage
// const INIT_STATE = {
//   userProfile: getFromStorage("profile") ? sessionStorage.getItem("profile") : null,
//   userSignup: {},
//   message: "",
// };

const UserReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.SIGNIN_REQUEST:
      return state;
    case ActionType.SIGNIN_SUCCESS:
      return UserSignin(state, action);
    case ActionType.SIGNUP_REQUEST:
      return state;
    case ActionType.SIGNUP_SUCCESS:
      return UserSignup(state, action);
    case ActionType.SIGNOUT_REQUEST:
      return state;
    case ActionType.SIGNOUT_SUCCESS:
      return UserSignout(state, action);
    default:
      return state;
  }
};

const UserSignin = (state, action) => {
  if (action.payload) {
    return {
      ...state,
      userProfile: action.payload,
    };
  } else {
    return {
      ...state,
      message: "Signin success, but profile data is missing.",
    };
  }
};

const UserSignup = (state, action) => {
  return {
    ...state,
    UserSignup: action.payload,
  };
};

const UserSignout = (state, action) => {
  return {
    ...state,
    userProfile: null,
  };
};

export default UserReducer;
