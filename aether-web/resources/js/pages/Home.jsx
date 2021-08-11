import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BasicContainer as Container } from '../system/Container';
import LeftSide from './home/LeftSide';
import RightSide from './home/RightSide';
import HeaderIcons from './home/HeaderIcons';
import * as Page from './home/pages';
import * as common from '../services/common';

export default function Home() {
    common.init();

    return (
        <React.Fragment>
            <Container left={<LeftSide />} right={<RightSide />} headerIcons={<HeaderIcons />}>
                <Switch>
                    <Route exact path="/" component={Page.Home} />
                </Switch>
            </Container>
        </React.Fragment>
    );
}
