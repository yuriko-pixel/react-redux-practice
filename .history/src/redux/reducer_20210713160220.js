
export const reducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO': 
            return {
                ...state,
                action.payload
            }
        case 'COMPLETE_TODO':
            return state.map(todo => todo.id === action.id ? {id, text, completed: true}: todo);
        default:
            return state;
    }
}