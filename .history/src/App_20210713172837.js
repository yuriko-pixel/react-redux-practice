
import './App.css';
import InputTodo from './components/InputTodo';
import {connect} from 'react-redux'

function App() {
  return (
    <div className="App">
      <InputTodo/>
    </div>
  );
}

const mapStateToProps = (state) => ({
  todo: state.todos
})


const ConnectedApp =  connect(mapStateToProps)(Todo);

export default App;
