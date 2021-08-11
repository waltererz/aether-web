import reduxConstants from '../constants';

const initialStates = {
    title: null,
    tab: null,
};

function app(state = initialStates, action) {
    switch (action.type) {
        case reduxConstants.app.tab:
            return { ...state, tab: action.state };
            break;
        case reduxConstants.app.title:
            return { ...state, title: action.state };
            break;
    }

    return state;
}

export default app;
