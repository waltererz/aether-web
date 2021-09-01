import { createInstance } from './axios';

const backend = createInstance('backend');
const api = createInstance();

export const post = async (path, params = {}, token = null) => {
    return await backend.get('sanctum/csrf-cookie').then(async () => {
        const headers = {};

        headers['Content-Type'] = 'application/json';

        if (token) {
            headers['Authorization'] = 'Bearer ' + token;
        }

        return await api
            .post(path, params, {
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