import Todo from './components/Todo'
import './App.css';
import InputTodo from './components/InputTodo';

function App() {
  return (
    <div className="App">
      <InputTodo/>
      <Todo/>
    </div>
  );
}

export default App;
