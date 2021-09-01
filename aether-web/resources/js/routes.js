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
            signout: {
                title: '로그아웃',
            }
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
                children: {
                    create: {
                        title: '포트폴리오 만들기',
                    }
                }
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
};

export default routes;
