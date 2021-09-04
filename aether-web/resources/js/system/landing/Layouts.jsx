import { styled } from '@material-ui/core';
import config from '../../config';

export const Container = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflowX: 'hidden',
    overflowY: 'scroll',
    boxSizing: 'border-box',
}));

export const Body = styled('div')(({ theme }) => ({
    display: 'flex',
    width: '100%',
    boxSizing: 'border-box',
    minHeight: '640px',

    [theme.breakpoints.up('xs')]: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
    },

    [theme.breakpoints.up('md')]: {
        maxWidth: '1000px',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'end',
        padding: '100px 0px 50px 0px',
    },
}));

export const Primary = styled('div')(({ theme }) => ({
    width: '100%',
    height: 'fit-content',
    boxSizing: 'border-box',

    [theme.breakpoints.up('xs')]: {
        maxWidth: '500px',
        margin: '20px',
    },

    [theme.breakpoints.up('md')]: {
        maxWidth: '500px',
        margin: '0px 10px 0px 0px',
    },
}));

export const Secondary = styled('div')(({ theme }) => ({
    width: '100%',
    height: 'fit-content',
    borderRadius: config('templete.borderRadius.1'),
    backgroundColor: '#ffffff',
    boxSizing: 'border-box',
    padding: '30px 20px 30px 20px',

    [theme.breakpoints.up('xs')]: {
        maxWidth: '500px',
        margin: '20px',
    },

    [theme.breakpoints.up('md')]: {
        maxWidth: '400px',
        margin: '0px 0px 0px 10px',
    },
}));

export const Footer = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    bottom: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    boxSizing: 'border-box',

    [theme.breakpoints.up('xs')]: {
        padding: '20px',
    },

    [theme.breakpoints.up('md')]: {
        padding: '30px',
    },
}));

export const FooterContent = styled('div')(({ theme }) => ({
    width: '100%',
    boxSizing: 'border-box',

    [theme.breakpoints.up('md')]: {
        maxWidth: '1000px',
    },
}));
