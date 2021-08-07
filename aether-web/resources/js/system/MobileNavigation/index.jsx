import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PieChartRoundedIcon from '@material-ui/icons/PieChartRounded';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import CodeRoundedIcon from '@material-ui/icons/CodeRounded';
import constants from '../../variables/constants';

class MobileNavigation extends React.Component {
    render() {
        const { reduxState } = this.props;

        return (
            <div className="app-footer-mobile">
                <BottomNavigation value={reduxState.tab} className="bottomNavigation">
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
                        icon={<CodeRoundedIcon />}
                        className="navButton"
                        value={constants.route.developer}
                        component={Link}
                        to="/developer"
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
}

const mapStateToProps = (state) => ({
    reduxState: {
        tab: state.app.tab,
    },
});

export default connect(mapStateToProps)(MobileNavigation);
