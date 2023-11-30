const { axiosInstance } = require("@/lib/axios");

const Create = async (data) => {
  try {
    const result = await axiosInstance.post(`/api/project/${data.id}/task`, data);
    return result;
  } catch (error) {
    return error;
  }
};

const FindOne = async (data, id) => {
  try {
    const result = await axiosInstance.get(`/api/project/${data.id}/task/${id}`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const Update = async (payload, id) => {
  try {
    const result = await axiosInstance.put(`/api/project/${payload.id}/task/${id}`, payload);
    return result;
  } catch (error) {
    return error;
  }
};

const Deleted = async (id) => {
  try {
    const result = await axiosInstance.delete(`/api/project/${id}/task/${id}`);
    return result;
  } catch (error) {
    return error;
  }
};

const List = async (data) => {
  try {
    const result = await axiosInstance.get(`/api/project/${data.id}/task`);
    console.log(result.data);
    return result.data;
  } catch (error) {
    return error;
  }
};

const Search = async () => {
  try {
    const result = await axiosInstance.get("/api/task");
    return result;
  } catch (error) {
    return error;
  }
};

const TaskApi = {
  Create,
  FindOne,
  Update,
  Deleted,
  List,
  Search,
};

export default TaskApi;
