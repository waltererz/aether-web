<?php

return [
    'home' => [
        'name' => '',
    ],

    'user' => [
        'name' => '회원페이지',
        'routes' => [
            'signup' => [
                'name' => '회원가입',
            ],
            'signin' => [
                'name' => '회원 로그인',
            ],
        ],
    ],

    'developer' => [
        'name' => '개발자페이지',
        'description' => 'AETHER를 개발할 때에만 사용되는 임시 페이지입니다. 반드시 개발자만 접근하세요.',
        'routes' => [
            'forum' => [
                'name' => '개발자게시판',
                'description' => 'AETHER를 개발할 때에만 사용되는 임시 페이지입니다. 반드시 개발자만 접근하세요.',
            ]
        ],
    ],

    'assets' => [
        'name' => '자산관리',
        'description' => 'AETHER에서 자신의 모든 자산을 종합적으로 관리하세요.',
        'routes' => [
            'moneybook' => [
                'name' => '가계부',
                'description' => 'AETHER에서 자신의 모든 자산을 종합적으로 관리하세요.',
            ],
        ],
    ],

    'investment' => [
        'name' => '투자자산관리',
        'description' => '경제적 자유를 위해 체계적으로 투자자산을 관리하세요.',
        'routes' => [
            'portfolio' => [
                'name' => '포트폴리오',
                'description' => '포트폴리오를 직접 만들어 재미있게 투자하세요.',
            ]
        ]
    ],

    'advisors' => [
        'name' => '투자어드바이저',
        'description' => '나만의 투자전문가와 함께 안정적인 노후를 준비하세요.',
        'routes' => [
            'search' => [
                'name' => '투자어드바이저 찾기',
                'description' => '나만의 투자전문가와 함께 안정적인 노후를 준비하세요.',
            ],
        ],
    ],
];
