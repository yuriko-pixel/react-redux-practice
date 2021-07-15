import { createStore,compose } from 'redux'
import rootReducer from './reducer'

const store = createStore(rootReducer,compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
store.subscribe(function(){console.log(store.getState())})

export default store;