<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;

class InvestmentController extends Controller
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
        view()->share('__title', '투자자산 관리');

        // 페이지 설명글
        view()->share('__desc', '효율적인 투자자산 관리방법을 제시합니다.');

        return view('investment.index');
    }

    public function portfolio(): View
    {
        /**
         * 뷰에서 사용되는 공통 변수를 설정합니다.
         * 공통 변수를 선언함에 있어 라라벨 변수를 우선시합니다.
         * 공통 변수를 설정하지 않으면 앱 기본 설정에 따라 자동으로 입력됩니다.
         * (주의) 라라벨에서의 뷰 공용 변수를 변경한다면 React 내 페이지 정보도 변경해야 합니다.
         */

        // 웹브라우저 페이지 타이틀
        view()->share('__title', '포트폴리오 관리');

        // 페이지 설명글
        view()->share('__desc', '철저한 계산 방법으로 투자자산을 분산해 관리하세요.');

        return view('investment.portfolio');
    }

    public function createPortfolio(): View
    {
        /**
         * 뷰에서 사용되는 공통 변수를 설정합니다.
         * 공통 변수를 선언함에 있어 라라벨 변수를 우선시합니다.
         * 공통 변수를 설정하지 않으면 앱 기본 설정에 따라 자동으로 입력됩니다.
         * (주의) 라라벨에서의 뷰 공용 변수를 변경한다면 React 내 페이지 정보도 변경해야 합니다.
         */

        // 웹브라우저 페이지 타이틀
        view()->share('__title', '포트폴리오 만들기');

        // 페이지 설명글
        view()->share('__desc', '철저한 계산 방법으로 투자자산을 분산해 관리하세요.');

        return view('investment.portfolio.create');
    }
}
