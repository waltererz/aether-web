import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PieChartOutlinedIcon from '@material-ui/icons/PieChartOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import Component from '../Component';

class MobileNavigation extends Component {
    render() {
        const { route } = this.props;
        let nav = 1;
        switch (route) {
            case this.Aether.constants.route.home:
            case this.Aether.constants.route.advisors:
                nav = route;
                break;
        }
        return (
            <div className="app-footer-mobile">
                <BottomNavigation value={nav} className="bottomNavigation">
                    <BottomNavigationAction
                        icon={<HomeOutlinedIcon />}
                        className="navButton"
                        value={this.Aether.constants.route.home}
                        component={Link}
                        to="/"
                    />
                    <BottomNavigationAction
                        icon={<PieChartOutlinedIcon />}
                        className="navButton"
                        value="portfolio"
                    />
                    <BottomNavigationAction
                        icon={<SupervisorAccountOutlinedIcon />}
                        className="navButton"
                        value={this.Aether.constants.route.advisors}
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
    route: state.layout.route,
});

export default connect(mapStateToProps)(MobileNavigation);
