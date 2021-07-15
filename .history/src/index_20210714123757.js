import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';



const store = createStore(counter)

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App value={store.getState()} />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
