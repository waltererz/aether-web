<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;

class SettingController extends Controller
{
    public function index(): View
    {
        return view('index');
    }
}
