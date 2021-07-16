import constants from '../Constants';
import { getRouteCode } from '../../services/Route';

const initialStates = {
    title: '',
    route: getRouteCode(),
};

const { APP } = constants;

function app(state = initialStates, action) {
    switch (action.type) {
        case APP.CHANGE_TITLE:
            return { ...state, title: action.state };
            break;
        case APP.CHANGE_ROUTE:
            return { ...state, route: action.state };
            break;
    }

    return state;
}

export default app;
