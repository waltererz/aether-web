<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;

class DeveloperController extends Controller
{
    public function index(): View
    {
        return view('index')->with([
            'title' => $this->_getDocumentTitle(),
            'description' => $this->_getDocumentDescription(),
        ]);
    }
}
