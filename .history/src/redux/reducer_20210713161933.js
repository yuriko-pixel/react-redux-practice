let id = 0;

export const todoReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO': 
            const todos = {id: id++, text: action.payload, completed: false}
            return {
                ...state,
                todos
            }

        case 'COMPLETE_TODO':
            return state.map(todo => todo.id === action.id ? {id: action.id, text: action.text, completed: true}: todo);
        default:
            return state;
    }
}