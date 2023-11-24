import * as ActionProject from "../constant/ProjectConstant";

// List
export const ListProjectRequest = () => ({
  type: ActionProject.LIST_PROJECT_REQUEST,
});

export const ListProjectSuccess = (payload) => ({
  type: ActionProject.LIST_PROJECT_SUCCESS,
  payload,
});

export const ListProjectFailed = (payload) => ({
  type: ActionProject.LIST_PROJECT_FAILED,
  payload,
});

// Create
export const AddProjectRequest = (payload) => ({
  type: ActionProject.ADD_PROJECT_REQUEST,
  payload,
});

export const AddProjectSuccess = (payload) => ({
  type: ActionProject.ADD_PROJECT_SUCCESS,
  payload,
});

export const AddProjectFailed = (payload) => ({
  type: ActionProject.ADD_PROJECT_FAILED,
  payload,
});

// Find one
export const FindProjectRequest = (payload) => ({
  type: ActionProject.FIND_PROJECT_REQUEST,
  payload,
});

export const FindProjectSuccess = (payload) => ({
  type: ActionProject.FIND_PROJECT_SUCCESS,
  payload,
});

export const FindProjectFailed = (payload) => ({
  type: ActionProject.FIND_PROJECT_FAILED,
  payload,
});

// Edit
export const EditProjectRequest = (payload) => ({
  type: ActionProject.EDIT_PROJECT_REQUEST,
  payload,
});

export const EditProjectSuccess = (payload) => ({
  type: ActionProject.EDIT_PROJECT_SUCCESS,
  payload,
});

export const EditProjectFailed = (payload) => ({
  type: ActionProject.EDIT_PROJECT_FAILED,
  payload,
});

// Delete
export const DeleteProjectRequest = (payload) => ({
  type: ActionProject.DEL_PROJECT_REQUEST,
  payload,
});

export const DeleteProjectSuccess = (payload) => ({
  type: ActionProject.DEL_PROJECT_SUCCESS,
  payload,
});

export const DeleteProjectFailed = (payload) => ({
  type: ActionProject.DEL_PROJECT_FAILED,
  payload,
});
