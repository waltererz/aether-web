import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import App from './system/App';
import Reducers from './redux/reducers';
import * as StandAlone from './standalones';

axios.defaults.xsrfCookieName = 'XSRF-TOKEN';
axios.defaults.xsrfHeaderName = 'X-XSRF-TOKEN';
axios.defaults.withCredentials = true;

const store = createStore(Reducers);

ReactDOM.render(
    <React.Fragment>
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/user/signin" component={StandAlone.SignIn} />
                    <Route path="*" component={App} />
                </Switch>
            </Router>
        </Provider>
    </React.Fragment>,
    document.getElementById('app'),
);
