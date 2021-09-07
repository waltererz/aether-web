const _config = {
    palette: {
        primary: {
            main: '#5900d4',
        },

        secondary: {
            main: '#e30075',
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

        bgColor: {
            main: '#f5f5f5',
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
            desktop: '280px',
            mobile: '280px',
        }
    },

    height: {
        headerFixed: {
            desktop: '64px',
            mobile: '48px',
        },

        headerNavigation: {
            desktop: '50px',
            mobile: '50px',
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

    border: {
        1: '1px solid #eeeeee',
    },

    borderRadius: {
        1: '4px',
        2: '6px',
    },

    boxShadow: {
        1: '0 1px 4px 0 rgba(0, 0, 0, 0.15)',
        2: '0 2px 5px 1px rgba(0, 0, 0, 0.30)',
    },

    gradient: {
        primary: 'linear-gradient(90deg, rgba(89,0,212,1) 0%, rgba(227,0,117,1) 100%)',
        primary_0d: 'linear-gradient(0deg, rgba(78,0,190,1) 0%, rgba(89,0,212,1) 30%, rgba(89,0,212,1) 60%, rgba(78,0,190,1) 100%)',
    },

    fontFamily: {
        0: 'sans-serif',
        1: 'Noto Sans KR',
        2: 'Nanum Gothic',
    },
}

Object.freeze(_config);

export default _config;