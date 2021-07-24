import axios from 'axios';
import constants from '../../constants';

export const post = async (path, params = {}) => {
    return await axios.get(constants.url.backend + '/sanctum/csrf-cookie').then(async () => {
        return await axios
            .post(constants.url.api + '/' + path, params, {
                headers: { 'Content-type': 'application/json' },
            })
            .then(async (response) => {
                if (response.data) {
                    return response;
                } else {
                    return false;
                }
            });
    });
};
