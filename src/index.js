import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
import HomePage from './components/HomePage';
import Beastery from './containers/BeasteryContainer';
import GE from './containers/GEContainer';
import Hiscores from './containers/HiscoresContainer';
import Streams from './containers/StreamsContainer';
//COMPONENTS
import About from './components/About';
import RelatedSites from './components/RelatedSites';
//REDUCERS
import rootReducer from './reducers/RootReducer';
// Store with middleware.
const createStoreWithMiddleware = compose(
  applyMiddleware(Thunk, Promise),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
)(createStore);

const store = createStoreWithMiddleware(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={About} />
        <Route path="relatedsites" component={RelatedSites} />
        <Route path="streams" component={Streams} />
        <Route path="beastery" component={Beastery} />
        <Route path="ge" component={GE} />
        <Route path="hiscores" component={Hiscores} />
      </Route>
    </Router>
  </Provider>,
  document.querySelector('.container')
);
