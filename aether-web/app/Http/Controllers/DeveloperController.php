<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;

class DeveloperController extends Controller
{
    public function index(): View
    {
        return view('index')->with([
            'title' => '개발자게시판',
        ]);
    }
}
