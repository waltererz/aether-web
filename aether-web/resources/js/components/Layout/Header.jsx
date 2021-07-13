import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CONSTANT from '../Constants';
import { ReduxActionLayoutCurrentTab } from '../Redux/Actions/Layout';
import HideOnScroll from '../Functions/HideOnScroll';
import Theme from './Theme';

import HomeIcon from '@material-ui/icons/Home';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

class Header extends React.Component {
    render() {
        const { tab } = this.props;

        return (
            <HideOnScroll breakpoint={Theme.breakpoints.values.md}>
                <AppBar position="fixed" className="aether-header">
                    <div style={{ flexGrow: 1 }}>
                        <Tabs
                            className="tabs"
                            value={tab}
                            centered={true}
                            indicatorColor="primary"
                            textColor="primary"
                        >
                            <Tab
                                icon={<HomeIcon />}
                                value={CONSTANT.LAYOUT.TAB.HOME}
                                component={Link}
                                to="/"
                            />
                            <Tab
                                icon={<LibraryBooksIcon />}
                                value={CONSTANT.LAYOUT.TAB.ADVISORS}
                                component={Link}
                                to="/advisors"
                            />
                        </Tabs>
                    </div>
                </AppBar>
            </HideOnScroll>
        );
    }
}

const mapStateToProps = (state) => ({
    tab: state.layout.tab,
});

export default connect(mapStateToProps)(Header);
