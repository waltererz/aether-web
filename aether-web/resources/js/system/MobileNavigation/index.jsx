import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PieChartOutlinedIcon from '@material-ui/icons/PieChartOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import constants from '../../constants';

class MobileNavigation extends React.Component {
    render() {
        const { reduxState } = this.props;
        let nav = constants.route.default;
        switch (reduxState.route) {
            case constants.route.home:
            case constants.route.user:
            case constants.route.asset:
            case constants.route.advisor:
            case constants.route.developer:
                nav = reduxState.route;
                break;
        }
        return (
            <div className="app-footer-mobile">
                <BottomNavigation value={nav} className="bottomNavigation">
                    <BottomNavigationAction
                        icon={<HomeOutlinedIcon />}
                        className="navButton"
                        value={constants.route.home}
                        component={Link}
                        to="/"
                    />
                    <BottomNavigationAction
                        icon={<PieChartOutlinedIcon />}
                        className="navButton"
                        value={constants.route.asset}
                        component={Link}
                        to="/assets"
                    />
                    <BottomNavigationAction
                        icon={<SupervisorAccountOutlinedIcon />}
                        className="navButton"
                        value={constants.route.advisor}
                        component={Link}
                        to="/advisors"
                    />
                    <BottomNavigationAction
                        icon={<AccountCircleOutlinedIcon />}
                        className="navButton"
                        value={constants.route.user}
                        component={Link}
                        to="/user"
                    />
                    <BottomNavigationAction
                        icon={<CodeOutlinedIcon />}
                        className="navButton"
                        value={constants.route.developer}
                        component={Link}
                        to="/developer"
                    />
                </BottomNavigation>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    reduxState: {
        route: state.app.route,
    },
});

export default connect(mapStateToProps)(MobileNavigation);
