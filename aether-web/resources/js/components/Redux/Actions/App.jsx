import { APP_CHANGE_TITLE } from '../Constants';

const ReduxActionAppChangeTitle = (title) => {
    return {
        type: APP_CHANGE_TITLE,
        state: title,
    };
};

export { ReduxActionAppChangeTitle };
