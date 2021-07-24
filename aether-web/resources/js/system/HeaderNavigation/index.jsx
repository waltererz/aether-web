import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import PieChartIcon from '@material-ui/icons/PieChart';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import CodeIcon from '@material-ui/icons/Code';

import constants from '../../constants';

class HeaderNavigation extends React.Component {
    render() {
        const { reduxState, headerIcons } = this.props;
        return (
            <AppBar position="fixed" className="aether-header">
                <Toolbar className="header-title">
                    <Typography variant="h6">{reduxState.header}</Typography>
                </Toolbar>
                <div className="header-navigation">
                    <Tabs
                        className="tabs"
                        value={reduxState.route}
                        centered={true}
                        indicatorColor="primary"
                        textColor="primary"
                    >
                        <Tab
                            className="tab"
                            value={constants.route.default}
                            style={{ display: 'none' }}
                        />
                        <Tab
                            className="tab"
                            value={constants.route.user}
                            style={{ display: 'none' }}
                        />
                        <Tab
                            className="tab"
                            icon={<HomeIcon />}
                            value={constants.route.home}
                            component={Link}
                            to="/"
                        />
                        <Tab
                            className="tab"
                            icon={<PieChartIcon />}
                            value={constants.route.asset}
                            component={Link}
                            to="/assets"
                        />
                        <Tab
                            className="tab"
                            icon={<SupervisorAccountIcon />}
                            value={constants.route.advisor}
                            component={Link}
                            to="/advisors"
                        />
                        <Tab
                            className="tab"
                            icon={<CodeIcon />}
                            value={constants.route.developer}
                            component={Link}
                            to="/developer"
                        />
                    </Tabs>
                </div>
                <div className="header-icon-container">{headerIcons}</div>
            </AppBar>
        );
    }
}

const mapStateToProps = (state) => ({
    reduxState: {
        header: state.app.header,
        route: state.app.route,
    },
});

export default connect(mapStateToProps)(HeaderNavigation);
