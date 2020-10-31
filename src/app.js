import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import HttpsRedirect from 'react-https-redirect'

import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { createStore } from 'redux'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = createStore(
  configureStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

const jsx = (
  <HttpsRedirect>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </HttpsRedirect>
)

ReactDOM.render(jsx, document.getElementById('app'))
