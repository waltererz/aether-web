import React from 'react';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import AccountBalanceWalletRoundedIcon from '@material-ui/icons/AccountBalanceWalletRounded';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import Container from '../system/Container';
import * as Page from './asset';
import * as common from '../services/common';
import config from '../config';

export default function Asset() {
    common.init({
        headerIcons: {
            desktop: [
                {
                    path: '/@' + config('app.user.nickname'),
                    icon: <AccountCircleRoundedIcon />,
                    auth: true,
                },
                { path: '/app/setting', icon: <SettingsRoundedIcon /> },
            ],
            mobile: [{ path: '/assets/moneybook', icon: <AccountBalanceWalletRoundedIcon /> }],
        },
    });

    return (
        <Container
            pages={[
                { path: '/assets', component: Page.Home, exact: true },
                { path: '/assets/moneybook', component: Page.Moneybook, exact: true },
            ]}
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
