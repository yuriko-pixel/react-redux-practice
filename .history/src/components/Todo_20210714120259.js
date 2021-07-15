import React from 'react'
import { connect,useSelector } from 'react-redux'
import { bindActionCreators} from 'redux'
import { addTodo,completeTodo } from '../containers/todoactions'
import store from '../redux/store'
import {ADD_TODO} from '../redux/action'

const counterSelector = (state) => state.counter

let Todo = (todos) => {
    console.log(store.getState())
    const counter = useSelector(counterSelector)

    return (
        <ul>
            {todos.todo !== undefined ?
            (todos.todo.map(todo => (
                <li key={todo.id}>
                    {todo.text}
                    <button onClick={() => completeTodo(todo.id)}></button>
                </li>
            ))): <p></p>}
        </ul>
    )
}

const mapStateToProps = (state) => ({
    todo: state.todos
})
  
// const mapDispatchToProps = dispatch => ({
//     addTodo: () => dispatch(addTodo()),
//     completeTodo: () => dispatch(completeTodo())
// })  
  
Todo =  connect(mapStateToProps)(Todo);

export default Todo