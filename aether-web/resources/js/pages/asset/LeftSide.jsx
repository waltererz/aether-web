import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import XMenu from '../../system/XMenu';

export default function LeftSide() {
    return (
        <XMenu
            items={[
                { text: '자산관리 대시보드', to: '/assets', icon: <DashboardIcon /> },
                { text: '가계부', to: '/assets/moneybook', icon: <CreditCardIcon /> },
            ]}
        />
    );
}
