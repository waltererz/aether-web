import React from 'react';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import AccountBalanceWalletRoundedIcon from '@material-ui/icons/AccountBalanceWalletRounded';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Container from '../system/Container';
import RightSide from './asset/RightSide';
import * as Page from './asset/pages';
import * as common from '../services/common';

export default function Asset() {
    common.init({
        headerIcons: {
            desktop: [{ path: '/user', icon: <AccountCircleRoundedIcon />, auth: true }],
            mobile: [{ path: '/assets/moneybook', icon: <AccountBalanceWalletRoundedIcon /> }],
        },
    });

    return (
        <Container
            pages={[
                { path: '/assets', component: Page.Home, exact: true },
                { path: '/assets/moneybook', component: Page.Moneybook, exact: true },
            ]}
            secondary={<RightSide />}
            submenus={[
                { path: '/assets', text: '자산관리 대시보드', icon: <DashboardIcon /> },
                {
                    path: '/assets/moneybook',
                    text: '가계부',
                    icon: <AccountBalanceWalletRoundedIcon />,
                },
            ]}
        />
    );
}
