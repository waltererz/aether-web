import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { BasicContainer as Container } from '../system/Container';
import LeftSide from './advisor/LeftSide';
import RightSide from './advisor/RightSide';
import * as common from '../services/common';
import * as Page from './advisor/pages';
import '../../sass/routes/_advisors.scss';

export default function Advisor() {
    common.init({
        headerIcons: {
            desktop: [
                { to: '/user', icon: <AccountCircleIcon /> },
                { to: '/advisors/search', icon: <SearchOutlinedIcon /> },
            ],
            mobile: [{ to: '/advisors/search', icon: <SearchOutlinedIcon /> }],
        },
    });

    return (
        <React.Fragment>
            <Container left={<LeftSide />} right={<RightSide />}>
                <Switch>
                    <Route exact path="/advisors" component={Page.Home} />
                    <Route exact path="/advisors/search" component={Page.Search} />
                </Switch>
            </Container>
        </React.Fragment>
    );
}
