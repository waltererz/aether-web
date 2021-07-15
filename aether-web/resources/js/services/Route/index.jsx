import constants from '../../constants';

export const getRouteCode = () => {
    const path = location.pathname;
    let route = 1;

    switch (true) {
        case /^\/$/g.test(path):
            route = constants.route.home;
            break;
        case /^\/advisors((\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]+)*)$/g.test(path):
            route = constants.route.advisors;
            break;
    }

    return route;
};
