
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



export default App;
