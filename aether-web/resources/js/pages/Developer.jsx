import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BasicContainer as Container } from '../system/Container';
import LeftSide from './developer/LeftSide';
import RightSide from './developer/RightSide';
import HeaderIcons from './developer/HeaderIcons';
import * as Page from './developer/pages';
import * as common from '../services/common';

export default function Developer() {
    common.init();

    return (
        <React.Fragment>
            <Container left={<LeftSide />} right={<RightSide />} headerIcons={<HeaderIcons />}>
                <Switch>
                    <Route exact path="/developer" component={Page.Home} />
                    <Route exact path="/developer/forum" component={Page.Forum} />
                </Switch>
            </Container>
        </React.Fragment>
    );
}
