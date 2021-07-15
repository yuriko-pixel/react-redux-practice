import React from 'react'
import { connect } from 'react-redux'
import { completeTodo } from '../containers/todoactions'

const Todo = (todos) => {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    {todo.text}
                    <button onClick={() => completeTodo(todo.id)}></button>
                </li>
            ))}
        </ul>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos
})
 
const ConnectedApp =  connect(mapStateToProps)(Todo);

export default ConnectedApp