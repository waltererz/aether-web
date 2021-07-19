import constants from '../../constants';

export const setHeader = (header) => {
    return {
        type: constants.redux.app.header,
        state: header,
    };
};

export const setRoute = (route) => {
    return {
        type: constants.redux.app.route,
        state: route,
    };
};
