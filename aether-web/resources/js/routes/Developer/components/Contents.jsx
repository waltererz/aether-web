import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as RoutePage from '../routes';

class Contents extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/developer" component={RoutePage.Home} />
                <Route exact path="/developer/forum" component={RoutePage.Forum} />
            </Switch>
        );
    }
}

export default Contents;
