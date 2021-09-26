<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdvisorController extends Controller
{
    private $table = 'advisors';

    /**
     * 사용자 목록을 반환하는 메소드
     */
    public function index()
    {
        $advisors = DB::table($this->table)->get();

        return response()->json($advisors);
    }

    public function store()
    {
    }

    public function show()
    {
    }
}
