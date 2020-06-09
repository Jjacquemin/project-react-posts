import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import App from './components/app'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware()(createStore)

// On englobe le App d'un provider contenant le store redux créé à partir des reducers
// Quand on fera des ponts de connexion entre react et redux, on ira dans ce store
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>  
    <App />
  </Provider>
  , document.querySelector('.container'))
  