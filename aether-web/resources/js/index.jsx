import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './system/App';
import Reducers from './redux/reducers';
import * as StandAlone from './standalones';

const store = createStore(Reducers);

ReactDOM.render(
    <React.Fragment>
        <Provider store={store}>
            <Router>
                <Switch>
                    {/* 단독실행 페이지 */}
                    <Route exact path="/user/signin" component={StandAlone.SignIn} />
                    <Route exact path="/user/signup" component={StandAlone.SignUp} />
                    <Route exact path="/user/signout" component={StandAlone.SignOut} />

                    {/* 단독실행 페이지 이외 */}
                    <Route path="*" component={App} />
                </Switch>
            </Router>
        </Provider>
    </React.Fragment>,
    document.getElementById('app'),
);
