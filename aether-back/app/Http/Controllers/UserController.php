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
    public function index(): \Illuminate\Http\JsonResponse
    {
        $users = User::with('group')->paginate(10);
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

        $user = new User;
        $user->uuid = $user_uuid;
        $user->unique_code = md5($this->_encrypt(time() . $request->post('email') . $_SERVER['REMOTE_ADDR']));
        $user->firstname = $firstname;
        $user->lastname = $lastname;
        $user->middlename = $middlename;
        $user->email = $email;
        $user->group_id = $group_id;
        $user->save();

        $password = new Password;
        $password->user_id = $user->id;
        $password->password = Hash::make($password);
        $password->save();

        if (User::where('uuid', $user_uuid)->first() && Password::where('user_id', $user->id)->first()) {
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
