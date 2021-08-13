import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import Container from '../system/Container';
import RightSide from './advisor/RightSide';
import * as common from '../services/common';
import * as Page from './advisor/pages';
import '../../sass/pages/_advisors.scss';

export default function Advisor() {
    common.init({
        headerIcons: {
            desktop: [
                { to: '/advisors/search', icon: <SearchOutlinedIcon /> },
                { to: '/user/signin', icon: <AccountCircleIcon /> },
            ],
            mobile: [
                { to: '/advisors/search', icon: <SearchOutlinedIcon /> },
                { to: '/user/signin', icon: <AccountCircleIcon /> },
            ],
        },
    });

    return (
        <Container
            pages={[
                { path: '/advisors', component: Page.Home, exact: true },
                { path: '/advisors/search', component: Page.Search, exact: true },
            ]}
            secondary={<RightSide />}
            submenus={[
                { path: '/advisors/search', text: '투자어드바이저 검색', icon: <FindInPageIcon /> },
            ]}
        />
    );
}
