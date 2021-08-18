import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import config from '../config';

export default function XMenu({ items }) {
    const MenuItems = () => {
        return items.map((item, index) => {
            return (
                <Link to={item.path} key={`XMenu-submenus-${item.path}-${index}`}>
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
        <List
            component="nav"
            className="app-drawer-list"
            sx={{
                overflowX: 'hidden',
                overflowY: 'auto',
                padding: '0px',
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',

                '&::-webkit-scrollbar': {
                    display: 'none',
                },

                '& .MuiListItem-root': {
                    borderRadius: '5px',

                    '& .MuiAvatar-root': {
                        backgroundColor: '#ffffff',
                        color: '#aaaaaa',
                        border: '1px solid #cccccc',
                    },
                },
            }}
        >
            <Box
                component="div"
                className="items"
                sx={{
                    paddingTop: {
                        md: config('templete.margin.default.desktop'),
                    },

                    paddingRight: {
                        md: 0,
                    },

                    paddingBottom: {
                        md: '10px',
                    },

                    paddingLeft: {
                        md: config('templete.margin.default.desktop'),
                    },
                }}
            >
                <MenuItems />
            </Box>
        </List>
    );
}
