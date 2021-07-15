import { LAYOUT_CHANGE_ROUTE, LAYOUT_DRAWER } from '../Constants';
import { getRouteCode } from '../../../services/Route';

const initialStates = {
    route: getRouteCode(),
};

function layout(state = initialStates, action) {
    switch (action.type) {
        case LAYOUT_CHANGE_ROUTE:
            return { route: action.state };
    }

    return state;
}

export default layout;
