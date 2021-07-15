import React from 'react'
import { connect } from 'react-redux'
import { completeTodo } from '../containers/todoactions'

const Todo = (todos) => {
    console.log(todos)
    return (
        <ul>
            {todos !== undefined ?
            (todos.map(todo => (
                <li key={todo.id}>
                    {todo.text}
                    <button onClick={() => completeTodo(todo.id)}></button>
                </li>
            ))): <p></p>}
        </ul>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos
})
 
const ConnectedApp =  connect(mapStateToProps)(Todo);

export default ConnectedApp