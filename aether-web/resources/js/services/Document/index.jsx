import routes from '../../variables/routes';

export const getMetaData = () => {
    // 현재 디렉토리 경로를 배열로 저장
    const currentPathArray = window.location.pathname.split('/');

    // 현재 디렉토리에 해당하는 탭 이름을 문자열로 저장
    let currentTabName = 'default';

    // 현재 디렉토리에 해당하는 타이틀을 문자열로 저장
    let currentDocumentTitle = '';

    // 현재 경로가 어떤 탭 이름과 일치하는지 확인
    for (const [path, routeItem] of Object.entries(routes)) {
        if (path.replace('/', '') == currentPathArray[1]) {
            // routes 오브젝트에 지정되어 있는 해당 경로의 탭 이름을 변수에 저장
            // 탭 이름이 지정되지 않은 경우에는 그대로 'default' 저장
            if ('tabName' in routeItem) {
                currentTabName = routeItem['tabName'];
            }

            // 페이지 타이틀이 지정되어 있는 경우 변수에 저장
            if ('title' in routeItem) {
                currentDocumentTitle = routeItem['title'];
            }

            // 하위 경로가 지정되어 있는 경우 모든 경우의 수를 판단 (무한루프)
            let pointer = 2;
            if ('children' in routeItem) {
                let childRouteItem = null;
                while (true) {
                    if (!childRouteItem) {
                        childRouteItem = routeItem['children'];
                    } else {
                        if ('children' in childRouteItem) {
                            childRouteItem = childRouteItem['children'];
                        }
                    }

                    // 현재 웹브라우저에 입력된 경로의 깊이 만큼만 루프를 수행
                    if (pointer in currentPathArray) {
                        if (currentPathArray[pointer] in childRouteItem) {
                            // 탭 이름이 지정되어 있는 경우 현재 탭 이름으로 저장
                            if ('tabName' in childRouteItem[currentPathArray[pointer]]) {
                                currentTabName =
                                    childRouteItem[currentPathArray[pointer]]['tabName'];
                            }

                            // 페이지 타이틀이 지정되어 있는 경우 변수에 저장
                            if ('title' in routeItem) {
                                currentDocumentTitle =
                                    childRouteItem[currentPathArray[pointer]]['title'];
                            }
                        }
                        pointer++;
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
