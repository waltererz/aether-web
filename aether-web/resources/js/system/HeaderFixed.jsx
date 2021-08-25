import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import XHeaderIcons from './XHeaderIcons';
import { setMobileDrawerOpen } from '../redux/actions/app';
import config from '../config';

export default function HeaderFixed() {
    const mobileDrawerOpen = useSelector((state) => state.app.mobileDrawerOpen);
    const dispatch = useDispatch();

    const toggleMobileDrawer = () => {
        dispatch(setMobileDrawerOpen(!mobileDrawerOpen));
    };

    return (
        <AppBar
            position="static"
            sx={{
                transition: 'none',
                background: config('templete.gradient.primary'),
                boxShadow: 'none',
                zIndex: config('templete.zIndex.header'),

                height: {
                    xs: config('templete.height.headerFixed.mobile'),
                    md: config('templete.height.headerFixed.desktop'),
                },
            }}
        >
            <Toolbar
                disableGutters={true}
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',

                    minHeight: {
                        xs: config('templete.height.headerFixed.mobile'),
                        md: config('templete.height.headerFixed.desktop'),
                    },

                    height: {
                        xs: config('templete.height.headerFixed.mobile'),
                        md: config('templete.height.headerFixed.desktop'),
                    },

                    paddingLeft: {
                        xs: config('templete.margin.default.mobile'),
                        md: config('templete.margin.default.desktop'),
                    },

                    paddingRight: {
                        xs: config('templete.margin.default.mobile'),
                        md: config('templete.margin.default.desktop'),
                    },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'nowrap',

                        fontSize: {
                            xs: '1.2rem',
                            md: '1.5rem',
                        },

                        '& a': {
                            display: 'block',
                            color: '#ffffff',
                            fontWeight: 'bold',
                            textDecoration: 'none',
                            userSelect: 'none',
                            WebkitTapHighlightColor: 'transparent',
                        },
                    }}
                >
                    <Box
                        onClick={toggleMobileDrawer}
                        sx={{
                            display: {
                                xs: 'flex',
                                md: 'none',
                            },

                            alignItems: {
                                xs: 'center',
                            },

                            marginRight: {
                                xs: '15px',
                            },

                            cursor: 'pointer',
                            userSelect: 'none',
                            WebkitTapHighlightColor: 'transparent',

                            '&:active': {
                                transform: 'scale(0.9, 0.9)',
                            },
                        }}
                    >
                        <MenuIcon />
                    </Box>
                    <MuiLink href="/">Aether</MuiLink>
                </Box>
                <Box sx={{ display: 'flex' }}>
                    <XHeaderIcons />
                </Box>
            </Toolbar>
        </AppBar>
    );
}
