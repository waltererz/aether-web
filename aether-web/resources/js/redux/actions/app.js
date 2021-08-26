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

export const setHeaderIcons = (headerIcons) => {
    return {
        type: reduxConstants.app.headerIcons,
        state: headerIcons,
    }
}

export const setURI = (uri) => {
    return {
        type: reduxConstants.app.uri,
        state: uri,
    }
}

export const setMobileDrawerOpen = (open) => {
    return {
        type: reduxConstants.app.mobileDrawerOpen,
        state: open,
    }
}

export const setComplete = (complete) => {
    return {
        type: reduxConstants.app.complete,
        state: complete,
    }
}