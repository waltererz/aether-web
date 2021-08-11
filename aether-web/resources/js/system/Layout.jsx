import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#3c007e',
        },
        secondary: {
            main: '#9c27b0',
        },
    },

    breakpoints: {
        values: {
            xs: 0,
            sm: 1024,
            md: 1160,
            lg: 1366,
            xl: 1440,
        },
    },
});

export default function Layout(props) {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
        </React.Fragment>
    );
}
