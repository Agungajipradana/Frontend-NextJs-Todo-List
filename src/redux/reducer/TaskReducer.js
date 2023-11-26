import * as TaskType from "../constant/TaskConstant";

const init_state = {
  tasks: [],
  task: [],
};

const TaskReducer = (state = init_state, action) => {
  switch (action.type) {
    case TaskType.LIST_TASK_REQUEST:
      return { ...state };
    case TaskType.LIST_TASK_SUCCESS:
      return ListTask(state, action);
    case TaskType.ADD_TASK_REQUEST:
      return { ...state };
    case TaskType.ADD_TASK_SUCCESS:
      return AddTask(state, action);
    case TaskType.FIND_TASK_REQUEST:
      return { ...state };
    case TaskType.FIND_TASK_SUCCESS:
      return FindTask(state, action);
    case TaskType.EDIT_TASK_REQUEST:
      return { ...state };
    case TaskType.EDIT_TASK_SUCCESS:
      return EditTask(state, action);
    case TaskType.DEL_TASK_REQUEST:
      return { ...state };
    case TaskType.DEL_TASK_FAILED:
      return DelTask(state, action);
    default:
      return { ...state };
  }
};

const ListTask = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    tasks: payload,
  };
};

const AddTask = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    tasks: [...state.tasks, payload],
  };
};

const FindTask = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    task: payload,
  };
};

const EditTask = (state, action) => {
  return {
    ...state,
    task: action.payload,
  };
};

const DelTask = (state, action) => {
  return {
    ...state,
  };
};

export default TaskReducer;
