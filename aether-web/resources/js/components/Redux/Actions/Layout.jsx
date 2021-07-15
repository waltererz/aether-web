import { LAYOUT_CHANGE_ROUTE } from '../Constants';

const ReduxActionLayoutChangeRoute = (route) => {
    return {
        type: LAYOUT_CHANGE_ROUTE,
        state: route,
    };
};

export { ReduxActionLayoutChangeRoute };
