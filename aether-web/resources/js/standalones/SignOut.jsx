import React from 'react';
import Cookie from 'universal-cookie';
import * as common from '../services/common';
import * as api from '../services/api';
import * as browser from '../services/browser';

export default function SignOut() {
    common.init();

    React.useEffect(() => {
        const access_token = browser.getCookie('personal_access_token');
        const unique_code = browser.getCookie('personal_unique_code');

        api.post(
            'auth/signout',
            {
                access_token: access_token,
                unique_code: unique_code,
            },
            access_token,
        ).then((response) => {
            if (response.data) {
                const cookie = new Cookie();
                cookie.remove('personal_access_token');
                cookie.remove('personal_unique_code');
                window.location.href = '/';
            } else {
                return console.log('알 수 없는 오류 발생!');
            }
        });
    }, []);

    return <React.Fragment></React.Fragment>;
}
