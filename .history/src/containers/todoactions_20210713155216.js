import { COMPLETE_TODO } from "../redux/action"
import store from "../redux/store"

export const completeTodo = (id) => {
    return store.dispatch(COMPLETE_TODO(id))
}