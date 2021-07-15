let count = 0;

const rootReducer = (state = [], action) => {
    switch (action.type) {
      case "ADD_TODO":
        return [...state, { id: count++, todo: action.text, completed: false, deleted: false }];
      case "COMPLETE_TODO":
        let todo = [];
        state.forEach(item => {
          if(item.id === action.id)
            item.completed = true;
          
          todo.push(item);
        })
          return todo;
      case "DELETE_TODO":
        let todoarr = [];;
        state.forEach(item => {
          if(item.id === action.id)
            item.deleted = true;
          
            todoarr.push(item);
        })
          return todoarr;
      default:
        return state;
    }
  };
  
  export default rootReducer;
  