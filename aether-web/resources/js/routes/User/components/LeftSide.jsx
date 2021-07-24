import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import AssignmentIcon from '@material-ui/icons/Assignment';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

class LeftSide extends React.Component {
    render() {
        return (
            <List component="nav" className="app-drawer-list">
                <Link to="/user/signup">
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar>
                                <AssignmentIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="회원가입" />
                    </ListItem>
                </Link>
                <Link to="/user/login">
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar>
                                <VpnKeyIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="로그인" />
                    </ListItem>
                </Link>
            </List>
        );
    }
}

export default LeftSide;
