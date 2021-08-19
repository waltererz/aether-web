<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Password;

class AuthController extends Controller
{
    public function signin(Request $request): \Illuminate\Http\JsonResponse
    {
        $user = User::where('email', $request->post('email'))->first();

        if (!$user) {
            return response()->json(false);
        }

        $password = Password::where('user_id', $user->id)->first();

        if (!$password || !Hash::check(trim($request->post('password')), $password->password)) {
            return response()->json(false);
        }

        $token = $user->createToken($request->post('device_name'))->plainTextToken;

        if ($user->remember_tokens) {
            $new_tokens = json_decode($user->remember_tokens);
            array_push($new_tokens, array($token, 0));
            $new_tokens = json_encode($new_tokens);
        } else {
            $new_tokens = json_encode(array(array($token, 0)));
        }

        $user->remember_tokens = $new_tokens;
        $user->save();

        Cookie::queue('personal_access_token', $token, 0, null, null, false, false);
        Cookie::queue('personal_unique_code', $this->_encrypt($user->unique_code));

        return response()->json(true);
    }

    public function signout(Request $request): \Illuminate\Http\JsonResponse
    {
        $cookies = $request->cookie();
        $unique_code = isset($cookies['personal_unique_code']) ? $this->_decrypt($cookies['personal_unique_code']) : null;
        $access_token = isset($cookies['personal_access_token']) ? $cookies['personal_access_token'] : null;

        if (!$unique_code || !$access_token) {
            return response()->json(false);
        }

        $user = User::where('unique_code', $unique_code)->first();

        if (!$user) {
            return response()->json(false);
        }

        if ($user->remember_tokens) {
            $signout = false;
            $new_tokens = [];
            $remember_tokens = json_decode($user->remember_tokens);

            foreach ($remember_tokens as $token) {
                if ($token[0] == $access_token) {
                    $signout = true;
                    Cookie::queue(Cookie::forget('personal_unique_code'));
                    Cookie::queue(Cookie::forget('personal_access_token'));
                    break;
                } else {
                    if ($token[1] !== 0) {
                        $new_tokens[] = $token;
                    }
                }
            }

            $user->remember_tokens = json_encode($new_tokens);
            $user->save();

            return response()->json($signout);
        } else {
            return response()->json(false);
        }
    }

    public function check(Request $request): \Illuminate\Http\JsonResponse
    {
        if (!$request->post('unique_code') || !$request->post('access_token')) {
            return response()->json(false);
        }

        $user = User::where('unique_code', $this->_decrypt($request->post('unique_code')))->first();

        if (!$user) {
            return response()->json(false);
        }

        if ($user->remember_tokens) {
            $authorized = false;
            $remember_tokens = json_decode($user->remember_tokens);
            $new_tokens = [];

            foreach ($remember_tokens as $token) {

                if ($token[0] == $request->post('access_token')) {
                    $new_tokens[] = $token;
                    $authorized = true;
                    break;
                } else {
                    if ($token[1] !== 0) {
                        $new_tokens[] = $token;
                    }
                }
            }

            $user->remember_tokens = json_encode($new_tokens);
            $user->save();

            if ($authorized) {
                return response()->json($user->uuid);
            } else {
                return response()->json(false);
            }
        } else {
            return response()->json(false);
        }
    }
}
