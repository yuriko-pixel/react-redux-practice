import React, {useState} from 'react'
import store from '../redux/store'
import {ADD_TODO} from '../redux/action'
import {connect} from 'react-redux'
import Todo from './Todo'

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
        <Todo/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state;
}
  
  
InputTodo =  connect(mapStateToProps)(InputTodo);

export default InputTodo