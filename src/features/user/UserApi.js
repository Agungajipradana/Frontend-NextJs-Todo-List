import { axiosInstance } from "@/lib/axios";
import { getCookie } from "cookies-next";
import axios from "axios";

const signup = async (data) => {
  try {
    const result = await axiosInstance.post("/api/users", data);
    return result;
  } catch (error) {
    return error;
  }
};

const signin = async (data) => {
  try {
    const result = await axiosInstance.post("/api/users/login", data);
    return result;
  } catch (error) {
    return error;
  }
};

// Use Cookie
const profile = async () => {
  axiosInstance.defaults.headers.common = { Authorization: getCookie("token") };
  try {
    const result = await axiosInstance.get("/api/users/current");
    return result;
  } catch (error) {
    return error;
  }
};

// Use Session Storage
// const profile = async () => {
//   axiosInstance.defaults.headers.common = { Authorization: `${sessionStorage.getItem("token")}` };
//   try {
//     const result = await axiosInstance.get("/api/users/current");
//     console.log(result.data);
//     return result;
//   } catch (error) {
//     return error;
//   }
// };

const UserApi = {
  signup,
  signin,
  profile,
};

export default UserApi;
