import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PieChartIcon from '@material-ui/icons/PieChart';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import XMenu from '../../../system/XMenu';

class LeftSide extends React.Component {
    render() {
        const items = [
            { text: '자산관리 대시보드', to: '/assets', icon: <DashboardIcon /> },
            { text: '투자자산관리', to: '/assets/investment', icon: <MonetizationOnIcon /> },
            { text: '포트폴리오관리', to: '/assets/investment/portfolio', icon: <PieChartIcon /> },
            { text: '가계부', to: '/assets/moneybook', icon: <CreditCardIcon /> },
        ];

        return <XMenu items={items} />;
    }
}

export default LeftSide;
