const _config = {
    name: window._aether.name,
    client: window._aether.client,
    auth: window._aether.auth,
    domain: window._aether.sessionDomain,
    url: {
        app: window._aether.baseUrl,
        backend: 'http://back.erzsphilos.com',
        api: 'http://back.erzsphilos.com/api',
    },
    route: {
        default: 1,
        home: 2,
        asset: 3,
        investment: 4,
        advisor: 5,
        developer: 6,
        user: 7,
    },
}

export default _config;