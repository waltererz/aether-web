import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BasicContainer as Container } from '../system/Container';
import LeftSide from './investment/LeftSide';
import RightSide from './investment/RightSide';
import HeaderIcons from './investment/HeaderIcons';
import * as Page from './investment/pages';
import * as common from '../services/common';

export default function Investment() {
    common.init();

    return (
        <React.Fragment>
            <Container left={<LeftSide />} right={<RightSide />} headerIcons={<HeaderIcons />}>
                <Switch>
                    <Route exact path="/investment" component={Page.Home} />
                    <Route exact path="/investment/portfolio" component={Page.Portfolio} />
                </Switch>
            </Container>
        </React.Fragment>
    );
}
