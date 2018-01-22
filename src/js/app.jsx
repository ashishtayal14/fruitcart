import React from 'react'
import Routes from './router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import shippingLabelMakerReducer from './reducers'
import { rootSaga } from './sagas/saga.js'
import createSagaMiddleware from 'redux-saga'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, browserHistory } from 'react-router-dom'
import '../css/bootstrap.css'
import '../css/app.less'
import { API_URL } from './constants/constants'
import Header from './components/core/header';


const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(shippingLabelMakerReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);
const App = () => (
  <div className="col-md-8 col-md-offset-2 reactStore">
    <Header/>
    <Provider store={store}>
      <Routes />
    </Provider>
  </div>
)
ReactDOM.render(
  <Router history={browserHistory}>
    <App />
  </Router>
  , document.getElementById('container')
)
