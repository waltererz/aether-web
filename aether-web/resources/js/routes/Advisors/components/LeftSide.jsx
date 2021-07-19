import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import FindInPageIcon from '@material-ui/icons/FindInPage';

class LeftSide extends React.Component {
    render() {
        return (
            <List component="nav" className="app-drawer-list">
                <Link to="/advisors/search">
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

export default LeftSide;