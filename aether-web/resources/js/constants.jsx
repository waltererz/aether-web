const constants = {
    url: {
        backend: 'http://back.erzsphilos.com',
        api: null,
    },
    route: {
        default: 1,
        home: 2,
        advisors: 3,
    },
    title: {
        base: ':: 투자가 시작되는 곳 Aether',
    },
};

constants.url.api = constants.url.backend + '/api';

export default constants;
