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
            'login' => [
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
            'portfolio' => [
                'name' => '포트폴리오',
                'description' => '현재 투자하고 있는 주식자산을 종합적으로 관리하세요.',
            ],
            'moneybook' => [
                'name' => '가계부',
                'description' => 'AETHER에서 자신의 모든 자산을 종합적으로 관리하세요.',
            ],
        ],
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
