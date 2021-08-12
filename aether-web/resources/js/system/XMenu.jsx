import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

export default function XMenu(props) {
    const MenuItems = () => {
        return props.items.map((item, index) => {
            return (
                <Link to={item.to} key={index}>
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar>{item.icon}</Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={item.text} />
                    </ListItem>
                </Link>
            );
        });
    };

    return (
        <List component="nav" className="app-drawer-list">
            <div className="items">
                <MenuItems />
            </div>
        </List>
    );
}