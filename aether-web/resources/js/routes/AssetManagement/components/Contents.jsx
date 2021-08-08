import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as RoutePage from '../routes';

class Contents extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/assets" component={RoutePage.Home} />
                <Route exact path="/assets/moneybook" component={RoutePage.Moneybook} />
                <Route exact path="/assets/investment" component={RoutePage.Investment} />
                <Route exact path="/assets/investment/portfolio" component={RoutePage.Portfolio} />
            </Switch>
        );
    }
}

export default Contents;
