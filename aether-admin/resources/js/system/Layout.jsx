import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import GroupWorkRoundedIcon from '@mui/icons-material/GroupWorkRounded';
import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';
import ContactsRoundedIcon from '@mui/icons-material/ContactsRounded';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import GroupAddRoundedIcon from '@mui/icons-material/GroupAddRounded';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded';

export default function Layout({ children }) {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const drawerWidth = 320;

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <ListItem button component={Link} to="/user">
                    <ListItemIcon>
                        <PeopleAltRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="사용자 관리" />
                </ListItem>
                <List
                    sx={{
                        pt: 0,
                        m: '0px 20px',
                    }}
                >
                    <ListItem button component={Link} to="/user/list">
                        <ListItemIcon>
                            <ContactsRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="사용자 목록" />
                    </ListItem>
                    <ListItem button component={Link} to="/user/add">
                        <ListItemIcon>
                            <PersonAddRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="사용자 추가" />
                    </ListItem>
                </List>
            </List>
            <Divider />
            <List>
                <ListItem button component={Link} to="/group">
                    <ListItemIcon>
                        <GroupWorkRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="그룹 관리" />
                </ListItem>
                <List
                    sx={{
                        pt: 0,
                        m: '0px 20px',
                    }}
                >
                    <ListItem button component={Link} to="/group/list">
                        <ListItemIcon>
                            <GroupsRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="그룹 목록" />
                    </ListItem>
                    <ListItem button component={Link} to="/group/add">
                        <ListItemIcon>
                            <GroupAddRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="그룹 추가" />
                    </ListItem>
                </List>
            </List>
            <Divider />
            <List>
                <ListItem button component={Link} to="/advisor">
                    <ListItemIcon>
                        <SupervisedUserCircleRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="투자 어드바이저 관리" />
                </ListItem>
                <List
                    sx={{
                        pt: 0,
                        m: '0px 20px',
                    }}
                >
                    <ListItem button component={Link} to="/advisor/list">
                        <ListItemIcon>
                            <ViewListRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="투자 어드바이저 목록" />
                    </ListItem>
                    <ListItem button component={Link} to="/advisor/manage">
                        <ListItemIcon>
                            <PersonSearchRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="투자 어드바이저 관리" />
                    </ListItem>
                </List>
            </List>
        </div>
    );

    const Body = styled('div')(({ theme }) => ({
        boxSizing: 'border-box',

        [theme.breakpoints.up('xs')]: {
            padding: '5px',
        },

        [theme.breakpoints.up('lg')]: {
            marginLeft: `${drawerWidth}px`,
            padding: '10px',
        },
    }));

    return (
        <>
            <AppBar
                sx={{
                    width: {
                        lg: `calc(100% - ${drawerWidth}px)`,
                    },

                    ml: {
                        lg: `${drawerWidth}px`,
                    },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { lg: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        onClick={() => {
                            window.location.href = '/';
                        }}
                        sx={{
                            cursor: 'pointer',
                        }}
                    >
                        Aether Admin
                    </Typography>
                </Toolbar>
            </AppBar>
            <Body>
                <Toolbar />
                <div>{children}</div>
            </Body>
            <Drawer
                variant="temporary"
                open={drawerOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: {
                        xs: 'block',
                        lg: 'none',
                    },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: {
                        xs: 'none',
                        lg: 'block',
                    },

                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
            >
                {drawer}
            </Drawer>
        </>
    );
}
