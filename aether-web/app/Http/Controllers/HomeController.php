<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Contracts\View\View;

class HomeController extends Controller
{
    public function index(Request $request): View
    {
        /**
         * 회원 로그인 여부에 따라 다른 페이지를 보여줍니다.
         * 로그인을 하지 않았을 경우에는 랜딩 페이지,
         * 로그인이 완료된 경우에만 메인 페이지로 이동합니다.
         */

        /**
         * 랜딩 페이지 출력 유무
         * Authenticate 미들웨어에서 로그인 인증 여부를 확인 후 해당 변수를 설정합니다.
         * 
         * @var boolean $landing
         */
        $landing = $request->attributes->get('landing');

        /**
         * 뷰에서 사용되는 공통 변수를 설정합니다.
         * 공통 변수를 선언함에 있어 라라벨 변수를 우선시합니다.
         * 공통 변수를 설정하지 않으면 앱 기본 설정에 따라 자동으로 입력됩니다.
         * (주의) 라라벨에서의 뷰 공용 변수를 변경한다면 React 내 페이지 정보도 변경해야 합니다.
         */

        // 웹브라우저 페이지 타이틀
        view()->share('__title', '');

        // 페이지 설명글
        view()->share('__desc', '');

        if ($landing) {
            return view('landing');
        } else {
            return view('index');
        }
    }
}
