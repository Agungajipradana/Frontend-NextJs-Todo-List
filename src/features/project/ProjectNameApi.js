import { axiosInstance } from "@/lib/axios";
import axios from "axios";
import { getCookie } from "cookies-next";

const Create = async (data) => {
  try {
    const result = await axiosInstance.post("/api/project", data);
    return result;
  } catch (error) {
    return error;
  }
};

const FindOne = async (id) => {
  try {
    const result = await axiosInstance.get(`/api/project/${id}`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const Update = async (id, payload) => {
  try {
    const result = await axiosInstance.put(`/api/project/${id}`, payload);
    return result;
  } catch (error) {
    return error;
  }
};

const Deleted = async (id) => {
  try {
    const result = await axiosInstance.delete(`/api/project/${id}`);
    return result;
  } catch (error) {
    return error;
  }
};

// const List = async (payload) => {
//   try {
//     const result = await axiosInstance.get(`/api/project`, payload);
//     console.log(result);
//     return result;
//   } catch (error) {
//     return await error;
//   }
// };

const List = async () => {
  // axiosInstance.defaults.headers.common = { Authorization: getCookie("token") };
  try {
    const result = await axiosInstance.get("/api/project");
    // console.log(result.data);
    return result.data;
  } catch (error) {
    return error;
  }
};

// export const GetAllData = async () => {
//   try {
//     const response = await axios.get("http://localhost:3002/api/project");
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     return error;
//   }
// };

const Search = async () => {
  try {
    const result = await axiosInstance.get("/api/project");
    return result;
  } catch (error) {
    return error;
  }
};

const ProjectNameApi = {
  Create,
  FindOne,
  Update,
  Deleted,
  List,
  Search,
};

export default ProjectNameApi;
