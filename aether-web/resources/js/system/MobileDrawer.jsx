import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { styled } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemButton from '@material-ui/core/ListItemButton';
import ListItemText from '@material-ui/core/ListItemText';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import PersonIcon from '@material-ui/icons/Person';
import { setMobileDrawerOpen } from '../redux/actions/app';
import menuLinks from './menuLinks';
import config from '../config';

const UserInfoContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    padding: '10px',
    marginBottom: '20px',
});

const AvatarContainer = styled('div')({
    marginRight: '20px',

    '& .MuiAvatar-root': {
        width: '56px',
        height: '56px',
    },

    '& svg': {
        width: '32px',
        height: '32px',
    },
});

const UserNameContainer = styled('div')({
    flexGrow: 1,
    fontSize: '1.2em',
    textAlign: 'center',

    '& a': {
        color: '#dddddd',
    },
});

const SubMenuContainer = styled('div')({
    marginLeft: '40px',
});

export default function MobileDrawer() {
    const [mobileDrawerSubMenuOpen, setMobileDrawerSubMenuOpen] = React.useState({});
    const open = useSelector((state) => state.app.mobileDrawerOpen);
    const dispatch = useDispatch();

    const toggleMobileDrawer = () => {
        dispatch(setMobileDrawerOpen(!open));
    };

    const fetchDrawerMenuLinks = () => {
        return menuLinks.map((link) => {
            if (!(link.slug in mobileDrawerSubMenuOpen)) {
                setMobileDrawerSubMenuOpen({
                    ...mobileDrawerSubMenuOpen,
                    [link.slug]: false,
                });
            }

            return (
                <ListItem
                    dense={true}
                    disablePadding={true}
                    className={
                        'children' in link && mobileDrawerSubMenuOpen[link.slug]
                            ? 'has-children'
                            : ''
                    }
                    key={`mobileDrawerLink-${link.slug}`}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'nowrap',
                        alignItems: 'flex-start',
                        marginBottom: '5px',

                        '&.has-children': {
                            marginBottom: '10px',

                            '& .MuiListItemButton-root': {
                                paddingBottom: '0px',
                            },
                        },

                        '& a': {
                            color: '#ffffff',
                            textDecoration: 'none',
                        },
                    }}
                >
                    <ListItemButton disableGutters={true} disableTouchRipple={true}>
                        {'children' in link && (
                            <KeyboardArrowDown
                                sx={{
                                    marginRight: '10px',
                                    transition: '0.2s',
                                    transform: mobileDrawerSubMenuOpen[link.slug]
                                        ? 'rotate(-180deg)'
                                        : 'rotate(0)',
                                }}
                                onClick={() => {
                                    setMobileDrawerSubMenuOpen({
                                        ...mobileDrawerSubMenuOpen,
                                        [link.slug]: !mobileDrawerSubMenuOpen[link.slug],
                                    });
                                }}
                            />
                        )}
                        <Link to={link.to} onClick={toggleMobileDrawer}>
                            <ListItemText
                                primary={link.name}
                                sx={{
                                    '& .MuiTypography-root': {
                                        fontSize: '1.2em',
                                    },
                                }}
                            />
                        </Link>
                    </ListItemButton>
                    {mobileDrawerSubMenuOpen[link.slug] && (
                        <SubMenuContainer>
                            {link.children.map((sublink) => {
                                return (
                                    <ListItemButton
                                        disableGutters={true}
                                        disableTouchRipple={true}
                                        key={`mobileDrawerSubLink-${sublink.slug}`}
                                    >
                                        <Link to={sublink.to} onClick={toggleMobileDrawer}>
                                            <ListItemText
                                                primary={sublink.name}
                                                sx={{
                                                    '& .MuiTypography-root': {
                                                        fontSize: '1em',
                                                    },
                                                }}
                                            />
                                        </Link>
                                    </ListItemButton>
                                );
                            })}
                        </SubMenuContainer>
                    )}
                </ListItem>
            );
        });
    };

    return (
        <Drawer
            id="mobile-drawer"
            anchor="left"
            open={open}
            onClose={toggleMobileDrawer}
            transitionDuration={300}
            sx={{
                '& .MuiPaper-root': {
                    width: config('templete.width.drawer.mobile'),
                    boxSizing: 'border-box',
                    padding: '10px',
                    backgroundColor: '#000000',
                    color: '#ffffff',
                    fontSize: '0.8rem',
                },
            }}
        >
            <UserInfoContainer>
                <AvatarContainer>
                    <Avatar>
                        <PersonIcon />
                    </Avatar>
                </AvatarContainer>
                <UserNameContainer>
                    <Link to="/user/signin">로그인을 해주세요.</Link>
                </UserNameContainer>
            </UserInfoContainer>
            <div>
                <List>{fetchDrawerMenuLinks()}</List>
            </div>
        </Drawer>
    );
}
