import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MuiLink from '@material-ui/core/Link';
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
    const currentUri = useSelector((state) => state.app.uri);
    const refContainer = React.useRef(null);

    const LinkContent = ({ icon, text }) => {
        return (
            <ListItem>
                <ListItemAvatar>
                    <Avatar>{icon}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={text} />
            </ListItem>
        );
    };

    const MenuItems = () => {
        return items.map((item, index) => {
            return (
                <MenuContainer
                    data-path={item.path}
                    data-standalone={item.standalone ? true : false}
                    className={currentUri === item.path ? 'selected' : null}
                    key={`XMenu-submenus-${item.path}-${index}`}
                >
                    {item.standalone ? (
                        <MuiLink href={item.path}>
                            <LinkContent icon={item.icon} text={item.text} />
                        </MuiLink>
                    ) : (
                        <Link to={item.path}>
                            <LinkContent icon={item.icon} text={item.text} />
                        </Link>
                    )}
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
