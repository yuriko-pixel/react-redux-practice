let id = 0;

export const COMPLETE_TODO = (id) => {
    return {
        type: 'COMPLETE_TODO',
        payload: id
    }
}

export const ADD_TODO = (text) => {
    return {
        type: 'ADD_TODO',
        actionId: id++,
        payload: text
    }
}