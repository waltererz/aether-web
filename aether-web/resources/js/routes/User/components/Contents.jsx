import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as RoutePage from '../routes';

class Contents extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/user" component={RoutePage.Home} />
                <Route exact path="/user/signup" component={RoutePage.SignUp} />
                <Route exact path="/user/login" component={RoutePage.Login} />
            </Switch>
        );
    }
}

export default Contents;
