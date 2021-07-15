import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTodo,completeTodo } from '../containers/todoactions'

let Todo = (todos) => {
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

// const mapStateToProps = (state) => ({
//     todo: state.todos
//   })
  
  
// Todo =  connect(mapStateToProps)(Todo);

export default Todo