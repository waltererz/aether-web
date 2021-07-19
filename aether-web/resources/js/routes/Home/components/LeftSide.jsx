import React from 'react';
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

class LeftSide extends React.Component {
    render() {
        return (
            <List component="nav" className="app-drawer-list">
                <Link to="/advisors">
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar>
                                <SupervisorAccountIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="투자어드바이저" />
                    </ListItem>
                </Link>
                <Link to="/">
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar>
                                <FolderSpecialIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="즐겨찾기" />
                    </ListItem>
                </Link>
                <Link to="/">
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar>
                                <LocalActivityIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="저장됨" />
                    </ListItem>
                </Link>
                <Link to="/">
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

export default LeftSide;
