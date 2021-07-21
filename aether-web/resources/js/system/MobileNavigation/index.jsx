import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PieChartOutlinedIcon from '@material-ui/icons/PieChartOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import SpeakerNotesOutlinedIcon from '@material-ui/icons/SpeakerNotesOutlined';
import constants from '../../constants';

class MobileNavigation extends React.Component {
    render() {
        const { reduxState } = this.props;
        let nav = constants.route.default;
        switch (reduxState.route) {
            case constants.route.home:
            case constants.route.asset:
            case constants.route.advisors:
            case constants.route.devforum:
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
                        to="/asset"
                    />
                    <BottomNavigationAction
                        icon={<SpeakerNotesOutlinedIcon />}
                        className="navButton"
                        value={constants.route.devforum}
                        component={Link}
                        to="/dev/forum"
                    />
                    <BottomNavigationAction
                        icon={<SupervisorAccountOutlinedIcon />}
                        className="navButton"
                        value={constants.route.advisors}
                        component={Link}
                        to="/advisors"
                    />
                    <BottomNavigationAction
                        icon={<AccountCircleOutlinedIcon />}
                        className="navButton"
                        value="account"
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
