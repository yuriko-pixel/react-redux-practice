import React, {useState} from 'react'
import store from '../redux/store'
import {ADD_TODO} from '../redux/action'

function addTodo (text) {
    // console.log(text);
    return store.dispatch(ADD_TODO(text))
}

const InputTodo = () => {
    const [text, setText] = useState('');

    return (
        <form onSubmit={e => {
                e.preventDefault();
                console.log(text)
                addTodo(text);
        }}>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}></input>
            <button type="submit"></button>
        </form>
    )
}

export default InputTodo