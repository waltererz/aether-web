import CONSTANTS from '../Constants';

const getTabCode = () => {
    const path = location.pathname;
    let tab = 0;

    switch (true) {
        case /^\/$/.test(path):
            tab = CONSTANTS.LAYOUT.TAB.HOME;
            break;
        case /^\/groups((\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]+)*)$/g.test(path):
            tab = CONSTANTS.LAYOUT.TAB.GROUP;
            break;
        case /^\/users((\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]+)*)$/g.test(path):
            tab = CONSTANTS.LAYOUT.TAB.USER;
            break;
    }

    return tab;
};

export default getTabCode;
