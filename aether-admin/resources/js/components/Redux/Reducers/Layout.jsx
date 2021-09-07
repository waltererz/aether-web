import { LAYOUT_CURRENT_TAB } from '../Constants';
import getTabCode from '../../Functions/GetTabCode';

const initialStates = {
    tab: getTabCode(),
};

function layout(state = initialStates, action) {
    switch (action.type) {
        case LAYOUT_CURRENT_TAB:
            return { tab: action.state };
    }

    return state;
}

export default layout;
