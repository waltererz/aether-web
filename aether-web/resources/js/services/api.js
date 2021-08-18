import axios from 'axios';
import config from '../config';

export const post = async (path, params = {}) => {
    return await axios.get(config('app.url.backend') + '/sanctum/csrf-cookie').then(async () => {
        return await axios
            .post(config('app.url.api') + '/' + path, params, {
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
