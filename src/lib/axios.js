import axios from "axios";
import { getCookie } from "cookies-next";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    // Authorization: token,
    "Content-Type": "application/json",
  },
});

const token = getCookie("token");

if (token) {
  axiosInstance.defaults.headers.common["Authorization"] = token;
}
