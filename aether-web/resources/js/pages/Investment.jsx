import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PieChartOutlinedIcon from '@material-ui/icons/PieChartOutlined';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PieChartIcon from '@material-ui/icons/PieChart';
import Container from '../system/Container';
import RightSide from './investment/RightSide';
import * as Page from './investment/pages';
import * as common from '../services/common';

export default function Investment() {
    common.init({
        headerIcons: {
            desktop: [{ to: '/user/signin', icon: <AccountCircleIcon /> }],
            mobile: [
                { to: '/investment/portfolio', icon: <PieChartOutlinedIcon /> },
                { to: '/user/signin', icon: <AccountCircleIcon /> },
            ],
        },
    });

    return (
        <Container
            pages={[
                { path: '/investment', component: Page.Home, exact: true },
                { path: '/investment/portfolio', component: Page.Portfolio, exact: true },
            ]}
            secondary={<RightSide />}
            submenus={[
                { path: '/investment', text: '투자자산 대시보드', icon: <DashboardIcon /> },
                { path: '/investment/portfolio', text: '포트폴리오관리', icon: <PieChartIcon /> },
            ]}
        />
    );
}
