import { LAYOUT_CHANGE_ROUTE, LAYOUT_DRAWER } from '../Constants';

const ReduxActionLayoutChangeRoute = (route) => {
    return {
        type: LAYOUT_CHANGE_ROUTE,
        state: route,
    };
};

const ReduxActionLayoutToggleDrawer = (open) => {
    return {
        type: LAYOUT_DRAWER,
        state: open,
    };
};

export { ReduxActionLayoutChangeRoute, ReduxActionLayoutToggleDrawer };
