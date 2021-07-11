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
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import GroupWorkIcon from '@material-ui/icons/GroupWork';

class Header extends React.Component {
    render() {
        const { tab, changeTab } = this.props;

        return (
            <HideOnScroll breakpoint={Theme.breakpoints.values.md}>
                <AppBar position="fixed">
                    <div style={{ flexGrow: 1 }}>
                        <Tabs
                            value={tab}
                            onChange={changeTab}
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
                                icon={<GroupWorkIcon />}
                                value={CONSTANT.LAYOUT.TAB.GROUP}
                                component={Link}
                                to="/groups"
                            />
                            <Tab
                                icon={<PeopleAltIcon />}
                                value={CONSTANT.LAYOUT.TAB.USER}
                                component={Link}
                                to="/users"
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

const mapDispatchToProps = (dispatch) => ({
    changeTab: (event, tab) => dispatch(ReduxActionLayoutCurrentTab(tab)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
