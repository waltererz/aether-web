import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import * as Page from '../pages';

export default function App() {
    return (
        <Layout>
            <Switch>
                <Route exact path="/" component={Page.Home} />
                <Route path="/user" component={Page.User} />
                <Route path="/assets" component={Page.Asset} />
                <Route path="/advisors" component={Page.Advisor} />
                <Route path="/developer" component={Page.Developer} />
            </Switch>
        </Layout>
    );
}
