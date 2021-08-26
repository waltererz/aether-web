import React from 'react';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import PersonSearchRoundedIcon from '@material-ui/icons/PersonSearchRounded';
import Container from '../system/Container';
import RightSide from './advisor/RightSide';
import * as common from '../services/common';
import * as Page from './advisor/pages';

export default function Advisor() {
    common.init({
        headerIcons: {
            desktop: [{ path: '/user', icon: <AccountCircleRoundedIcon />, auth: true }],
            mobile: [
                { path: '/advisors/search', icon: <PersonSearchRoundedIcon /> },
                { path: '/user', icon: <AccountCircleRoundedIcon />, auth: true },
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
                {
                    path: '/advisors/search',
                    text: '투자어드바이저 검색',
                    icon: <PersonSearchRoundedIcon />,
                },
            ]}
        />
    );
}
