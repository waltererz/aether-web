const _menuLinks = [
    {
        name: '종합자산관리',
        slug: 'asset',
        to: '/assets',
        children: [
            { name: '가계부', slug: 'moneybook', to: '/assets/moneybook' },
        ],
    },

    {
        name: '투자자산관리',
        slug: 'investment',
        to: '/investment',
        children: [
            {
                name: '포트폴리오 관리',
                slug: 'portfolio',
                to: '/investment/portfolio',
            }
        ]
    },

    {
        name: '투자어드바이저',
        slug: 'advisor',
        to: '/advisors',
        children: [
            {
                name: '전문가 검색', slug: 'searchadvisors', to: '/advisors/search'
            }
        ],
    },
    
    {
        name: '개발자페이지',
        slug: 'developer',
        to: '/developer',
        children: [
            { name: '개발자게시판', slug: 'developerforum', to: '/developer/forum' },
        ],
    },
];

export default _menuLinks;