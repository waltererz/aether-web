const _config = {
    palette: {
        primary: {
            main: '#6a00ff',
        },

        secondary: {
            main: '#9e2bff',
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
    },

    gradient: {
        primary: 'linear-gradient(90deg, rgba(158,43,255,1) 0%, rgba(106,0,255,1) 100%)',
        primary_0d: 'linear-gradient(0deg, rgba(96,0,231,1) 0%, rgba(106,0,255,1) 35%, rgba(106,0,255,1) 65%, rgba(96,0,231,1) 100%)',
    },

    fontFamily: {
        1: 'Noto Sans KR',
    }
}

export default _config;