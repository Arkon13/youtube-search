import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Video from './Video';
import { Router, Route, hashHistory } from 'react-router';
import store from './store';
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';




ReactDOM.render( 
  <Provider store = {store}>
    <Router history={hashHistory}>
      <Route path="/" component={App} />
      <Route path="/movie/:id" component={Video} />
    </Router>
  </Provider>,
    document.getElementById('root'));
registerServiceWorker();
