import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { BasicContainer as Container } from '../system/Container';
import LeftSide from './user/LeftSide';
import RightSide from './user/RightSide';
import * as Page from './user/pages';
import * as common from '../services/common';
import '../../sass/routes/_user.scss';

export default function User() {
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
                    <Route exact path="/user" component={Page.Home} />
                    <Route exact path="/user/signup" component={Page.SignUp} />
                    <Route exact path="/user/signin" component={Page.SignIn} />
                </Switch>
            </Container>
        </React.Fragment>
    );
}
