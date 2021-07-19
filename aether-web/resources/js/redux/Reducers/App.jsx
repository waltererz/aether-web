import constants from '../../constants';
import { getRouteCode } from '../../services/Route';

const initialStates = {
    header: '',
    route: getRouteCode(),
};

function app(state = initialStates, action) {
    switch (action.type) {
        case constants.redux.app.header:
            return { ...state, header: action.state };
            break;
        case constants.redux.app.route:
            return { ...state, route: action.state };
            break;
    }

    return state;
}

export default app;
