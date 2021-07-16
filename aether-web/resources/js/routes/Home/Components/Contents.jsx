import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as Page from '../Pages';
import Component from '../../../component';

class Contents extends Component {
    render() {
        const Aether = this.Aether;
        return (
            <Switch>
                <Route exact path="/" render={() => <Page.Home instance={Aether} />} />
            </Switch>
        );
    }
}

export default Contents;
