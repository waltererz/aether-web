import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';

class LeftSide extends React.Component {
    render() {
        return (
            <List component="nav" className="app-drawer-list">
                <Link to="/developer/forum">
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar>
                                <SpeakerNotesIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="테스트게시판" />
                    </ListItem>
                </Link>
            </List>
        );
    }
}

export default LeftSide;
