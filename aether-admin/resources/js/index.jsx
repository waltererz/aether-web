import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './system/App';
import Reducers from './redux/reducers';

const store = createStore(Reducers);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="*" component={App} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('app'),
);
