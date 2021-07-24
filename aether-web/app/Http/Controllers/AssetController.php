<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;

class AssetController extends Controller
{
    public function index(): View
    {
        return view('index')->with([
            'title' => '자산관리',
        ]);
    }

    public function moneybook(): View
    {
        return view('index')->with([
            'title' => '가계부',
        ]);
    }

    public function portfolio(): View
    {
        return view('index')->with([
            'title' => '포트폴리오',
        ]);
    }
}
