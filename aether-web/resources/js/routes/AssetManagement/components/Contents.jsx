import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as RoutePage from '../routes';

class Contents extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/asset" component={RoutePage.Home} />
            </Switch>
        );
    }
}

export default Contents;
