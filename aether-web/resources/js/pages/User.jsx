import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BasicContainer as Container } from '../system/Container';
import LeftSide from './user/LeftSide';
import RightSide from './user/RightSide';
import HeaderIcons from './user/HeaderIcons';
import * as Page from './user/pages';
import * as common from '../services/common';

export default function User() {
    common.init();

    return (
        <React.Fragment>
            <Container left={<LeftSide />} right={<RightSide />} headerIcons={<HeaderIcons />}>
                <Switch>
                    <Route exact path="/user" component={Page.Home} />
                    <Route exact path="/user/signup" component={Page.SignUp} />
                    <Route exact path="/user/signin" component={Page.SignIn} />
                </Switch>
            </Container>
        </React.Fragment>
    );
}
