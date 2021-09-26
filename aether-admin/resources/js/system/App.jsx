import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as Page from '../pages';
import Layout from './Layout';

export default function App() {
    return (
        <Layout>
            <Switch>
                <Route exact path="/" component={Page.Home} />
                <Route path="/user" component={Page.User} />
                <Route path="/advisor" component={Page.Advisor} />
            </Switch>
        </Layout>
    );
}
