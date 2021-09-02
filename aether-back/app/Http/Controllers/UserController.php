<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Password;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request): \Illuminate\Http\JsonResponse
    {
        if (!$request->post('pagination')) {
            $users = User::with('group')->get();
        } else {
            $users = User::with('group')->paginate(10);
        }

        return response()->json($users);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request): \Illuminate\Http\JsonResponse
    {
        $user_uuid = Str::uuid();
        $email = $request->post('email');
        $password = $request->post('password');
        $firstname = $request->post('firstname');
        $lastname = $request->post('lastname');
        $middlename = '';
        $group_id = 1;

        if (User::where('email', $email)->first()) {
            return response()->json(null, 400);
        }

        $userModel = new User;
        $userModel->uuid = $user_uuid;
        $userModel->unique_code = md5($this->_encrypt(time() . $email . $request->ip()));
        $userModel->firstname = $firstname;
        $userModel->lastname = $lastname;
        $userModel->middlename = $middlename;
        $userModel->email = $email;
        $userModel->group_id = $group_id;

        $passwordModel = new Password;
        $passwordModel->password = Hash::make($password);

        DB::transaction(function () use ($userModel, $passwordModel) {
            $userModel->save();
            $passwordModel->user_id = $userModel->id;
            $passwordModel->save();
        });

        if (User::where('uuid', $user_uuid)->count()) {
            return response()->json(null, 201);
        } else {
            return response()->json(null, 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  string  $uuid
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(string $uuid): \Illuminate\Http\JsonResponse
    {
        User::where('uuid', $uuid)->delete();
        if (User::where('uuid', $uuid)->count()) {
            $result = false;
        } else {
            $result = true;
        }
        return response()->json($result);
    }

    public function checkEmail(Request $request): \Illuminate\Http\JsonResponse
    {
        $email = trim($request->post('email'));
        $user = User::where('email', $email)->count();
        return response()->json($user ? false : true);
    }
}
