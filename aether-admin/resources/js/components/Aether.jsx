import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Group from './Group';

const Aether = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/groups" component={Group} />
      </Switch>
    </Layout>
  );
};

export default Aether;
