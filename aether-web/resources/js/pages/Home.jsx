import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { BasicContainer as Container } from '../system/Container';
import LeftSide from './home/LeftSide';
import RightSide from './home/RightSide';
import * as Page from './home/pages';
import * as common from '../services/common';

export default function Home() {
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
                    <Route exact path="/" component={Page.Home} />
                </Switch>
            </Container>
        </React.Fragment>
    );
}
