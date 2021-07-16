import constants from '../Constants';

const { APP } = constants;

export const changeTitle = (title) => {
    return {
        type: APP.CHANGE_TITLE,
        state: title,
    };
};

export const changeRoute = (route) => {
    return {
        type: APP.CHANGE_ROUTE,
        state: route,
    };
};
