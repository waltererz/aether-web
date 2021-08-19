<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Password;
use App\Models\Group;


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
        $password = trim($request->post('password'));
        $firstname = trim($request->post('firstname'));
        $lastname = trim($request->post('lastname'));
        $middlename = trim($request->post('middlename'));
        $email = trim($request->post('email'));
        $group_uuid = trim($request->post('group'));
        $group = Group::where('uuid', $group_uuid)->first();
        $group_id = $group->id;

        $userModel = new User;
        $userModel->uuid = $user_uuid;
        $userModel->unique_code = md5($this->_encrypt(time() . $request->post('email') . $_SERVER['REMOTE_ADDR']));
        $userModel->firstname = $firstname;
        $userModel->lastname = $lastname;
        $userModel->middlename = $middlename;
        $userModel->email = $email;
        $userModel->group_id = $group_id;
        $userModel->save();

        $passwordModel = new Password;
        $passwordModel->user_id = $userModel->id;
        $passwordModel->password = Hash::make($password);
        $passwordModel->save();

        if (User::where('uuid', $user_uuid)->count() && Password::where('user_id', $userModel->id)->count()) {
            return response()->json(true);
        } else {
            return response()->json(false);
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
