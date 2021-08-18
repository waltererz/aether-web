const _config = {
    palette: {
        primary: {
            main: '#282828',
        },

        secondary: {
            main: '#46437a',
        },

        bgColor: {
            main: '#fefefe',
        },

        kakao: {
            main: '#fee500',
        },

        naver: {
            main: '#03c75a',
        },

        google: {
            main: '#ea4335',
        },

        facebook: {
            main: '#1877f2',
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

    width: {
        primary: {
            desktop: '1024px',
            mobile: '1024px',
        },

        secondary: {
            desktop: '300px',
            mobile: '300px',
        },

        drawer: {
            desktop: '320px',
            mobile: '320px',
        }
    },

    height: {
        headerFixed: {
            desktop: '64px',
            mobile: '48px',
        },

        headerNavigation: {
            desktop: '40px',
            mobile: '40px',
        },

        bottomNavigation: {
            mobile: '50px',
        }
    },

    margin: {
        default: {
            desktop: '20px',
            mobile: '10px',
        }
    },

    zIndex: {
        drawer: 900,
        header: 1190,
        headerNavigation: 1180,
        bottomNavigation: 1190,
    },
}

export default _config;