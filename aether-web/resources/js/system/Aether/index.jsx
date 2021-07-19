import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../Layout';
import * as RoutePage from '../../routes';

class Aether extends React.Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact path="/" component={RoutePage.Home} />
                    <Route path="/asset" component={RoutePage.AssetManagement} />
                    <Route path="/advisors" component={RoutePage.Advisors} />
                </Switch>
            </Layout>
        );
    }
}

export default Aether;
