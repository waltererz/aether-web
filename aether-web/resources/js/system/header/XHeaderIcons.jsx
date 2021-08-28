import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { styled } from '@material-ui/core';
import MuiLink from '@material-ui/core/Link';
import config from '../../config';

const Container = styled('div')(({ theme }) => ({
    cursor: 'pointer',
    boxSizing: 'border-box',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',

    [theme.breakpoints.up('xs')]: {
        '&.icons-desktop': {
            display: 'none',
        },

        '&.icons-mobile': {
            display: 'inline-flex',
        },
    },

    [theme.breakpoints.up('md')]: {
        '&.icons-desktop': {
            display: 'inline-flex',
        },

        '&.icons-mobile': {
            display: 'none',
        },
    },
}));

const IconContainer = styled('div')(({ theme }) => ({
    boxSizing: 'border-box',
    background: 'none',

    '& a': {
        display: 'flex',
        textDecoration: 'none',
        color: '#ffffff',

        '&:active': {
            transform: 'scale(0.9, 0.9)',
        },

        '& .MuiSvgIcon-root': {
            fontSize: '1.5rem',
        },
    },

    '&:first-of-type': {
        marginLeft: '0px',
    },

    '&:last-of-type': {
        marginRight: '0px',
    },

    [theme.breakpoints.up('xs')]: {
        margin: '0px 8px',
    },

    [theme.breakpoints.up('md')]: {
        margin: '0px 10px',
    },
}));

export default function XHeaderIcons() {
    const headerIcons = useSelector((state) => state.app.headerIcons);

    return (
        <React.Fragment>
            {headerIcons && 'desktop' in headerIcons && (
                <Container className="icons-desktop">
                    {headerIcons.desktop.map((item, index) => {
                        if ('auth' in item) {
                            if (
                                (item.auth === true && config('app.auth').length > 0) ||
                                (item.auth === false && config('app.auth').length === 0)
                            ) {
                                return (
                                    <IconContainer key={`desktop-icon-${index}`}>
                                        {'standalone' in item && item.standalone === true ? (
                                            <MuiLink href={item.path}>{item.icon}</MuiLink>
                                        ) : (
                                            <Link to={item.path}>{item.icon}</Link>
                                        )}
                                    </IconContainer>
                                );
                            }
                        } else {
                            return (
                                <IconContainer key={`desktop-icon-${index}`}>
                                    <Link to={item.path}>{item.icon}</Link>
                                </IconContainer>
                            );
                        }
                    })}
                </Container>
            )}
            {headerIcons && 'mobile' in headerIcons && (
                <Container className="icons-mobile">
                    {headerIcons.mobile.map((item, index) => {
                        if ('auth' in item) {
                            if (
                                (item.auth === true && config('app.auth').length > 0) ||
                                (item.auth === false && config('app.auth').length === 0)
                            ) {
                                return (
                                    <IconContainer key={`mobile-icon-${index}`}>
                                        <Link to={item.path}>{item.icon}</Link>
                                    </IconContainer>
                                );
                            }
                        } else {
                            return (
                                <IconContainer key={`mobile-icon-${index}`}>
                                    <Link to={item.path}>{item.icon}</Link>
                                </IconContainer>
                            );
                        }
                    })}
                </Container>
            )}
        </React.Fragment>
    );
}
