import { createTheme } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

const breakpointValue = {
    xs: 0,
    sm: 1024,
    md: 1160,
    lg: 1366,
    xl: 1440,
};

const breakpoints = createBreakpoints({
    unit: 'px',
    step: 5,
    values: {
        xs: breakpointValue.xs,
        sm: breakpointValue.sm,
        md: breakpointValue.md,
        lg: breakpointValue.lg,
        xl: breakpointValue.xl,
    },
});

const Theme = createTheme({
    palette: {
        primary: {
            main: '#2d304b',
        },
        secondary: {
            main: '#9c27b0',
        },
    },
    breakpoints: {
        values: breakpointValue,
    },
    overrides: {
        MuiTab: {
            root: {
                [breakpoints.up('xs')]: {
                    minWidth: 100,
                },
                [breakpoints.up('md')]: {
                    minWidth: 140,
                },
            },
        },
    },
});

export default Theme;
