import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';

export default function XHeaderIcons() {
    const headerIcons = useSelector((state) => state.app.headerIcons);

    const styles = {
        box: {
            cursor: 'pointer',
            boxSizing: 'border-box',
            userSelect: 'none',
            WebkitTapHighlightColor: 'transparent',

            '&.icons-desktop': {
                display: {
                    xs: 'none',
                    md: 'inline-flex',
                },
            },

            '&.icons-mobile': {
                display: {
                    xs: 'inline-flex',
                    md: 'none',
                },
            },
        },

        item: {
            boxSizing: 'border-box',
            background: 'none',
            margin: {
                xs: '0px 8px',
                md: '0px 10px',
            },

            '& a': {
                display: 'flex',
                textDecoration: 'none',
                color: '#ffffff',

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
        },
    };

    return (
        <React.Fragment>
            {headerIcons && 'desktop' in headerIcons && (
                <Box className="icons-desktop" sx={styles.box}>
                    {headerIcons.desktop.map((item, index) => {
                        return (
                            <Box className="icon" key={index} sx={styles.item}>
                                <Link to={item.to}>{item.icon}</Link>
                            </Box>
                        );
                    })}
                </Box>
            )}
            {headerIcons && 'mobile' in headerIcons && (
                <Box className="icons-mobile" sx={styles.box}>
                    {headerIcons.mobile.map((item, index) => {
                        return (
                            <Box className="icon" key={index} sx={styles.item}>
                                <Link to={item.to}>{item.icon}</Link>
                            </Box>
                        );
                    })}
                </Box>
            )}
        </React.Fragment>
    );
}
