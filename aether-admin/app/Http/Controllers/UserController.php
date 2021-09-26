<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    private $table = 'users';

    /**
     * 사용자 목록을 반환하는 메소드
     */
    public function index()
    {
        $users = DB::table($this->table)->get();

        return response()->json($users);
    }

    public function store()
    {
    }

    public function show()
    {
    }
}
