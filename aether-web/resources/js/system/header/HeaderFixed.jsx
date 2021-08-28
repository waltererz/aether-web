import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from '@material-ui/core';
import MuiLink from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import XHeaderIcons from './XHeaderIcons';
import { setMobileDrawerOpen } from '../../redux/actions/app';
import config from '../../config';

const HeaderAppNameContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',

    [theme.breakpoints.up('xs')]: {
        fontSize: '1.2rem',
    },

    [theme.breakpoints.up('md')]: {
        fontSize: '1.5rem',
    },

    '& a': {
        display: 'block',
        color: '#ffffff',
        fontWeight: 'bold',
        textDecoration: 'none',
        userSelect: 'none',
        WebkitTapHighlightColor: 'transparent',
    },
}));

const MobileMenuIconContainer = styled('div')(({ theme }) => ({
    cursor: 'pointer',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',

    [theme.breakpoints.up('xs')]: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '15px',
    },

    [theme.breakpoints.up('md')]: {
        display: 'none',
    },

    '&:active': {
        transform: 'scale(0.9, 0.9)',
    },
}));

const HeaderIconContainer = styled('div')({
    display: 'flex',
});

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
                <HeaderAppNameContainer>
                    <MobileMenuIconContainer onClick={toggleMobileDrawer}>
                        <MenuIcon />
                    </MobileMenuIconContainer>
                    <MuiLink href="/">Aether</MuiLink>
                </HeaderAppNameContainer>
                <HeaderIconContainer>
                    <XHeaderIcons />
                </HeaderIconContainer>
            </Toolbar>
        </AppBar>
    );
}
