import axios from "axios";
import { getCookie } from "cookies-next";

const token = getCookie("token");

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Authorization: token,
    "Content-Type": "application/json",
  },
});
