import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import config from '../../config';

export default function XMenu({ items }) {
    const currentURI = useSelector((state) => state.app.uri);
    const refContainer = React.useRef(null);

    React.useEffect(() => {
        // 경로가 변경될 때마다 리렌더링
    }, [currentURI]);

    const MenuItems = () => {
        return items.map((item, index) => {
            return (
                <Box
                    data-path={item.path}
                    className={window.location.pathname === item.path ? 'selected' : null}
                    key={`XMenu-submenus-${item.path}-${index}`}
                    sx={{
                        '&:hover': {
                            '& .MuiListItem-root': {
                                backgroundColor: '#f5f5f5',
                            },
                        },

                        '&.selected': {
                            '& .MuiListItem-root': {
                                backgroundColor: '#efefef',
                            },
                        },
                    }}
                >
                    <Link to={item.path}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>{item.icon}</Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    </Link>
                </Box>
            );
        });
    };

    return (
        <List
            component="nav"
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
                ref={refContainer}
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
