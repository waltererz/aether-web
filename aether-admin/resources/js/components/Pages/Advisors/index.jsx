import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';
import { ReduxActionLayoutCurrentTab } from '../../Redux/Actions/Layout';
import Container from '../../Layout/ContainerStyles/FullContainer';
import getTabCode from '../../Functions/GetTabCode';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListAltIcon from '@material-ui/icons/ListAlt';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import Avatar from '@material-ui/core/Avatar';

import HomePage from './Home';
import Create from './Create';
import CreateTheme from './CreateTheme';

class Content extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/advisors" component={HomePage} />
                <Route exact path="/advisors/page/:page" component={HomePage} />
                <Route exact path="/advisors/create" component={Create} />
                <Route exact path="/advisors/create/theme" component={CreateTheme} />
            </Switch>
        );
    }
}

class LeftSide extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="app-drawer-title">투자어드바이저 관리</div>
                <List className="app-drawer-list">
                    <Link to="/advisors">
                        <ListItem button>
                            <ListItemAvatar>
                                <Avatar>
                                    <ListAltIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="어드바이저 목록보기" />
                        </ListItem>
                    </Link>
                    <Link to="/advisors/create">
                        <ListItem button>
                            <ListItemAvatar>
                                <Avatar>
                                    <GroupAddIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="어드바이저 만들기" />
                        </ListItem>
                    </Link>
                    <Link to="/advisors/create/theme">
                        <ListItem button>
                            <ListItemAvatar>
                                <Avatar>
                                    <AccountBalanceWalletIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="투자성향 만들기" />
                        </ListItem>
                    </Link>
                </List>
            </React.Fragment>
        );
    }
}

class Home extends React.Component {
    componentDidMount() {
        const { tab, changeTab } = this.props;
        const current_tab = getTabCode();
        if (tab != current_tab) {
            changeTab(current_tab);
        }
    }
    render() {
        return (
            <React.Fragment>
                <Container content={<Content />} left={<LeftSide />} drawerBackground={true} />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    tab: state.layout.tab,
});

const mapDispatchToProps = (dispatch) => ({
    changeTab: (tab) => dispatch(ReduxActionLayoutCurrentTab(tab)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
