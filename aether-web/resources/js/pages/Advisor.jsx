import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BasicContainer as Container } from '../system/Container';
import LeftSide from './advisor/LeftSide';
import RightSide from './advisor/RightSide';
import HeaderIcons from './advisor/HeaderIcons';
import * as common from '../services/common';
import * as Page from './advisor/pages';
import '../../sass/routes/advisors.scss';

export default function Advisor() {
    common.init();

    return (
        <React.Fragment>
            <Container left={<LeftSide />} right={<RightSide />} headerIcons={<HeaderIcons />}>
                <Switch>
                    <Route exact path="/advisors" component={Page.Home} />
                    <Route exact path="/advisors/search" component={Page.Search} />
                </Switch>
            </Container>
        </React.Fragment>
    );
}
