import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import App from './App'
import Store from './store'
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={Store()}>
    <App />
  </Provider>,
  rootElement
)
