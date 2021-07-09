import { LAYOUT_CURRENT_TAB } from '../Constants';

const ReduxActionLayoutCurrentTab = (tab) => {
    return {
        type: LAYOUT_CURRENT_TAB,
        state: tab,
    };
};

export { ReduxActionLayoutCurrentTab };
