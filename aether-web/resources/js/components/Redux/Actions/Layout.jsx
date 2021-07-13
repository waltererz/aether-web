import { LAYOUT_CURRENT_TAB, LAYOUT_DRAWER } from '../Constants';

const ReduxActionLayoutCurrentTab = (tab) => {
    return {
        type: LAYOUT_CURRENT_TAB,
        state: tab,
    };
};

const ReduxActionLayoutToggleDrawer = (open) => {
    return {
        type: LAYOUT_DRAWER,
        state: open,
    };
};

export { ReduxActionLayoutCurrentTab, ReduxActionLayoutToggleDrawer };
