'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import Aether from './system/Aether';
import Reducers from './redux/Reducers';

window._ = require('lodash');
window.$ = window.jQuery = require('jquery');

axios.defaults.xsrfCookieName = 'XSRF-TOKEN';
axios.defaults.xsrfHeaderName = 'X-XSRF-TOKEN';
axios.defaults.withCredentials = true;

const store = createStore(Reducers);

ReactDOM.render(
    <React.Fragment>
        <Provider store={store}>
            <Router>
                <Aether />
            </Router>
        </Provider>
    </React.Fragment>,
    document.getElementById('app'),
);
