import React from 'react';
import { connect } from 'react-redux';
import { Link, Switch, Route } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import {
    ReduxActionLayoutCurrentTab,
    ReduxActionLayoutToggleDrawer,
} from '../../Redux/Actions/Layout';
import Container from '../../Layout/ContainerStyles/FullContainer';
import getTabCode from '../../Functions/GetTabCode';
import Paper from '../../Functions/Paper';
import Home from './Home';
import Search from './Search';

class Content extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/advisors" component={Home} />
                <Route exact path="/advisors/search" component={Search} />
            </Switch>
        );
    }
}

class Left extends React.Component {
    render() {
        const { toggleDrawer } = this.props;
        const clickLink = (event) => {
            toggleDrawer(false);
        };
        return (
            <List component="nav" className="app-drawer-list">
                <Link to="/advisors/search" onClick={clickLink}>
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar>
                                <FindInPageIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="찾아보기"
                            secondary="내 투자성향에 맞는 전문가 찾기"
                        />
                    </ListItem>
                </Link>
            </List>
        );
    }
}

class Right extends React.Component {
    render() {
        return <Paper>오른쪽</Paper>;
    }
}

class Advisors extends React.Component {
    componentDidMount() {
        const { tab, changeTab } = this.props;
        const current_tab = getTabCode();
        if (tab != current_tab) {
            changeTab(current_tab);
        }
    }

    render() {
        const { toggleDrawer } = this.props;
        return (
            <React.Fragment>
                <Container
                    content={<Content />}
                    left={<Left toggleDrawer={toggleDrawer} />}
                    right={<Right />}
                    drawerBackground={true}
                />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    tab: state.layout.tab,
});

const mapDispatchToProps = (dispatch) => ({
    changeTab: (tab) => dispatch(ReduxActionLayoutCurrentTab(tab)),
    toggleDrawer: (open) => dispatch(ReduxActionLayoutToggleDrawer(open)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Advisors);
