import React from 'react';
import * as common from '../services/common';
import * as api from '../services/api';
import * as browser from '../services/browser';

export default function SignOut() {
    common.init();

    React.useEffect(() => {
        api.post('auth/signout', {}, browser.getCookie('personal_access_token')).then(
            (response) => {
                if (response.data) {
                    window.location.href = '/';
                } else {
                    console.log('알 수 없는 오류 발생');
                }
            },
        );
    }, []);

    return '로그아웃';
}
