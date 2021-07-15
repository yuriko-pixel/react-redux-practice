import React, {useState} from 'react'
import { addTodo } from '../containers/todoactions';

const InputTodo = () => {
    const [text, setText] = useState('');

    return (
        <form>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}></input>
            <button type="submit" onSubmit={e => {
                e.preventDefault();
                addTodo(text);
            }}></button>
        </form>
    )
}

export default InputTodo