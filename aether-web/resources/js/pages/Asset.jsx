import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BasicContainer as Container } from '../system/Container';
import LeftSide from './asset/LeftSide';
import RightSide from './asset/RightSide';
import HeaderIcons from './asset/HeaderIcons';
import * as Page from './asset/pages';
import * as common from '../services/common';

export default function AssetManagement() {
    common.init();

    return (
        <React.Fragment>
            <Container left={<LeftSide />} right={<RightSide />} headerIcons={<HeaderIcons />}>
                <Switch>
                    <Route exact path="/assets" component={Page.Home} />
                    <Route exact path="/assets/moneybook" component={Page.Moneybook} />
                    <Route exact path="/assets/investment" component={Page.Investment} />
                    <Route exact path="/assets/investment/portfolio" component={Page.Portfolio} />
                </Switch>
            </Container>
        </React.Fragment>
    );
}
