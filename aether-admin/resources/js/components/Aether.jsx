import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Pages/Home';
import Group from './Pages/Group';
import User from './Pages/User';
import Advisors from './Pages/Advisors';

class Aether extends React.Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/groups" component={Group} />
                    <Route path="/users" component={User} />
                    <Route path="/advisors" component={Advisors} />
                </Switch>
            </Layout>
        );
    }
}

export default Aether;
