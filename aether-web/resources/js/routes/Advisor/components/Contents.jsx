import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as RoutePage from '../routes';

class Contents extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/advisors" component={RoutePage.Home} />
                <Route exact path="/advisors/search" component={RoutePage.Search} />
            </Switch>
        );
    }
}

export default Contents;
