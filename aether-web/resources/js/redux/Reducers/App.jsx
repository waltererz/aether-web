import constants from '../../constants';
import { getRouteCode } from '../../services/Route';

const initialStates = {
    title: '',
    route: getRouteCode(),
};

function app(state = initialStates, action) {
    switch (action.type) {
        case constants.redux.app.title:
            return { ...state, title: action.state };
            break;
        case constants.redux.app.route:
            return { ...state, route: action.state };
            break;
    }

    return state;
}

export default app;
