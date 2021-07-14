import { APP_CHANGE_TITLE } from '../Constants';

const initialStates = {
    title: '',
};

function app(state = initialStates, action) {
    switch (action.type) {
        case APP_CHANGE_TITLE:
            return { title: action.state };
    }

    return state;
}

export default app;
