
let id = 0;

const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: id++,
                text: action.text,
                completed: false
            }
        case 'COMEPLETE_TODO':
            return {
                ...state,
                completed: !state.completed
            }
        default: return state
    }
}

const todosReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO': 
            const tekito = [...state,
                todoReducer(undefined,action)]
            console.log(state == tekito)
            return [
                ...state,
                todoReducer(undefined,action)
            ]

        case 'COMPLETE_TODO':
            return state.map(t => todoReducer(t, action))    
        default:
            return state;
    }
}

export default todosReducer