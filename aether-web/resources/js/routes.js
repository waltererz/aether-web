const routes = {
    '/': {
        tabName: 'home',
        component: 'Home',
        title: '첫 페이지',
    },

    user: {
        tabName: 'user',
        component: 'User',
        title: '마이페이지',
        children: {
            signup: {
                title: '회원가입',
            },
            signin: {
                title: '회원로그인',
            },
        },
    },

    assets: {
        tabName: 'asset',
        component: 'Asset',
        title: '자산관리',
        children: {
            moneybook: {
                title: '가계부',
            },
        },
    },

    investment: {
        tabName: 'investment',
        component: 'Investment',
        title: '투자자산관리',
        children: {
            portfolio: {
                title: '포트폴리오',
            },
        }
    },

    advisors: {
        tabName: 'advisor',
        component: 'Advisor',
        title: '투자어드바이저',
        children: {
            search: {
                title: '투자어드바이저 검색',
            },
        },
    },

    developer: {
        tabName: 'developer',
        component: 'Developer',
        title: '개발자페이지',
        children: {
            forum: {
                title: '개발자포럼',
            },
        },
    },
};

export default routes;
