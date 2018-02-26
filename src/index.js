import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import reducer from './reducers'
import { logger } from 'redux-logger'

const store = createStore(reducer, applyMiddleware(logger))

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
, document.getElementById('root'))
registerServiceWorker()
