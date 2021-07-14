import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import CONSTANTS from '../Constants';

class MobileNavigation extends React.Component {
    render() {
        const { route } = this.props;
        let nav = 1;
        switch (route) {
            case CONSTANTS.LAYOUT.ROUTE.HOME:
            case CONSTANTS.LAYOUT.ROUTE.ADVISORS:
                nav = route;
                break;
        }
        return (
            <div className="app-footer-mobile">
                <BottomNavigation value={nav} className="bottomNavigation">
                    <BottomNavigationAction
                        icon={<HomeIcon />}
                        className="navButton"
                        value={CONSTANTS.LAYOUT.ROUTE.HOME}
                        component={Link}
                        to="/"
                    />
                    <BottomNavigationAction icon={<AppsIcon />} className="navButton" value={1} />
                    <BottomNavigationAction
                        icon={<SupervisorAccountIcon />}
                        className="navButton"
                        value={CONSTANTS.LAYOUT.ROUTE.ADVISORS}
                        component={Link}
                        to="/advisors"
                    />
                </BottomNavigation>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    route: state.layout.route,
});

export default connect(mapStateToProps)(MobileNavigation);
