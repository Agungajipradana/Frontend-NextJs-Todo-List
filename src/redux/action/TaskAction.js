import * as ActionTask from "../constant/TaskConstant";

// List
export const ListTaskRequest = (payload) => ({
  type: ActionTask.LIST_TASK_REQUEST,
  payload,
});

export const ListTaskSuccess = (payload) => ({
  type: ActionTask.LIST_TASK_SUCCESS,
  payload,
});

export const ListTaskFailed = (payload) => ({
  type: ActionTask.LIST_TASK_FAILED,
  payload,
});

// Create
export const AddTaskRequest = (payload) => ({
  type: ActionTask.ADD_TASK_REQUEST,
  payload,
});

export const AddTaskSuccess = (payload) => ({
  type: ActionTask.ADD_TASK_SUCCESS,
  payload,
});

export const AddTaskFailed = (payload) => ({
  type: ActionTask.ADD_TASK_FAILED,
  payload,
});

// Find one
export const FindTaskRequest = (payload) => ({
  type: ActionTask.FIND_TASK_REQUEST,
  payload,
});

export const FindTaskSuccess = (payload) => ({
  type: ActionTask.FIND_TASK_SUCCESS,
  payload,
});

export const FindTaskFailed = (payload) => ({
  type: ActionTask.FIND_TASK_FAILED,
  payload,
});

// Edit
export const EditTaskRequest = (payload) => ({
  type: ActionTask.EDIT_TASK_REQUEST,
  payload,
});

export const EditTaskSuccess = (payload) => ({
  type: ActionTask.EDIT_TASK_SUCCESS,
  payload,
});

export const EditTaskFailed = (payload) => ({
  type: ActionTask.EDIT_TASK_FAILED,
  payload,
});

// Delete
export const DeleteTaskRequest = (payload) => ({
  type: ActionTask.DEL_TASK_REQUEST,
  payload,
});

export const DeleteTaskSuccess = (payload) => ({
  type: ActionTask.DEL_TASK_SUCCESS,
  payload,
});

export const DeleteTaskFailed = (payload) => ({
  type: ActionTask.DEL_TASK_FAILED,
  payload,
});
