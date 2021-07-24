const constants = {
    app: {
        name: '투자가 시작되는 곳, AETHER',
        description: '누구나 쉽고 재미있게 친구들과 함께 하는 투자의 세계에 빠질 수 있는 곳',
    },

    url: {
        app: 'http://www.erzsphilos.com',
        backend: 'http://back.erzsphilos.com',
        api: null,
    },

    route: {
        default: 1,
        home: 2,
        asset: 3,
        advisor: 4,
        devforum: 5,
    },

    redux: {
        app: {
            header: 'APP_HEADER',
            route: 'APP_ROUTE',
        },
    },
};

constants.url.api = constants.url.backend + '/api';

export default constants;
