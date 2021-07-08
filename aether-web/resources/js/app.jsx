import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import Aether from './components/Aether';

window._ = require('lodash');

try {
  window.$ = window.jQuery = require('jquery');
  require('bootstrap');
} catch (e) {}

axios.defaults.xsrfCookieName = 'XSRF-TOKEN';
axios.defaults.xsrfHeaderName = 'X-XSRF-TOKEN';
axios.defaults.withCredentials = true;

ReactDOM.render(
  <React.Fragment>
    <Router>
      <Aether />
    </Router>
  </React.Fragment>,
  document.getElementById('app'),
);
