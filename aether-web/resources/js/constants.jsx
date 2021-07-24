const constants = {
    app: {
        name: window._aether.title,
        description: window._aether.description,
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
        developer: 5,
        user: 6,
    },

    redux: {
        app: {
            title: 'APP_DOCUMENT_TITLE',
            header: 'APP_HEADER',
            route: 'APP_ROUTE',
        },
    },
};

constants.url.api = constants.url.backend + '/api';

export default constants;
