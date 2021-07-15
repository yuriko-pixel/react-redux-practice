const rootReducer = (state = [], action) => {
    switch (action.type) {
      case "ADD_TODO":
        return [...state, { todo: action.text }];
      default:
        return state;
    }
  };
  
  export default rootReducer;
  