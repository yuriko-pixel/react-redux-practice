import React, {useState} from 'react'

const InputTodo = () => {
    const [text, setText] = useState('');

    return (
        <form>
            <input type="text" value="" onChange={(e) => setText(e.target.value)}></input>
            <button type="submit" onSubmit={e => {
                e.preventDefault();
                
            }}></button>
        </form>
    )
}