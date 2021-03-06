import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { styled } from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PieChartRoundedIcon from '@material-ui/icons/PieChartRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import TrendingUpRoundedIcon from '@material-ui/icons/TrendingUpRounded';
import config from '../config';

const Container = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('xs')]: {
        display: 'block',
    },

    [theme.breakpoints.up('md')]: {
        display: 'none',
    },
}));

export default function MobileNavigation() {
    const [currentTab, setCurrentTab] = React.useState(null);
    const newTab = useSelector((state) => state.app.tab);

    React.useEffect(() => {
        if (currentTab != newTab) {
            setCurrentTab(newTab);
        }
    }, [newTab]);

    return (
        <Container>
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
                    value="/"
                    component={Link}
                    to="/"
                />
                <BottomNavigationAction
                    icon={<PieChartRoundedIcon />}
                    value="assets"
                    component={Link}
                    to="/assets"
                />
                <BottomNavigationAction
                    icon={<SupervisedUserCircleRoundedIcon />}
                    value="advisors"
                    component={Link}
                    to="/advisors"
                />
                <BottomNavigationAction
                    icon={<TrendingUpRoundedIcon />}
                    value="investments"
                    component={Link}
                    to="/investments"
                />
                <BottomNavigationAction
                    icon={<AccountCircleRoundedIcon />}
                    value="@"
                    component={Link}
                    to={`/@${config('app.user.nickname')}`}
                />
            </BottomNavigation>
        </Container>
    );
}
