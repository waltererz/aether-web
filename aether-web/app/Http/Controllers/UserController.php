<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;

class UserController extends Controller
{
    /**
     * 사용자 프로필을 출력하는 메소드
     * 
     * 공개 상태의 프로필이라면 로그인한 사용자라면 누구나 접속할 수 있으며,
     * 기본적으로 자신의 프로필에는 제한 없이 접근할 수 있습니다.
     * 비공개 상태의 프로필은 접근할 수 있으나 각종 개인정보는 모두 비공개 처리되어 출력됩니다.
     * 
     * @return \Illuminate\Contracts\View\View
     */
    public function profile(): View
    {
        /**
         * 뷰에서 사용되는 공통 변수를 설정합니다.
         * 공통 변수를 선언함에 있어 라라벨 변수를 우선시합니다.
         * 공통 변수를 설정하지 않으면 앱 기본 설정에 따라 자동으로 입력됩니다.
         * (주의) 라라벨에서의 뷰 공용 변수를 변경한다면 React 내 페이지 정보도 변경해야 합니다.
         */

        // 웹브라우저 페이지 타이틀
        // 기본적으로 프로필 페이지의 제목은 사용자 이름(실명)으로 자동 지정합니다.
        view()->share('__title', '');

        // 페이지 설명글
        // 사용자 소개글이 존재한다면 해당 설명글이 페이지 설명글로 대체됩니다.
        // 사용자 소개글이 존재하지 않는다면 기본 앱 설명글이 자동 입력됩니다.
        view()->share('__desc', '');

        return view('user.profile');
    }

    public function signout(): View
    {
        /**
         * 뷰에서 사용되는 공통 변수를 설정합니다.
         * 공통 변수를 선언함에 있어 라라벨 변수를 우선시합니다.
         * 공통 변수를 설정하지 않으면 앱 기본 설정에 따라 자동으로 입력됩니다.
         * (주의) 라라벨에서의 뷰 공용 변수를 변경한다면 React 내 페이지 정보도 변경해야 합니다.
         */

        // 웹브라우저 페이지 타이틀
        view()->share('__title', '로그아웃');

        // 페이지 설명글
        view()->share('__desc', '');

        return view('user.signout');
    }

    public function signup(): View
    {
        /**
         * 뷰에서 사용되는 공통 변수를 설정합니다.
         * 공통 변수를 선언함에 있어 라라벨 변수를 우선시합니다.
         * 공통 변수를 설정하지 않으면 앱 기본 설정에 따라 자동으로 입력됩니다.
         * (주의) 라라벨에서의 뷰 공용 변수를 변경한다면 React 내 페이지 정보도 변경해야 합니다.
         */

        // 웹브라우저 페이지 타이틀
        view()->share('__title', '회원가입');

        // 페이지 설명글
        view()->share('__desc', '');

        return view('user.signup');
    }

    public function signin(): View
    {
        /**
         * 뷰에서 사용되는 공통 변수를 설정합니다.
         * 공통 변수를 선언함에 있어 라라벨 변수를 우선시합니다.
         * 공통 변수를 설정하지 않으면 앱 기본 설정에 따라 자동으로 입력됩니다.
         * (주의) 라라벨에서의 뷰 공용 변수를 변경한다면 React 내 페이지 정보도 변경해야 합니다.
         */

        // 웹브라우저 페이지 타이틀
        view()->share('__title', '로그인');

        // 페이지 설명글
        view()->share('__desc', '');

        return view('user.signin');
    }
}
