import axios from 'axios';
import config from '../config';

export const post = async (path, params = {}, token = null) => {
    return await axios.get(config('app.url.backend') + '/sanctum/csrf-cookie').then(async () => {
        const headers = {};

        headers['Content-type'] = 'application/json';
        
        if (token) {
            headers['Authorization'] = 'Bearer ' + token;
        }

        return await axios
            .post(config('app.url.api') + '/' + path, params, {
                headers: headers,
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