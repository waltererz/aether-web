import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import Component from '../Component';

class Header extends Component {
    render() {
        const { title, route, headerIcons } = this.props;

        return (
            <AppBar position="fixed" className="aether-header">
                <Toolbar className="header-title">
                    <Typography variant="h6">{title}</Typography>
                </Toolbar>
                <div className="header-navigation">
                    <Tabs
                        className="tabs"
                        value={route}
                        centered={true}
                        indicatorColor="primary"
                        textColor="primary"
                    >
                        <Tab
                            icon={<HomeIcon />}
                            value={this.Aether.constants.route.home}
                            component={Link}
                            to="/"
                        />
                        <Tab
                            icon={<SupervisorAccountIcon />}
                            value={this.Aether.constants.route.advisors}
                            component={Link}
                            to="/advisors"
                        />
                    </Tabs>
                </div>
                <div className="header-icon-container">{headerIcons}</div>
            </AppBar>
        );
    }
}

const mapStateToProps = (state) => ({
    title: state.app.title,
    route: state.layout.route,
});

export default connect(mapStateToProps)(Header);
