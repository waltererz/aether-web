<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Password;
use App\Models\MongoDBUser;

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
     * 회원가입 기능을 수행하는 메소드
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request): \Illuminate\Http\JsonResponse
    {
        /**
         * 사용자 식별 코드 저장 변수 (신규 생성)
         * 
         * @var string $user_uuid
         */
        $user_uuid = (string)Str::uuid();

        /**
         * 사용자 이메일주소 저장 변수
         * 
         * @var string $email
         */
        $email = $request->post('email');

        /**
         * 사용자 패스워드 저장 변수
         * 
         * @var string $password
         */
        $password = $request->post('password');

        /**
         * 사용자 이름 (first name) 저장 변수
         * 
         * @var string $firstname
         */
        $firstname = $request->post('firstname');

        /**
         * 사용자 성 (last name) 저장 변수
         * 
         * @var string $lastname
         */
        $lastname = $request->post('lastname');

        /**
         * 사용자 중간이름 (middle name) 저장 변수
         * 기본적으로 공백을 저장하며 본인 희망에 따라 미들네임 추가 가능
         * 
         * @var string $middlename
         */
        $middlename = '';

        /**
         * 사용자 그룹 저장 변수
         * 
         * @var integer $group_id
         */
        $group_id = 1;

        /**
         * 동일한 이메일로 검색되는 사용자가 있는 경우에는 오류 반환합니다.
         * 소프트삭제를 제공하므로 탈퇴처리된 회원은 검색되지 않습니다.
         */
        if (User::where('email', $email)->first()) {
            return response()->json(null, 400);
        }

        /**
         * 사용자 데이터베이스 모델 (엘로퀀트)
         * 
         * @var \App\Models\User $userModel
         */
        $userModel = new User;

        $userModel->uuid = $user_uuid;
        $userModel->unique_code = md5($this->_encrypt(time() . $email . $request->ip()));
        $userModel->email = $email;
        $userModel->firstname = $firstname;
        $userModel->lastname = $lastname;
        $userModel->middlename = $middlename;
        $userModel->group_id = $group_id;

        /**
         * 패스워드 데이터베이스 모델 (엘로퀀트)
         * 
         * @var \App\Models\Password $passwordModel
         */
        $passwordModel = new Password;

        $passwordModel->password = Hash::make($password);

        /**
         * 트랜잭션 기능을 사용해 사용자 데이터베이스와 패스워드 데이터베이스의 안정성을 높입니다.
         */
        DB::transaction(function () use (&$userModel, &$passwordModel) {
            $userModel->save();
            $passwordModel->user_id = $userModel->id;
            $passwordModel->save();
        });

        /**
         * 성공적으로 사용자가 생성되었다면 MongoDB 사용자 도큐먼트 생성 후 성공(201)을 반환하며,
         * 그렇지 않은 경우에는 오류(400)를 반환합니다.
         */
        if (User::where('uuid', $user_uuid)->count()) {
            $mongodbUserModel = new MongoDBUser();
            $mongodbUserModel->uuid = $user_uuid;
            $mongodbUserModel->authorization_history = [];
            $mongodbUserModel->save();

            return response()->json($user_uuid, 201);
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
