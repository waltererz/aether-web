import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cookie from 'universal-cookie';
import * as browser from './browser';
import * as api from './api';
import { setHeaderIcons, setAuth, setTab, setURI } from '../redux/actions/app';
import config from '../config';

export function init(props = {}) {
    const auth = useSelector((state) => state.app.auth);
    const currentUri = useSelector((state) => state.app.uri);
    const dispatch = useDispatch();

    useEffect(() => {
        // 헤더에 추가되는 아이콘 리스트를 리덕스 컨테이너에 저장
        if ('headerIcons' in props) {
            dispatch(setHeaderIcons(props.headerIcons));
        }

        // URL을 통해 현재 탭 코드를 구함
        // 첫 페이지인 경우에는 곧바로 탭 코드를 지정함
        if (window.location.pathname === '/') {
            dispatch(setTab('/'));
        } else {
            const currentPathArray = window.location.pathname.split('/');

            // 프로필 페이지인 경우 특별 처리
            if (currentPathArray[1][0] === '@') {
                dispatch(setTab('@'));
            } else {
                dispatch(setTab(currentPathArray[1]));
            }
        }

        // 웹브라우저 스크롤를 최상단으로 이동시킴
        browser.scrollTop();
    }, [currentUri]);

    useEffect(() => {
        const cookie = new Cookie();
        const access_token = cookie.get('personal_access_token');
        const unique_code = cookie.get('personal_unique_code');

        // 현재 경로를 리덕스 컨테이너에 저장합니다.
        dispatch(setURI(window.location.pathname));

        // 현재 로그인 유무를 확인합니다.
        if (!access_token || !unique_code) {
            dispatch(setAuth(false));
        }

        api.post('auth/check', { user_agent: config('app.agent') }, access_token).then((response) => {
            if (response.data.user_uuid === config('app.auth')) {
                if (auth !== true) {
                    dispatch(setAuth(true));
                }
            }
        }).catch((error) => {
            console.log(error.response);
        });
    })
}