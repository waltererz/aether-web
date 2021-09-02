import React from 'react';
import Cookie from 'universal-cookie';
import * as common from '../services/common';
import * as api from '../services/api';

export default function SignOut() {
    common.init();

    React.useEffect(() => {
        const cookie = new Cookie();
        const access_token = cookie.get('personal_access_token');

        api.post('auth/signout', {}, access_token)
            .then((response) => {
                if (response.status === 200) {
                    const cookie = new Cookie();
                    cookie.remove('personal_access_token');
                    cookie.remove('personal_unique_code');
                    window.location.href = '/';
                } else {
                    alert('로그아웃 실패! 관리자에게 문의하세요.');
                    window.location.href = '/';
                }
            })
            .catch((error) => {
                console.log(error.response);
            });
    }, []);

    return <React.Fragment></React.Fragment>;
}
