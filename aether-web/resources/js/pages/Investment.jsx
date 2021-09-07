import React from 'react';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import PieChartRoundedIcon from '@material-ui/icons/PieChartRounded';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import Container from '../system/Container';
import * as Page from './investment';
import * as common from '../services/common';
import config from '../config';

export default function Investment() {
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
            mobile: [{ path: '/investments/portfolio', icon: <PieChartRoundedIcon /> }],
        },
    });

    return (
        <Container
            pages={[
                { path: '/investments', component: Page.Home, exact: true },
                { path: '/investments/portfolio', component: Page.Portfolio, exact: true },
            ]}
            submenus={[
                { path: '/investments', text: '투자자산 대시보드', icon: <DashboardIcon /> },
                {
                    path: '/investments/portfolio',
                    text: '포트폴리오관리',
                    icon: <PieChartRoundedIcon />,
                },
            ]}
        />
    );
}
