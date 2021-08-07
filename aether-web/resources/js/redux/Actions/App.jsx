import constants from '../../variables/constants';

export const setTab = (tab) => {
    return {
        type: constants.redux.app.tab,
        state: tab,
    };
};

export const setTitle = (title) => {
    return {
        type: constants.redux.app.title,
        state: title,
    };
};
