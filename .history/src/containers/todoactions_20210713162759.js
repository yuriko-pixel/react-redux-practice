import { COMPLETE_TODO, ADD_TODO } from "../redux/action"
import store from "../redux/store"

export const completeTodo = (id) => {
    return store.dispatch(COMPLETE_TODO(id))
}

export function addTodo (text){
    console.log(text);
    return store.dispatch(ADD_TODO(text))
}