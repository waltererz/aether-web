import CONSTANT from '../../Constants';
import { LAYOUT_CURRENT_TAB } from '../Constants';

const path = window.location.pathname;
let tab = 0;

switch (true) {
    case /^\/$/.test(path):
        tab = CONSTANT.LAYOUT.TAB.HOME;
        break;
    case /^\/groups((\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]+)*)$/g.test(path):
        tab = CONSTANT.LAYOUT.TAB.GROUP;
        break;
    case /^\/users((\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]+)*)$/g.test(path):
        tab = CONSTANT.LAYOUT.TAB.USER;
        break;
}

const initialStates = {
    tab: tab,
};

function layout(state = initialStates, action) {
    switch (action.type) {
        case LAYOUT_CURRENT_TAB:
            return { tab: action.state };
    }

    return state;
}

export default layout;
