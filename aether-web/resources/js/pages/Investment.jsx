import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PieChartOutlinedIcon from '@material-ui/icons/PieChartOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { BasicContainer as Container } from '../system/Container';
import LeftSide from './investment/LeftSide';
import RightSide from './investment/RightSide';
import * as Page from './investment/pages';
import * as common from '../services/common';

export default function Investment() {
    common.init({
        headerIcons: {
            desktop: [
                { to: '/user', icon: <AccountCircleIcon /> },
                { to: '/advisors/search', icon: <SearchOutlinedIcon /> },
            ],
            mobile: [
                { to: '/advisors/search', icon: <SearchOutlinedIcon /> },
                { to: '/investment/portfolio', icon: <PieChartOutlinedIcon /> },
            ],
        },
    });

    return (
        <React.Fragment>
            <Container left={<LeftSide />} right={<RightSide />}>
                <Switch>
                    <Route exact path="/investment" component={Page.Home} />
                    <Route exact path="/investment/portfolio" component={Page.Portfolio} />
                </Switch>
            </Container>
        </React.Fragment>
    );
}
