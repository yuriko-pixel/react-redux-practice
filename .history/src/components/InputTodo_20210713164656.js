import React, {useState} from 'react'
import store from '../redux/store'
import {ADD_TODO} from '../redux/action'

function addTodo (text) {
    console.log(text);
    return store.dispatch(ADD_TODO(text))
}

const InputTodo = () => {

    return (
        <form onSubmit={e => {
                e.preventDefault();
                addTodo("some");
        }}>
            <input type="text"></input>
            <button type="submit"></button>
        </form>
    )
}

export default InputTodo