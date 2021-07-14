import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import { ReduxActionAppChangeTitle } from '../../Redux/Actions/App';
import {
    ReduxActionLayoutChangeRoute,
    ReduxActionLayoutToggleDrawer,
} from '../../Redux/Actions/Layout';
import Container from '../../Layout/ContainerStyles/FullContainer';
import getRouteCode from '../../Functions/GetRouteCode';
import Paper from '../../Functions/Paper';

class Content extends React.Component {
    render() {
        return <Paper>투자정보를 얻는 가장 좋은 방법</Paper>;
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
                <Link to="/advisors" onClick={clickLink}>
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar>
                                <SupervisorAccountIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="투자어드바이저" />
                    </ListItem>
                </Link>
                <Link to="/" onClick={clickLink}>
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar>
                                <FolderSpecialIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="즐겨찾기" />
                    </ListItem>
                </Link>
                <Link to="/" onClick={clickLink}>
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar>
                                <LocalActivityIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="저장됨" />
                    </ListItem>
                </Link>
                <Link to="/" onClick={clickLink}>
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar>
                                <QuestionAnswerIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="다이렉트 메시지" />
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

class Home extends React.Component {
    componentDidMount() {
        const { route, changeRoute, changeTitle } = this.props;
        const current_route = getRouteCode();
        changeTitle('투자정보 소셜 서비스');
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
                    toggleDrawer={toggleDrawer}
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
