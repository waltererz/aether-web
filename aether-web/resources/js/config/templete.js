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
        secondary: 'linear-gradient(0deg, rgba(70, 67, 122, 1) 0%, rgba(73, 70, 128, 1) 35%, rgba(73, 70, 128, 1) 65%, rgba(70, 67, 122, 1) 100%)',
        silver: 'linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(247, 247, 247, 1) 40%, rgba(254, 254, 254, 1) 100%)',
    },

    fontFamily: {
        1: 'Noto Sans KR',
    }
}

export default _config;