import {combineReducers} from 'redux';

let id = 0;

const todoReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO': 
           
            const todos = {id: id++, text: action.payload, completed: false}
            const newTodos = {...state,todos};
            console.log(newTodos)
            return newTodos;

        case 'COMPLETE_TODO':
            return state.map(todo => todo.id === action.id ? {id: action.id, text: action.text, completed: true}: todo);
        default:
            return state;
    }
}
const rootReducer = combineReducers({
    todoReducer
  });
  
  export default rootReducer;