import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import ConnectedTodo from "./components/Todo";
import { createStore } from "redux";
import rootReducer from "./redux/reducer";
import reportWebVitals from './reportWebVitals';

const store = createStore(rootReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <ConnectedTodo />
    </StrictMode>
  </Provider>,
  rootElement
);


reportWebVitals();
