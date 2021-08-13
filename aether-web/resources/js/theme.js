import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#282828',
        },
        secondary: {
            main: '#46437a',
        },
        kakao: {
            main: '#fee500',
        },
        naver: {
            main: '#03c75a'
        },
        google: {
            main: '#ea4335',
        },
        facebook: {
            main: '#1877f2',
        }
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

export default theme;