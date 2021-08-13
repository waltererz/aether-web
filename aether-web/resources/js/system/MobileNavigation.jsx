import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PieChartRoundedIcon from '@material-ui/icons/PieChartRounded';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import TrendingUpRoundedIcon from '@material-ui/icons/TrendingUpRounded';
import constants from '../constants';

export default function MobileNavigation() {
    const [currentTab, setCurrentTab] = React.useState(null);
    const newTab = useSelector((state) => state.app.tab);

    React.useEffect(() => {
        if (currentTab != newTab) {
            setCurrentTab(newTab);
        }
    }, [newTab]);

    return (
        <div className="app-footer-mobile">
            <BottomNavigation value={currentTab} className="bottomNavigation">
                <BottomNavigationAction
                    icon={<HomeRoundedIcon />}
                    className="navButton"
                    value={constants.route.home}
                    component={Link}
                    to="/"
                />
                <BottomNavigationAction
                    icon={<PieChartRoundedIcon />}
                    className="navButton"
                    value={constants.route.asset}
                    component={Link}
                    to="/assets"
                />
                <BottomNavigationAction
                    icon={<SupervisedUserCircleRoundedIcon />}
                    className="navButton"
                    value={constants.route.advisor}
                    component={Link}
                    to="/advisors"
                />
                <BottomNavigationAction
                    icon={<TrendingUpRoundedIcon />}
                    className="navButton"
                    value={constants.route.investment}
                    component={Link}
                    to="/investment"
                />
                <BottomNavigationAction
                    icon={<AccountBoxRoundedIcon />}
                    className="navButton"
                    value={constants.route.user}
                    component={Link}
                    to="/user"
                />
            </BottomNavigation>
        </div>
    );
}
