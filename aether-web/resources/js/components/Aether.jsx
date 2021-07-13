import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import Advisors from './Pages/Advisors';
import Home from './Pages/Home';

class Aether extends React.Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/advisors" component={Advisors} />
                </Switch>
            </Layout>
        );
    }
}

export default Aether;
