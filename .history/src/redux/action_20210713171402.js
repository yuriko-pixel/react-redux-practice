
export const COMPLETE_TODO = (id) => {
    return {
        type: 'COMPLETE_TODO',
        id
    }
}

export const ADD_TODO = (text) => {
    return {
        type: 'ADD_TODO',
        text
    }
}