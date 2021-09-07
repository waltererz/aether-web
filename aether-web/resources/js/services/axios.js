import axios from 'axios';
import config from '../config';

export function createInstance(type = 'api') {
    return axios.create({
        baseURL: (type == 'api' ? config('app.url.api') : config('app.url.backend')) + '/',
        withCredentials: true,
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
    });
}