import React, {useState} from 'react'
import store from '../redux/store'
import {ADD_TODO} from '../redux/action'
import {connect} from 'react-redux'
import Todo from './Todo'


const { bindActionCreators } = require('redux');

let InputTodo = ({dispatch}) => {
    const [text, setText] = useState('');

    return (
        <div>
        <form onSubmit={e => {
                e.preventDefault();
                console.log(text)
                dispatch(ADD_TODO(text));
        }}>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}></input>
            <button type="submit"></button>
        </form>
        <Todo/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    todo: state.todos
  })

  const mapDispatchToProps = dispatch => bindActionCreators({
    ADD_TODO
  }, dispatch)

InputTodo = connect(mapStateToProps,mapDispatchToProps)(InputTodo)

export default InputTodo