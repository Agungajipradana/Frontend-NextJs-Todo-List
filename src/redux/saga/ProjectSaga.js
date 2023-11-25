import ProjectNameApi from "@/features/project/ProjectNameApi";
import { AddProjectFailed, AddProjectSuccess, DeleteProjectFailed, DeleteProjectSuccess, EditProjectFailed, EditProjectSuccess, FindProjectFailed, FindProjectSuccess, ListProjectFailed, ListProjectSuccess } from "../action/ProjectAction";
import { call, put } from "redux-saga/effects";

function* handleListProject() {
  try {
    const result = yield call(ProjectNameApi.List);
    if (result.data !== undefined) {
      yield put(ListProjectSuccess(result.data));
    } else {
      yield put(ListProjectFailed("Data is undefined"));
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      yield put(ListProjectFailed("Unauthorized"));
    } else {
      yield put(ListProjectFailed(error.message));
    }
  }
}

function* handleAddProject(action) {
  const { payload } = action;
  try {
    const result = yield call(ProjectNameApi.Create, payload);
    yield put(AddProjectSuccess(result.data));
  } catch (error) {
    yield put(AddProjectFailed(error));
  }
}

function* handleFindProject(action) {
  const { payload } = action;
  try {
    const result = yield call(ProjectNameApi.FindOne, payload);
    // console.log("API response in handleFindProject:", result);
    yield put(FindProjectSuccess(result));
  } catch (error) {
    yield put(FindProjectFailed(error));
  }
}

function* handleEditProject(action) {
  const { payload } = action;
  try {
    const result = yield call(ProjectNameApi.Update, payload);
    yield put(EditProjectSuccess(result.data));
  } catch (error) {
    yield put(EditProjectFailed(error.response.data.errors));
  }
}

function* handleDelProject(action) {
  const { payload } = action;
  try {
    const result = yield call(ProjectNameApi.Deleted, payload);
    yield put(DeleteProjectSuccess(result.data));
  } catch (error) {
    yield put(DeleteProjectFailed(error));
  }
}

export { handleListProject, handleAddProject, handleFindProject, handleEditProject, handleDelProject };
