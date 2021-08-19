import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as browser from './browser';
import { setTab, setHeaderIcons, setURI } from '../redux/actions/app';
import config from '../config';
import routes from '../routes';

export function init(props = {}) {
    const currentTab = useSelector((state) => state.app.tab);
    const currentURI = useSelector((state) => state.app.uri);
    const dispatch = useDispatch();

    useEffect(() => {
        // 현재 페이지의 메타데이터를 가져옴
        const metaData = getMetaData();

        // 리덕스 컨테이너에 저장된 값과 현재 페이지의 메타데이터가 다른 경우 리덕스 컨테이너 및 웹브라우저 타이틀 업데이트
        if (config('app.route')[metaData['tabName']] != currentTab) {
            // 메타데이터에 저장된 탭정보를 리덕스에 전달
            dispatch(setTab(config('app.route')[metaData['tabName']]));
        }
    }, [currentTab]);

    useEffect(() => {
        // 현재 페이지의 메타데이터를 가져옴
        const metaData = getMetaData();

        // 페이지 제목 변경
        browser.changeTitle(metaData['title']);

        // 헤더에 추가되는 아이콘 리스트를 리덕스 컨테이너에 저장
        if ('headerIcons' in props) {
            dispatch(setHeaderIcons(props.headerIcons));
        }

        // 웹브라우저 스크롤를 최상단으로 이동시킴
        browser.scrollTop();
    }, [currentURI]);

    useEffect(() => {
        dispatch(setURI(window.location.pathname));
    })
}

const getMetaData = () => {
    // 현재 디렉토리 경로를 배열로 저장
    const currentPathArray = window.location.pathname.split('/');

    // 현재 디렉토리에 해당하는 탭 이름을 문자열로 저장
    let currentTabName = 'default';

    // 현재 디렉토리에 해당하는 타이틀을 문자열로 저장
    let currentDocumentTitle = '';

    // 현재 경로가 어떤 탭 이름과 일치하는지 확인
    for (const [path, routeItem] of Object.entries(routes)) {
        if (path.replace('/', '') == currentPathArray[1]) {

            if ('tabName' in routeItem) {
                currentTabName = routeItem['tabName'];
            }

            if ('title' in routeItem) {
                currentDocumentTitle = routeItem['title'];
            }

            if ('children' in routeItem) {
                
                let depth = 2;
                let childItem = routeItem['children'];

                while (true) {
                    if (currentPathArray[depth] in childItem) {
                        childItem = childItem[currentPathArray[depth]];

                        if ('tabName' in childItem) {
                            currentTabName = childItem['tabName'];
                        }
            
                        if ('title' in childItem) {
                            currentDocumentTitle = childItem['title'];
                        }

                        if ('children' in childItem) {
                            childItem = childItem['children'];
                            depth++;
                        } else {
                            break;
                        }
                    } else {
                        break;
                    }
                }
            }
        } else {
            // 지정되지 않은 경로로 접근했을 경우 어떻게 처리해야하는가?
        }
    }

    return { tabName: currentTabName, title: currentDocumentTitle };
};