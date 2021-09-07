import React from 'react';
import Cookie from 'universal-cookie';
import { useDispatch } from 'react-redux';
import { setTitle } from '../redux/actions/app';
import * as common from '../services/common';
import * as api from '../services/api';

export default function SignOut() {
    const dispatch = useDispatch();

    common.init();

    React.useEffect(() => {
        const cookie = new Cookie();
        const access_token = cookie.get('personal_access_token');

        /**
         * 페이지 타이틀을 설정합니다.
         * (주의) 라라벨에서 지정했던 내용들을 그대로 준수해야 합니다.
         */
        dispatch(setTitle('로그아웃'));

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

    return <></>;
}
