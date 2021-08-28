import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { styled } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import config from '../../config';

const Container = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        paddingTop: config('templete.margin.default.desktop'),
        paddingRight: 0,
        paddingBottom: '10px',
    },
}));

const MenuContainer = styled('div')({
    '&.selected': {
        '& .MuiListItem-root': {
            backgroundColor: '#eeeeee',
        },
    },

    '&:hover': {
        '& .MuiListItem-root': {
            backgroundColor: '#e9e9e9',
        },
    },

    '&:active': {
        '& .MuiListItem-root': {
            backgroundColor: '#e0e0e0',
        },
    },
});

export default function XMenu({ items }) {
    const currentURI = useSelector((state) => state.app.uri);
    const refContainer = React.useRef(null);

    React.useEffect(() => {
        // 경로가 변경될 때마다 리렌더링
    }, [currentURI]);

    const MenuItems = () => {
        return items.map((item, index) => {
            return (
                <MenuContainer
                    data-path={item.path}
                    className={window.location.pathname === item.path ? 'selected' : null}
                    key={`XMenu-submenus-${item.path}-${index}`}
                >
                    <Link to={item.path}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>{item.icon}</Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    </Link>
                </MenuContainer>
            );
        });
    };

    return (
        <List
            component="ul"
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
            <Container ref={refContainer}>
                <MenuItems />
            </Container>
        </List>
    );
}
