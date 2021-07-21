const constants = {
    url: {
        backend: 'http://back.erzsphilos.com',
        api: null,
    },

    route: {
        default: 1,
        home: 2,
        asset: 3,
        advisors: 4,
        devforum: 5,
    },

    redux: {
        app: {
            header: 'APP_HEADER',
            route: 'APP_ROUTE',
        },
    },

    title: '투자가 시작되는 곳, AETHER',
};

constants.url.api = constants.url.backend + '/api';

export default constants;
