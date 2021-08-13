import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PieChartOutlinedIcon from '@material-ui/icons/PieChartOutlined';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import Container from '../system/Container';
import RightSide from './asset/RightSide';
import * as Page from './asset/pages';
import * as common from '../services/common';

export default function Asset() {
    common.init({
        headerIcons: {
            desktop: [{ to: '/user/signin', icon: <AccountCircleIcon /> }],
            mobile: [
                { to: '/assets/investment/portfolio', icon: <PieChartOutlinedIcon /> },
                { to: '/assets/moneybook', icon: <CreditCardOutlinedIcon /> },
                { to: '/user/signin', icon: <AccountCircleIcon /> },
            ],
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
                { path: '/assets/moneybook', text: '가계부', icon: <CreditCardIcon /> },
            ]}
        />
    );
}
