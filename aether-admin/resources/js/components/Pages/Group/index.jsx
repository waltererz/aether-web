import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListAltIcon from '@material-ui/icons/ListAlt';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import Avatar from '@material-ui/core/Avatar';
import { ReduxActionLayoutCurrentTab } from '../../Redux/Actions/Layout';
import Container from '../../Layout/ContainerStyles/FullContainer';
import getTabCode from '../../Functions/GetTabCode';
import Home from './Home';
import Create from './Create';

class Content extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/groups" component={Home} />
                <Route exact path="/groups/page/:page" component={Home} />
                <Route exact path="/groups/create" component={Create} />
            </Switch>
        );
    }
}

class LeftSide extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="app-drawer-title">사용자그룹 관리</div>
                <List className="app-drawer-list">
                    <Link to="/groups">
                        <ListItem button>
                            <ListItemAvatar>
                                <Avatar>
                                    <ListAltIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="사용자그룹 목록보기"
                                secondary="만들어진 모든 사용자그룹"
                            />
                        </ListItem>
                    </Link>
                    <Link to="/groups/create">
                        <ListItem button>
                            <ListItemAvatar>
                                <Avatar>
                                    <GroupAddIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="사용자그룹 만들기"
                                secondary="새로운 사용자그룹 생성"
                            />
                        </ListItem>
                    </Link>
                </List>
            </React.Fragment>
        );
    }
}

class Group extends React.Component {
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
                <Container content={<Content />} left={<LeftSide />} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Group);
