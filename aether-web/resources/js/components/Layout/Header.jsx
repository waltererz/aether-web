import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CONSTANT from '../Constants';
import HideOnScroll from '../Functions/HideOnScroll';
import Theme from './Theme';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import HeaderIcons from './Header/HeaderIcons';

class Header extends React.Component {
    render() {
        const { title, route, toggleDrawer } = this.props;

        return (
            <HideOnScroll breakpoint={Theme.breakpoints.values.md}>
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
                                value={CONSTANT.LAYOUT.ROUTE.HOME}
                                component={Link}
                                to="/"
                            />
                            <Tab
                                icon={<SupervisorAccountIcon />}
                                value={CONSTANT.LAYOUT.ROUTE.ADVISORS}
                                component={Link}
                                to="/advisors"
                            />
                        </Tabs>
                    </div>
                    <div className="header-icon-container">
                        {toggleDrawer ? (
                            <HeaderIcons toggleDrawer={toggleDrawer} />
                        ) : (
                            <HeaderIcons />
                        )}
                    </div>
                </AppBar>
            </HideOnScroll>
        );
    }
}

const mapStateToProps = (state) => ({
    title: state.app.title,
    route: state.layout.route,
});

export default connect(mapStateToProps)(Header);
