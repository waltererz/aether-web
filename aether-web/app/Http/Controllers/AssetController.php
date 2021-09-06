<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;

class AssetController extends Controller
{
    public function index(): View
    {
        /**
         * 뷰에서 사용되는 공통 변수를 설정합니다.
         * 공통 변수를 선언함에 있어 라라벨 변수를 우선시합니다.
         * 공통 변수를 설정하지 않으면 앱 기본 설정에 따라 자동으로 입력됩니다.
         * (주의) 라라벨에서의 뷰 공용 변수를 변경한다면 React 내 페이지 정보도 변경해야 합니다.
         */

        // 웹브라우저 페이지 타이틀
        view()->share('__title', '자산관리');

        // 페이지 설명글
        view()->share('__desc', '효율적으로 자산을 관리하는 최선의 방법을 제시합니다.');

        return view('asset.index');
    }

    public function moneybook(): View
    {
        /**
         * 뷰에서 사용되는 공통 변수를 설정합니다.
         * 공통 변수를 선언함에 있어 라라벨 변수를 우선시합니다.
         * 공통 변수를 설정하지 않으면 앱 기본 설정에 따라 자동으로 입력됩니다.
         * (주의) 라라벨에서의 뷰 공용 변수를 변경한다면 React 내 페이지 정보도 변경해야 합니다.
         */

        // 웹브라우저 페이지 타이틀
        view()->share('__title', '가계부');

        // 페이지 설명글
        view()->share('__desc', '사용하기 쉬운 복식부기 가계부를 만나보세요. (후잉가계부 지원)');

        return view('asset.moneybook');
    }
}
