<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;

class AdvisorController extends Controller
{
    public function index(): View
    {
        return view('index')->with([
            'title' => '투자어드바이저',
        ]);
    }

    public function search(): View
    {
        return view('index')->with([
            'title' => '투자어드바이저 검색',
        ]);
    }
}
