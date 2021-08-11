import constants from '../constants';

export const scrollTop = () => {
    window.scrollTo(0, 0);
};

export const changeTitle = (title) => {
    if (typeof title == 'string' && title.length > 0) {
        document.title = title + ' | ' + constants.app.name;
    } else {
        document.title = constants.app.name;
    }
};
