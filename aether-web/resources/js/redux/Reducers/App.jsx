import constants from '../../variables/constants';

const initialStates = {
    title: null,
    tab: null,
};

function app(state = initialStates, action) {
    switch (action.type) {
        case constants.redux.app.tab:
            return { ...state, tab: action.state };
            break;
        case constants.redux.app.title:
            return { ...state, title: action.state };
            break;
    }

    return state;
}

export default app;
