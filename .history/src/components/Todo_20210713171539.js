import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTodo,completeTodo } from '../containers/todoactions'

const Todo = (todos) => {
    console.log(todos)
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
 

const ConnectedApp =  connect(mapStateToProps)(Todo);

export default ConnectedApp