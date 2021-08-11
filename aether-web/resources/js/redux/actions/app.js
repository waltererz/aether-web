import reduxConstants from '../constants';

export const setTab = (tab) => {
    return {
        type: reduxConstants.app.tab,
        state: tab,
    };
};

export const setTitle = (title) => {
    return {
        type: reduxConstants.app.title,
        state: title,
    };
};
