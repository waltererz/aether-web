import CONSTANTS from '../Constants';

const getRouteCode = () => {
    const path = location.pathname;
    let route = 1;

    switch (true) {
        case /^\/$/g.test(path):
            route = CONSTANTS.LAYOUT.ROUTE.HOME;
            break;
        case /^\/advisors((\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]+)*)$/g.test(path):
            route = CONSTANTS.LAYOUT.ROUTE.ADVISORS;
            break;
    }

    return route;
};

export default getRouteCode;
