const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const COMPLETE_TODO = "COMPLETE_TODO";

export const addTodoCreator = (text) => {
  return {
    type: ADD_TODO,
    text
  };
};

export const deleteTodoCreator = (id) => {
  return {
    type: DELETE_TODO,
    id
  };
};

export const completeTodoCreator = (id) => {
  return {
    type: COMPLETE_TODO,
    id
  };
};
