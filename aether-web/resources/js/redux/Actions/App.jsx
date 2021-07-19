import constants from '../../constants';

export const changeTitle = (title) => {
    return {
        type: constants.redux.app.title,
        state: title,
    };
};

export const changeRoute = (route) => {
    return {
        type: constants.redux.app.route,
        state: route,
    };
};
