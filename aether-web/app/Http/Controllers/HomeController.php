<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Contracts\View\View;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        /**
         * 회원 로그인 여부에 따라 다른 페이지를 보여줍니다.
         * 로그인을 하지 않았을 경우에는 랜딩 페이지,
         * 로그인이 완료된 경우에만 메인 페이지로 이동합니다.
         */

        /**
         * 랜딩 페이지 출력 유무
         * 
         * @var boolean $landing
         */
        $landing = $request->attributes->get('landing');

        if ($landing) {
            return view('landing');
        } else {
            return view('index');
        }
    }
}
