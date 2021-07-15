import React, {useState} from 'react'
import store from '../redux/store'
import {ADD_TODO} from '../redux/action'

function addTodo (text) {
    console.log(text);
    return store.dispatch(ADD_TODO(text))
}

const InputTodo = () => {
    const [text, setText] = useState('');

    return (
        <form>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}></input>
            <button onClick={e => {
                e.preventDefault();
                addTodo(text);
            }}></button>
        </form>
    )
}

export default InputTodo