import * as API from '../API';

export const getDocumentTitle = async (path) => {
    return await API.post('data/document/title', { path: path }).then((response) => {
        if (response.data) {
            return response.data;
        } else {
            return '';
        }
    });
};
