import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Pages/Home';
import Group from './Pages/Group';
import User from './Pages/User';

const Aether = () => {
    return (
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/groups" component={Group} />
                <Route axact path="/users" component={User} />
            </Switch>
        </Layout>
    );
};

export default Aether;
