import CONSTANT from '../../Constants';
import { LAYOUT_CURRENT_TAB } from '../Constants';

const path = window.location.pathname;
let tab = 0;

switch (true) {
    case /^\/$/.test(path):
        console.log('첫페이지');
        tab = CONSTANT.LAYOUT.TAB.HOME;
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
