import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PieChartIcon from '@material-ui/icons/PieChart';
import XMenu from '../../system/XMenu';

export default function LeftSide() {
    return (
        <XMenu
            items={[
                { text: '투자자산 대시보드', to: '/investment', icon: <DashboardIcon /> },
                {
                    text: '포트폴리오관리',
                    to: '/investment/portfolio',
                    icon: <PieChartIcon />,
                },
            ]}
        />
    );
}
