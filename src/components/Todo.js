import React, {useState} from 'react'
import {deleteTodoCreator,completeTodoCreator, addTodoCreator} from '../redux/action'
import {connect} from 'react-redux'
import styles from './styles.css'
import ConnectedItem from './Item'

const Todo = (todo) => {
  const [input, setInput] = useState('');
  let todoArr = todo.todo;

  function submitTodo(text) {
    todo.addTodo(text);
    setInput('');
  }


  return (
    <div>
      <form>
        <h2>Todo Input</h2>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
        <button onClick={(e)=> {e.preventDefault(); submitTodo(input)}}>Submit</button>
      </form>
        {todoArr.length !== 0 ? (<ConnectedItem/>):(<div></div>)}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todo: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodoCreator(todo)),
    completeTodo: (id) => dispatch(completeTodoCreator(id)),
    deleteTodo: (id) => dispatch(deleteTodoCreator(id))
  }
}

const ConnectedTodo = connect(mapStateToProps,mapDispatchToProps)(Todo)

export default ConnectedTodo