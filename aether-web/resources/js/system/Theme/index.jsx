import { createTheme } from '@material-ui/core/styles';

const breakpointValue = {
    xs: 0,
    sm: 1024,
    md: 1160,
    lg: 1366,
    xl: 1440,
};

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
        values: breakpointValue,
    },
});

export default theme;
