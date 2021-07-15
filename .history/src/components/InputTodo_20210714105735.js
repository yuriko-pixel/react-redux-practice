import React, {useState} from 'react'
import store from '../redux/store'
import {ADD_TODO} from '../redux/action'
import {connect} from 'react-redux'
import Todo from './Todo'
import { addTodo } from '../containers/todoactions'

const todoStore = state => state.todo;

let InputTodo = () => {
    const [text, setText] = useState('');

    return (
        <div>
        <form onSubmit={e => {
                e.preventDefault();
                console.log(text)
                store.dispatch(ADD_TODO(text));
        }}>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}></input>
            <button type="submit"></button>
        </form>
        <ul>
            {todos.todo !== undefined ?
            (todos.todo.map(todo => (
                <li key={todo.id}>
                    {todo.text}
                    <button onClick={() => completeTodo(todo.id)}></button>
                </li>
            ))): <p></p>}
        </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
    todo: todoStore(state)
})
  
const mapDispatchToProps = dispatch => ({
    addTodo: () => dispatch(addTodo())
})  

InputTodo =  connect(mapStateToProps,mapDispatchToProps)(InputTodo);

export default InputTodo