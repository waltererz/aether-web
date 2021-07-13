import React from 'react';
import { Link } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import HomeIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';

class MobileNavigation extends React.Component {
    render() {
        return (
            <div className="app-footer-mobile">
                <BottomNavigation className="bottomNavigation">
                    <BottomNavigationAction
                        icon={<HomeIcon />}
                        className="navButton"
                        component={Link}
                        to="/"
                    />
                    <BottomNavigationAction icon={<AppsIcon />} className="navButton" />
                </BottomNavigation>
            </div>
        );
    }
}

export default MobileNavigation;
