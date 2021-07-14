import React from 'react';
import { connect } from 'react-redux';
import { Link, Switch, Route } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import { ReduxActionAppChangeTitle } from '../../Redux/Actions/App';
import {
    ReduxActionLayoutChangeRoute,
    ReduxActionLayoutToggleDrawer,
} from '../../Redux/Actions/Layout';
import Container from '../../Layout/ContainerStyles/FullContainer';
import getRouteCode from '../../Functions/GetRouteCode';
import Paper from '../../Functions/Paper';
import Home from './Home';
import Search from './Search';
import HeaderIcons from './HeaderIcons';

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
                        <ListItemText primary="어드바이저 검색" />
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
        const { route, changeRoute, changeTitle } = this.props;
        const current_route = getRouteCode();
        changeTitle('투자어드바이저');
        if (route != current_route) {
            changeRoute(current_route);
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
                    headerIcons={<HeaderIcons />}
                />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    route: state.layout.route,
});

const mapDispatchToProps = (dispatch) => ({
    changeTitle: (title) => dispatch(ReduxActionAppChangeTitle(title)),
    changeRoute: (route) => dispatch(ReduxActionLayoutChangeRoute(route)),
    toggleDrawer: (open) => dispatch(ReduxActionLayoutToggleDrawer(open)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Advisors);
