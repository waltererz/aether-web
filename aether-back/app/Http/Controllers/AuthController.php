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

        $token = $user->createToken(md5($request->ip() . ' - ' . $request->server('HTTP_USER_AGENT')))->plainTextToken;
        $remember_token = array($token, $request->post('remember'), $request->ip(), $request->server('HTTP_USER_AGENT'), time());

        if ($user->remember_tokens) {
            $new_tokens = json_decode($user->remember_tokens);
            array_push($new_tokens, $remember_token);
            $new_tokens = json_encode($new_tokens);
        } else {
            $new_tokens = json_encode(array($remember_token));
        }

        $user->remember_tokens = $new_tokens;
        $user->save();

        $expire = $request->post('remember') === true ? 43200 : 0;

        return response()->json([
            'auth' => true,
            'cookie_expire' => $expire,
            'access_token' => $token,
            'unique_code' => $this->_encrypt($user->unique_code),
        ]);
    }

    public function signout(Request $request): \Illuminate\Http\JsonResponse
    {
        $access_token = $request->post('access_token');
        $unique_code = $this->_decrypt($request->post('unique_code'));

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
                    break;
                } else {
                    if ($token[1] === true) {
                        if (isset($token[4]) && is_numeric($token[4]) && ($token[4] + (30 * 24 * 60 * 60)) >= time()) {
                            $new_tokens[] = $token;
                        }
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
        if (!$request->post('unique_code') || !$request->post('access_token') || !$request->post('user_agent')) {
            return response()->json(['auth' => false]);
        }

        $unique_code = $request->post('unique_code');
        $access_token = $request->post('access_token');
        $user_agent = $request->post('user_agent');

        $user = User::where('unique_code', $this->_decrypt($unique_code))->first();

        if (!$user) {
            return response()->json(['auth' => false]);
        }

        if ($user->remember_tokens) {
            $authorized = false;
            $remember_tokens = json_decode($user->remember_tokens);
            $new_tokens = [];
            $remember = false;

            foreach ($remember_tokens as $token) {
                if ($token[0] == $access_token) {
                    if ($token[1] !== false) {
                        if (isset($token[4]) && is_numeric($token[4]) && ($token[4] + (30 * 24 * 60 * 60)) >= time()) {
                            if (isset($token[3]) && is_string($token[3]) && $token[3] == $user_agent) {
                                $authorized = true;
                                $remember = true;
                                $token[4] = time();
                                $new_tokens[] = $token;
                                break;
                            }
                        }
                    } else {
                        if (isset($token[3]) && is_string($token[3]) && $token[3] == $user_agent) {
                            $authorized = true;
                            $new_tokens[] = $token;
                            break;
                        }
                    }
                } else {
                    if ($token[1] !== false) {
                        if (isset($token[4]) && is_numeric($token[4]) && ($token[4] + (30 * 24 * 60 * 60)) >= time()) {
                            $new_tokens[] = $token;
                        }
                    }
                }
            }

            $user->remember_tokens = json_encode($new_tokens);
            $user->save();

            if ($authorized) {
                $expire = $remember ? 43200 : 0;
                return response()->json([
                    'auth' => true,
                    'user_uuid' => $user->uuid,
                    'cookie_expire' => $expire,
                    'access_token' => $access_token,
                    'unique_code' => $unique_code,
                ]);
            } else {
                return response()->json(['auth' => false, 'destroy_cookies' => true]);
            }
        } else {
            return response()->json(['auth' => false]);
        }
    }
}
