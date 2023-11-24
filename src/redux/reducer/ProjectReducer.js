import * as ActionType from "../constant/ProjectConstant";

const init_state = {
  projects: [],
  project: [],
};

const ProjectReduce = (state = init_state, action) => {
  switch (action.type) {
    case ActionType.LIST_PROJECT_REQUEST:
      return { ...state };
    case ActionType.LIST_PROJECT_SUCCESS:
      return ListProject(state, action);
    case ActionType.ADD_PROJECT_REQUEST:
      return { ...state };
    case ActionType.ADD_PROJECT_SUCCESS:
      return AddProject(state, action);
    case ActionType.FIND_PROJECT_REQUEST:
      return { ...state };
    case ActionType.FIND_PROJECT_SUCCESS:
      return FindProject(state, action);
    case ActionType.EDIT_PROJECT_REQUEST:
      return { ...state };
    case ActionType.EDIT_PROJECT_SUCCESS:
      return EditProject(state, action);
    case ActionType.DEL_PROJECT_REQUEST:
      return { ...state };
    case ActionType.DEL_PROJECT_FAILED:
      return DelProject(state, action);
    default:
      return { ...state };
  }
};

const ListProject = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    projects: payload,
  };
};

const AddProject = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    projects: [...state.projects, payload],
  };
};

const FindProject = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    project: payload,
  };
};

const EditProject = (state, action) => {
  return {
    ...state,
    project: action.payload,
  };
};

const DelProject = (state, action) => {
  return {
    ...state,
  };
};

export default ProjectReduce;
