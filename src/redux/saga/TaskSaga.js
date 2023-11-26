import ProjectNameApi from "@/features/project/ProjectNameApi";
import TaskApi from "@/features/task/TaskApi";
import { AddProjectFailed, AddProjectSuccess, DeleteProjectFailed, DeleteProjectSuccess, EditProjectFailed, EditProjectSuccess, FindProjectFailed, FindProjectSuccess, ListProjectFailed, ListProjectSuccess } from "../action/ProjectAction";
import { call, put } from "redux-saga/effects";

function* handleListTask() {
  try {
    const result = yield call(TaskApi.List);
    if (result.data !== undefined) {
      yield put(ListTaskSuccess(result.data));
    } else {
      yield put(ListTaskFailed("Data is undefined"));
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      yield put(ListTaskFailed("Unauthorized"));
    } else {
      yield put(ListTaskFailed(error.message));
    }
  }
}

function* handleAddTask(action) {
  const { payload } = action;
  try {
    const result = yield call(TaskApi.Create, payload);
    yield put(AddTaskSuccess(result.data));
  } catch (error) {
    yield put(AddTaskFailed(error));
  }
}

function* handleFindTask(action) {
  const { payload } = action;
  try {
    const result = yield call(TaskApi.FindOne, payload);
    // console.log("API response in handleFindTask:", result);
    yield put(FindTaskSuccess(result));
  } catch (error) {
    yield put(FindTaskFailed(error));
  }
}

function* handleEditTask(action) {
  const { payload } = action;
  try {
    const result = yield call(TaskApi.Update, payload);
    yield put(EditTaskSuccess(result.data));
  } catch (error) {
    yield put(EditTaskFailed(error.response.data.errors));
  }
}

function* handleDelTask(action) {
  const { payload } = action;
  try {
    const result = yield call(TaskApi.Deleted, payload);
    yield put(DeleteTaskSuccess(result.data));
  } catch (error) {
    yield put(DeleteTaskFailed(error));
  }
}

export { handleListTask, handleAddTask, handleFindTask, handleEditTask, handleDelTask };
