import React from 'react'
import style from './styles.css'
import {connect} from 'react-redux'
import {deleteTodoCreator,completeTodoCreator, addTodoCreator} from '../redux/action'


const Item = (todo) => {
  let todoArr = todo.todo;
  console.log(todo)

  function completeTodoItem(id) {
    todo.completeTodo(id);
  }

  function deleteTodoItem(id) {
    todo.deleteTodo(id);
  }

  return (
    <ul>
      {todoArr.map(item => 
        item.deleted === false ? 
          (<li key={item.id} className="todoitem">
          <input type='checkbox' onChange={() => completeTodoItem(item.id)} />
          {item.completed === true? (<div>completed</div>):(<div></div>)}
          <br/>
        {item.todo}
       <button onClick={() => deleteTodoItem(item.id)}>Delete?</button>
        </li>):(<div></div>)
      )}
    </ul>
  )
}

const mapStateToProps = (state) => {
  return {
    todo: state
  }
}

const mapDispatchToPorps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodoCreator(todo)),
    completeTodo: (id) => dispatch(completeTodoCreator(id)),
    deleteTodo: (id) => dispatch(deleteTodoCreator(id))
  }
}

const ConnectedItem = connect(mapStateToProps,mapDispatchToPorps)(Item)


export default ConnectedItem