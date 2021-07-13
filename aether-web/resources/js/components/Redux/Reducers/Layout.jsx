import { LAYOUT_CURRENT_TAB, LAYOUT_DRAWER } from '../Constants';
import getTabCode from '../../Functions/GetTabCode';

const initialStates = {
    tab: getTabCode(),
    drawerOpen: false,
};

function layout(state = initialStates, action) {
    switch (action.type) {
        case LAYOUT_CURRENT_TAB:
            return { ...state, tab: action.state };
            break;
        case LAYOUT_DRAWER:
            return { ...state, drawerOpen: action.state };
    }

    return state;
}

export default layout;
