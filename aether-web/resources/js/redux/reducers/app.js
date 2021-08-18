import reduxConstants from '../constants';

const initialStates = {
    title: null,
    tab: null,
    headerIcons: null,
    uri: '/',
    mobileDrawerOpen: false,
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
        case reduxConstants.app.uri:
            return { ...state, uri: action.state }
            break;    
        case reduxConstants.app.mobileDrawerOpen:
            return { ...state, mobileDrawerOpen: action.state }
            break;
    }

    return state;
}

export default app;
