import TaskApi from "@/features/task/TaskApi";
import { call, put } from "redux-saga/effects";
import { AddTaskFailed, AddTaskSuccess, DeleteTaskFailed, DeleteTaskSuccess, EditTaskFailed, EditTaskSuccess, FindTaskFailed, FindTaskSuccess, ListTaskFailed, ListTaskSuccess } from "../action/TaskAction";

// function* handleListTask(action) {
//   const { payload } = action;
//   try {
//     const result = yield call(TaskApi.List, payload);
//     if (result && result.length > 0) {
//       yield put(ListTaskSuccess(result));
//     } else {
//       yield put(ListTaskFailed("Data is undefined"));
//     }
//   } catch (error) {
//     if (error.response && error.response.status === 401) {
//       yield put(ListTaskFailed("Unauthorized"));
//     } else if (error.message === "Data is undefined") {
//       yield put(ListTaskFailed("Data is undefined"));
//     } else {
//       yield put(ListTaskFailed(error.message));
//     }
//   }
// }

function* handleListTask(action) {
  const { payload } = action;
  try {
    const result = yield call(TaskApi.List, payload);
    yield put(ListTaskSuccess(result.data));
  } catch (error) {
    yield put(ListTaskFailed(error.message));
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
