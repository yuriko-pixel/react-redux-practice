import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import { addTodo,completeTodo } from '../containers/todoactions'
import store from '../redux/store'

import {ADD_TODO} from '../redux/action'
let Todo = (todos) => {
    console.log(this.todos)
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
  
  const mapDispatchToProps = dispatch => bindActionCreators({
    ADD_TODO
  }, dispatch)
  
Todo =  connect(mapStateToProps,mapDispatchToProps)(Todo);

export default Todo