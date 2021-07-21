import constants from '../../constants';

export const getRouteCode = () => {
    const path = location.pathname;
    let route = constants.route.default;

    switch (true) {
        case /^\/$/g.test(path):
            route = constants.route.home;
            break;
        case /^\/asset((\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]+)*)$/g.test(path):
            route = constants.route.asset;
            break;
        case /^\/advisors((\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]+)*)$/g.test(path):
            route = constants.route.advisors;
            break;
        case /^\/dev\/forum((\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]+)*)$/g.test(path):
            route = constants.route.devforum;
            break;
    }

    return route;
};
