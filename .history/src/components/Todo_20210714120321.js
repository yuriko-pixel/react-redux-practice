import React from 'react'
import { connect,useSelector } from 'react-redux'
import { bindActionCreators} from 'redux'
import { addTodo,completeTodo } from '../containers/todoactions'
import store from '../redux/store'
import {ADD_TODO} from '../redux/action'

const todoSelector = (state) => state.todo

let Todo = (todos) => {
    
    const counter = useSelector(todoSelector)
    console.log(counter)
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