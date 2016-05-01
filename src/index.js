import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Perf from 'react-addons-perf';
//  STORE METHODS
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
// MIDDLEWARE
import Thunk from 'redux-thunk';
import Promise from 'redux-promise';
// ROUTING METHODS
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// CONTAINERS
import App from './app/App';
//REDUCERS
import rootReducer from './reducers/RootReducer';
// Store with middleware.
const createStoreWithMiddleware = compose(
  applyMiddleware(Thunk, Promise),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
)(createStore);

const store = createStoreWithMiddleware(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App} >
      </Route>
    </Router>
  </Provider>,
  document.querySelector('.container')
);
