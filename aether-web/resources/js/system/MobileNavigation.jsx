import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PieChartRoundedIcon from '@material-ui/icons/PieChartRounded';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import TrendingUpRoundedIcon from '@material-ui/icons/TrendingUpRounded';
import config from '../config';

export default function MobileNavigation() {
    const [currentTab, setCurrentTab] = React.useState(null);
    const newTab = useSelector((state) => state.app.tab);

    React.useEffect(() => {
        if (currentTab != newTab) {
            setCurrentTab(newTab);
        }
    }, [newTab]);

    return (
        <Box
            sx={{
                display: {
                    xs: 'block',
                    md: 'none',
                },
            }}
        >
            <BottomNavigation
                value={currentTab}
                sx={{
                    height: config('templete.height.bottomNavigation.mobile'),
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    backgroundColor: '#ffffff',
                    width: '100%',
                    position: 'fixed',
                    bottom: '0px',
                    right: '0px',
                    left: 'auto',
                    zIndex: config('templete.zIndex.bottomNavigation'),
                    borderTop: '1px solid #eaeaea',

                    '& .MuiBottomNavigationAction-root': {
                        padding: '0px',
                        color: '#aaaaaa',

                        '&.Mui-selected': {
                            padding: '0px',
                            color: '#000000',
                        },
                    },
                }}
            >
                <BottomNavigationAction
                    icon={<HomeRoundedIcon />}
                    value={config('app.route.home')}
                    component={Link}
                    to="/"
                />
                <BottomNavigationAction
                    icon={<PieChartRoundedIcon />}
                    value={config('app.route.asset')}
                    component={Link}
                    to="/assets"
                />
                <BottomNavigationAction
                    icon={<SupervisedUserCircleRoundedIcon />}
                    value={config('app.route.advisor')}
                    component={Link}
                    to="/advisors"
                />
                <BottomNavigationAction
                    icon={<TrendingUpRoundedIcon />}
                    value={config('app.route.investment')}
                    component={Link}
                    to="/investment"
                />
                <BottomNavigationAction
                    icon={<AccountBoxRoundedIcon />}
                    value={config('app.route.user')}
                    component={Link}
                    to="/user"
                />
            </BottomNavigation>
        </Box>
    );
}
