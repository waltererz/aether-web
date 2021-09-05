import reduxConstants from '../constants';

const initialStates = {
    auth: false,
    complete: false,
    title: null,
    tab: null,
    headerIcons: null,
    mobileDrawerOpen: false,
    uri: '/',
};

function app(state = initialStates, action) {
    switch (action.type) {
        case reduxConstants.app.tab:
            return { ...state, tab: action.state };
            break;
        case reduxConstants.app.title:
            return { ...state, title: action.state };
            break;
        case reduxConstants.app.headerIcons:
            return { ...state, headerIcons: action.state }
            break;
        case reduxConstants.app.mobileDrawerOpen:
            return { ...state, mobileDrawerOpen: action.state }
            break;
        case reduxConstants.app.complete:
            return { ...state, complete: action.state }
            break;
        case reduxConstants.app.auth:
            return { ...state, auth: action.state }
            break;
        case reduxConstants.app.uri:
            return { ...state, uri: action.state }
            break;
    }

    return state;
}

export default app;
