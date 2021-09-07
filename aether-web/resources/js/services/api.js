import Cookie from 'universal-cookie';
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
                return response;
            });
    });
};

export const patch = async (path, params = {}, token) => {
    return await backend.get('sanctum/csrf-cookie').then(async () => {
        const headers = {};

        headers['Content-Type'] = 'application/json';
        headers['Authorization'] = 'Bearer ' + token;

        return await api
            .patch(path, params, {
                headers: headers,
            })
            .then(async (response) => {
                return response;
            });
    });
};

export const upload = async (path, data) => {
    const cookie = new Cookie();
    const access_token = cookie.get('personal_access_token');
    const unique_code = cookie.get('personal_unique_code');
    
    /**
     * 인증 쿠키가 존재하지 않으면 오류를 반환합니다.
     * 업로드 기능은 회원만 사용할 수 있습니다.
     */
    if (!access_token || !unique_code) {
        return false;
    }

    return await backend.get('sanctum/csrf-cookie').then(async () => {
        
        return await api.post('storage/' + path, data, {
            headers: {
                Authorization: 'Bearer ' + access_token,
                'Content-Type': 'multipart/form-data',
            },
        }).then(async (response) => {
            return response;
        }).catch((error) => {
            return error.response;
        });
    });
}