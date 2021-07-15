import React, {useState} from 'react'
import store from '../redux/store'
import {ADD_TODO} from '../redux/action'
import {connect} from 'react-redux'
import Todo from './Todo'
import { addTodo,completeTodo } from '../containers/todoactions'

const todoStore = state => state.todo;

let InputTodo = (props) => {
    const [text, setText] = useState('');
    console.log(store.getState())
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
        <Todo/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    todo: state.todo
})
  
const mapDispatchToProps = dispatch => ({
    addTodo: () => dispatch(addTodo()),
    completeTodo: () => dispatch(completeTodo())
})  

InputTodo =  connect(mapStateToProps,mapDispatchToProps)(InputTodo);

export default InputTodo