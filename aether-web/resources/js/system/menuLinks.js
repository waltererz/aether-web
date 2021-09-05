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
        slug: 'investments',
        to: '/investments',
        children: [
            {
                name: '포트폴리오 관리',
                slug: 'portfolio',
                to: '/investments/portfolio',
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
];

export default _menuLinks;