import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../Layout';
import * as RoutePage from '../../routes';

export default class Aether extends React.Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact path="/" component={RoutePage.Home} />
                    <Route path="/user" component={RoutePage.User} />
                    <Route path="/assets" component={RoutePage.AssetManagement} />
                    <Route path="/advisors" component={RoutePage.Advisor} />
                    <Route path="/developer" component={RoutePage.Developer} />
                </Switch>
            </Layout>
        );
    }
}
