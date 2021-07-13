import CONSTANTS from '../Constants';

const getTabCode = () => {
    const path = location.pathname;
    let tab = 0;

    switch (true) {
        case /^\/$/g.test(path):
            tab = CONSTANTS.LAYOUT.TAB.HOME;
            break;
        case /^\/advisors((\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]+)*)$/g.test(path):
            tab = CONSTANTS.LAYOUT.TAB.ADVISORS;
            break;
    }

    return tab;
};

export default getTabCode;
