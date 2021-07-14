import { LAYOUT_CHANGE_ROUTE, LAYOUT_DRAWER } from '../Constants';
import getRouteCode from '../../Functions/GetRouteCode';

const initialStates = {
    route: getRouteCode(),
    drawerOpen: false,
};

function layout(state = initialStates, action) {
    switch (action.type) {
        case LAYOUT_CHANGE_ROUTE:
            return { ...state, route: action.state };
            break;
        case LAYOUT_DRAWER:
            return { ...state, drawerOpen: action.state };
    }

    return state;
}

export default layout;
