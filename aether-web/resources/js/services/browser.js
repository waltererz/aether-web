import config from '../config';

export const scrollTop = () => {
    window.scrollTo(0, 0);
};

export const changeTitle = (title) => {
    if (typeof title == 'string' && title.length > 0) {
        document.title = title + ' | ' + config('app.name');
    } else {
        document.title = config('app.name');
    }
};