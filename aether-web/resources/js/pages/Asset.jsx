import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PieChartOutlinedIcon from '@material-ui/icons/PieChartOutlined';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { BasicContainer as Container } from '../system/Container';
import LeftSide from './asset/LeftSide';
import RightSide from './asset/RightSide';
import * as Page from './asset/pages';
import * as common from '../services/common';

export default function Asset() {
    common.init({
        headerIcons: {
            desktop: [
                { to: '/user', icon: <AccountCircleIcon /> },
                { to: '/advisors/search', icon: <SearchOutlinedIcon /> },
            ],
            mobile: [
                { to: '/advisors/search', icon: <SearchOutlinedIcon /> },
                { to: '/assets/investment/portfolio', icon: <PieChartOutlinedIcon /> },
                { to: '/assets/moneybook', icon: <CreditCardOutlinedIcon /> },
            ],
        },
    });

    return (
        <React.Fragment>
            <Container left={<LeftSide />} right={<RightSide />}>
                <Switch>
                    <Route exact path="/assets" component={Page.Home} />
                    <Route exact path="/assets/moneybook" component={Page.Moneybook} />
                </Switch>
            </Container>
        </React.Fragment>
    );
}
