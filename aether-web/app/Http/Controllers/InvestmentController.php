<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;

class InvestmentController extends Controller
{
    public function index(): View
    {
        return view('index');
    }
}
