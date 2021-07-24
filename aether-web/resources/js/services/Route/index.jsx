import constants from '../../constants';

export const getRouteCode = () => {
    const path = location.pathname;
    let route = constants.route.default;

    switch (true) {
        case /^\/$/g.test(path):
            route = constants.route.home;
            break;
        case /^\/assets((\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]+)*)$/g.test(path):
            route = constants.route.asset;
            break;
        case /^\/advisors((\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]+)*)$/g.test(path):
            route = constants.route.advisor;
            break;
        case /^\/developer((\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]+)*)$/g.test(path):
            route = constants.route.developer;
            break;
        case /^\/user((\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]+)*)$/g.test(path):
            route = constants.route.user;
            break;
    }

    return route;
};
