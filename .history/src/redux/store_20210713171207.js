import { createStore,compose } from 'redux'
import todoReducer from './reducer'

const store = createStore(todoReducer,compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
store.subscribe(function(){console.log(store.getState())})

export default store;