import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListAltIcon from '@material-ui/icons/ListAlt';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import MuiLink from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import Container from '../../Layout/ContainerStyles/FullContainer';
import Home from './Home';
import Create from './Create';

const Content = () => {
    return (
        <Switch>
            <Route exact path="/groups" component={Home} />
            <Route exact path="/groups/create" component={Create} />
        </Switch>
    );
};

const LeftSide = () => {
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
};

const Group = () => {
    return (
        <React.Fragment>
            <Container content={<Content />} left={<LeftSide />} />
        </React.Fragment>
    );
};

export default Group;
