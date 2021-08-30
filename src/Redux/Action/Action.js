import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK } from "./ActionTypes";

export const addtask = (newtask) => {
  return {
    type: ADD_TASK,
    payload: newtask,
  };
};

export const deletetask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};

export const completetask = (id) => {
    return {
      type: COMPLETE_TASK,
      payload: id,
    };
  };

  export const edittask = (id,value) => {
    return {
      type: EDIT_TASK,
      payload: {id,value},
    };
  };