import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AssignmentIcon from '@material-ui/icons/Assignment';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Container from '../system/Container';
import RightSide from './user/RightSide';
import * as Page from './user/pages';
import * as common from '../services/common';
import '../../sass/pages/_user.scss';

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
        <Container
            pages={[
                { path: '/user', component: Page.Home, exact: true },
                { path: '/user/signup', component: Page.SignUp, exact: true },
            ]}
            secondary={<RightSide />}
            submenus={[
                { path: '/user/signup', text: '회원가입', icon: <AssignmentIcon /> },
                { path: '/user/signin', text: '로그인', icon: <VpnKeyIcon /> },
            ]}
        />
    );
}
