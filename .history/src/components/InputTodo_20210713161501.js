import React from 'react'

const InputTodo = () => {
    return (
        <form>
            <input type="text"></input>
            <button type="submit" onSubmit={e => e.preventDefault()}></button>
        </form>
    )
}