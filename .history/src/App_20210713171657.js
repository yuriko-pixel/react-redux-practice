import Todo from './components/Todo'
import './App.css';
import InputTodo from './components/InputTodo';
import {connect} from 'react-redux'

function App() {
  return (
    <div className="App">
      <InputTodo/>
      <Todo/>
    </div>
  );
}

const mapStateToProps = (state) => ({
  todo: state.todos
})


const ConnectedApp =  connect(mapStateToProps)(Todo);

export default App;
