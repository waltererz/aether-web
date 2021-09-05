<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use App\Models\User;
use App\Models\Password;
use App\Models\MongoDBUser;

/**
 * 인증 컨트롤러
 * 
 * 사용자 인증을 위한 컨트롤러입니다.
 * API를 통해 사용자 인증을 요청하는 경우 이 컨트롤러에서 모든 역할을 수행합니다.
 */
class AuthController extends Controller
{
    /**
     * 로그인 기능 수행 함수
     * 
     * API를 통해 사용자 로그인을 진행하기 위해 사용되는 함수입니다.
     * 클라이언트에서 요청이 들어오는 경우 데이터베이스에서 사용자 생성 유무를 확인한 후,
     * 패스워드 일치여부 확인 및 토큰을 생성하고 필요한 내용을 JSON 형태로 반환합니다.
     * 클라이언트에서는 쿠키를 생성함으로써 사용자 인증 절차를 마무리합니다.
     * 
     * <Parameters>
     *  - body
     *      - string email 사용자 이메일 주소
     *      - string password 사용자 패스워드
     *      - string ip_address 클라이언트 IP 주소
     *      - object user_agent 에이전트 정보
     *          - string device 에이전트 디바이스 이름
     *          - string platform 에이전트 운영체제 이름
     *          - string platform_version 에이전트 운영체제 버전
     *          - string browser 에이전트 웹브라우저 이름
     *      - boolean remember_me 로그인 유지 유무 (최대 30일)
     * 
     * <Responses>
     *  - Headers
     *      - Aether-Access-Token 인증 토큰
     *      - Aether-User-Unique-Code 사용자 식별 코드
     * 
     * @param \Illuminate\Http\Request $request 라라벨 요청객체 (자동 의존성 주입)
     * @return \Illuminate\Http\JsonResponse
     */
    public function signin(Request $request): \Illuminate\Http\JsonResponse
    {
        /**
         * POST 값으로 넘어온 사용자 이메일 주소
         * 
         * @var string $email
         */
        $email = $request->post('email');

        /**
         * 이메일 주소를 검증해 정상적인 이메일 주소인지 확인 후,
         * 정상적인 이메일 주소가 아니라면 오류를 반환합니다.
         */
        if (!$email || preg_match('/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/', $email) === false) {
            return response()->json(null, 400);
        }

        /**
         * POST 값으로 넘어온 에이전트 정보
         * 
         * @var object $user_agent
         */
        $user_agent = $request->post('user_agent');

        /**
         * 에이전트 정보가 충분하게 전달되었는지 확인 후,
         * 정상적인 정보가 아니라면 오류를 반환합니다.
         */
        if (!$user_agent || !isset($user_agent['device']) || !isset($user_agent['platform']) || !isset($user_agent['platform_version']) || !isset($user_agent['browser'])) {
            return response()->json(null, 400);
        }

        /**
         * POST 값으로 넘어온 사용자 패스워드
         * 
         * @var string $password
         */
        $password = $request->post('password');

        /**
         * POST 값으로 넘어온 클라이언트 IP 주소
         * 
         * @var string $ip_address
         */
        $ip_address = $request->post('ip_address');

        /**
         * 인증에 필요한 값이 설정되지 않은 경우 오류 반환
         */
        if (!$password || !$ip_address) {
            return response()->json(null, 400);
        }

        /**
         * POST 값으로 넘어온 로그인 유지 유무 변수
         * 
         * @var boolean $remember_me
         */
        $remember_me = $request->post('remember_me') ? true : false;

        /**
         * 사용자 데이터 저장변수
         * 
         * 입력된 이메일주소를 이용해 현재 활성화된 사용자인지 확인합니다.
         * 라라벨에서는 기본적으로 deleted_at 값이 지정되지 않은 레코드만 검색합니다. (소프트삭제 기능)
         * 
         * @var \App\Models\User $user
         */
        $user = User::where('email', $email)->first();

        /**
         * 데이터베이스에 활성화된 사용자가 없는 경우에는 인증실패를 반환합니다.
         */
        if (!$user) {
            return response()->json(null, 401);
        }

        /**
         * 패스워드 데이터 저장변수
         * 
         * 활성화된 사용자가 있다면 패스워드 일치여부를 확인하기 위해 패스워드 테이블에서 해당 값을 가져와 변수에 저장합니다.
         * 
         * @var \App\Models\Password
         */
        $stored_password = Password::where('user_id', $user->id)->first();

        /**
         * 라라벨에서 패스워드는 Hash 파사드로 해싱되어 저장되며,
         * check 메소드를 이용해 해싱된 값과 일반 문자열의 일치여부를 확인할 수 있습니다.
         * 패스워드가 일치하지 않는 경우에는 인증실패를 반환합니다.
         */
        if (!Hash::check($password, $stored_password->password)) {
            return response()->json(null, 401);
        }

        /**
         * 인증 토큰 저장변수
         * 
         * 라라벨 생텀 시스템에서 생성된 인증 토큰을 저장합니다.
         * 클라이언트에서 사용자 인증을 수행하기 위해 토큰을 사용해야 하므로, 반환 값이 반드시 인증 토큰 값이 포함되어야 합니다. (Bearer Authentication)
         * 
         * @var string
         */
        $token = $user->createToken($ip_address . ' - ' . json_encode($user_agent))->plainTextToken;

        /**
         * 사용자 로그인 유지토큰 저장변수
         * 
         * 현행 로그인 절차로 생성된 토큰을 포함하는 로그인 상태 유지토큰입니다.
         * 사용자가 로그인 상태를 유지하기 위해 사용되는 토큰이며, 사용자 테이블(user)에 저장됩니다.
         * 
         * 사용자 로그인 유지토큰을 아래의 내용을 포함하고 있습니다.
         * 1. 인증토큰 (string)
         * 2. 로그인 상태유지 유무 (boolean)
         * 3. IP주소
         * 4. 사용자 에이전트 정보
         * 5. 로그인 시각 (unix time)
         * 
         * @var array
         */
        $remember_token = array($token, $remember_me, $ip_address, json_encode($user_agent), time());

        /**
         * 데이터베이스 내 현재 사용자 레코드에 로그인 상태유지 토큰이 존재하는지 확인
         * 
         * 로그인 상태유지 토큰이 존재하는 경우에는 현행 로그인 절차로 생성되는 새로운 토큰 값을 데이터베이스에 저장
         * 로그인 상태유지 토큰이 존재하지 않는 경우에는 현행 로그인 절차로 생성되는 새로운 토큰 값을 곧바로 데이터베이스에 저장
         * 
         * 데이터베이스에 토큰을 저장할 때에는 JSON 스트링으로 저장 (json_encode 함수 사용)
         */
        $authorization_history = MongoDBUser::where('uuid', $user->uuid)->get(['authorization_history']);

        if (!is_array($authorization_history)) {
            $authorization_history = [];
        }

        array_push($authorization_history, $remember_token);

        MongoDBUser::where('uuid', $user->uuid)->push('authorization_history', $authorization_history);

        /**
         * 라라벨 엘로퀀트ORM을 활용하여 새로운 토큰 데이터를 데이터베이스에 저장합니다.
         */
        //$user->remember_tokens = $new_tokens;
        //$user->save();

        /**
         * 로그인에 성공하는 경우 클라이언트에서는 인증토큰(access_token)과 사용자 식별코드(unique_code)를 쿠키에 저장해야 하며,
         * 쿠키에 저장하지 않는 경우에는 로그인 상태가 유지되지 않습니다.
         * 
         * 쿠키에 인증정보를 저장할 때 사용자가 로그인 상태유지를 희망하는 경우에는 최대 30일까지 쿠키를 유지합니다.
         * 그렇지 않은 경우에는 웹브라우저 실행 중에만 쿠키를 유지합니다. (세션)
         * 
         * @var integer $expires
         */
        $expires = $remember_me === true ? config('auth.cookie_expires') : 0;

        /**
         * 로그인 성공 시 헤더를 통해 인증 정보를 반환합니다. (Http Status 200)
         * 
         * Aether-Access-Token: 인증 토큰
         * Aether-User-Unique-Code: 사용자 식별 코드
         */
        return response()->json(null, 200)->header('Aether-Access-Token', $token)
            ->header('Aether-User-Unique-Code', $this->_encrypt($user->unique_code));
    }

    /**
     * 로그아웃 기능수행 함수
     * 
     * 현재 로그인 상태인 경우 로그아웃 기능을 수행합니다.
     * 만들어진 로그인 상태유지 토큰을 데이터베이스에서 삭제하고, 로그아웃 성공 유무를 반환합니다.
     * 
     * <Parameters>
     *  - header
     *      - Authorization Bearer 인증 토큰
     *      - Cookie
     *          - personal_unique_code 사용자 식별 코드
     * 
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function signout(Request $request): \Illuminate\Http\JsonResponse
    {
        /**
         * Bearer 인증 토큰
         * 
         * @var string $access_token
         */
        $access_token = str_replace('Bearer ', '', $request->header('Authorization'));

        /**
         * 인증 토큰 번호
         * 
         * @var integer $access_token_id
         */
        $access_token_id = 0;

        if (preg_match('/([0-9]+)\|([a-zA-Z0-9]+)/', $access_token, $access_token_id) !== false) {
            $access_token_id = $access_token_id[1];
        }

        /**
         * 사용자 식별 코드
         * 
         * @var string $unique_code
         */
        $unique_code = $request->cookie('personal_unique_code');

        /**
         * 인증토큰과 식별코드 중 하나라도 없으면 오류 발생
         */
        if (!$unique_code || !$access_token) {
            return response()->json(null, 400);
        }

        /**
         * 식별코드를 사용해 사용자 활성화 유무를 확인합니다.
         */
        $user = User::where('unique_code', $this->_decrypt($unique_code))->first();

        /**
         * 활성화된 사용자가 없는 경우에는 로그인 상태가 아님
         */
        if (!$user) {
            return response()->json(null, 401);
        }

        /**
         * 데이터베이스 내 사용자 레코드에 로그인 상태유지 토큰이 존재하는지 확인합니다.
         * 
         * 로그인 상태유지 토큰이 존재하지 않는다면 로그인되지 않은 겻이므로, 로그아웃 실패 즉, false 값을 반환합니다.
         * 로그인 상태유지 토큰이 존재하는 경우에는 로그아웃 절차를 진행합니다.
         */
        $authorization_history = MongoDBUser::where('uuid', $user->uuid)->get(['authorization_history']);

        if (isset($authorization_history[0])) {
            $authorization_history = $authorization_history[0]->authorization_history;
        } else {
            $authorization_history = [];
        }

        if ($authorization_history) {
            /**
             * 로그아웃 성공 유무를 저장하는 변수
             * 
             * @var boolean
             */
            $signout = false;

            /**
             * 로그아웃 완료 후 데이터베이스에 저장되는 새로운 로그인 상태유지 토큰 (배열)
             * 
             * @var array
             */
            $new_tokens = [];

            /**
             * 데이터베이스에 저장되어 있는 로그인 상태유지 토큰 갯수만큼 절차를 반복합니다.
             * 클라이언트에서 로그아웃을 요청한 인증토큰과 동일한 인증토큰을 포함하는 로그인 상태유지 토큰이 있는지 확인합니다.
             * 존재하지 않는다면 로그아웃은 실패, false 값을 반환합니다.
             * 
             * 요청된 인증토큰과 일치하지 않는 인증토큰을 포함하는 로그인 상태유지 토큰의 경우에는,
             * 로그인 상태유지 값이 true이고, 토큰 생성시간에 30일을 더한 값이 현재의 시간보다 큰 경우에만 토큰을 유지합니다.
             * 이 조건에 부합하지 않는 로그인 상태유지 토큰을 모두 폐기합니다.
             */
            foreach ($authorization_history as $item) {
                if ($item[0] == $access_token) {
                    $user->tokens()->where('id', $access_token_id)->delete();
                    $signout = true;
                } else {
                    if ($item[1] === true) {
                        if (isset($item[4]) && is_numeric($item[4]) && ($item[4] + (30 * 24 * 60 * 60)) >= time()) {
                            $new_tokens[] = $item;
                        }
                    }
                }
            }

            MongoDBUser::where('uuid', $user->uuid)->update(['authorization_history' => $new_tokens]);

            if ($signout) {
                return response()->json(null, 200);
            } else {
                return response()->json(null, 400);
            }
        } else {
            return response()->json(null, 401);
        }
    }

    /**
     * 로그인 유무 확인 함수
     * 
     * 클라이언트에서 현재 사용자 로그인이 된 상태인지 확인하기 위해 API 요청에 사용되는 메소드입니다.
     * 
     * <Parameters>
     *  - header
     *      - Authorization Bearer 인증 토큰
     *      - Cookie
     *          - personal_unique_code 사용자 식별 코드
     * - body
     *  - object user_agent 에이전트 정보
     *      - string device 에이전트 디바이스 이름
     *      - string platform 에이전트 운영체제 이름
     *      - string platform_version 에이전트 운영체제 버전
     *      - string browser 에이전트 웹브라우저 이름
     * 
     * <Responses>
     *  - header
     *      - 
     * 
     * @param Illuminate\Http\Request $request
     * @return Illuminate\Http\JsonResponse
     */
    public function check(Request $request): \Illuminate\Http\JsonResponse
    {
        /**
         * Bearer 인증 토큰
         * 
         * @var string $access_token
         */
        $access_token = str_replace('Bearer ', '', $request->header('Authorization'));

        /**
         * 인증 토큰 번호
         * 
         * @var integer $access_token_id
         */
        $access_token_id = 0;

        if (preg_match('/([0-9]+)\|([a-zA-Z0-9]+)/', $access_token, $access_token_id) !== false) {
            $access_token_id = $access_token_id[1];
        }

        /**
         * 사용자 식별 코드
         * 
         * @var string $unique_code
         */
        $unique_code = $request->cookie('personal_unique_code');

        /**
         * 에이전트 정보 객체
         * 
         * - device: 에이전트 기기 이름
         * - platform: 에이전트 운영체제 이름
         * - platform_version: 에이전트 운영체제 버전
         * - browser: 에이전트 웹브라우저 이름
         * 
         * @var array $user_agent
         */
        $user_agent = $request->post('user_agent');

        /**
         * 에이전트 정보가 충분하게 전달되었는지 확인 후,
         * 정상적인 정보가 아니라면 오류를 반환합니다.
         */
        if (!$user_agent || !isset($user_agent['device']) || !isset($user_agent['platform']) || !isset($user_agent['platform_version']) || !isset($user_agent['browser'])) {
            return response()->json(null, 400);
        }

        /**
         * 사용자 인증에 필요한 값이 하나라도 없으면 오류를 반환합니다.
         */
        if (!$access_token || !$unique_code) {
            return response()->json(null, 400);
        }

        /**
         * 식별코드를 사용해 데이터베이스에서 활성화된 사용자가 있는지 확인합니다.
         * 클라이언트에서 넘겨받은 식별코드는 암호화되어 있으므로 반드시 복호화한 후 절차를 진행해야 합니다.
         */
        $user = User::where('unique_code', $this->_decrypt($unique_code))->first();

        /**
         * 데이터베이스에 활성화된 사용자가 없는 경우에는 인증실패를 반환합니다.
         */
        if (!$user) {
            return response()->json(null, 401);
        }

        $authorization_history = MongoDBUser::where('uuid', $user->uuid)->get(['authorization_history']);

        if (isset($authorization_history[0])) {
            $authorization_history = $authorization_history[0]->authorization_history;
        } else {
            $authorization_history = [];
        }

        /**
         * 데이터베이스에 로그인 상태유지 토큰이 존재하는지 확인합니다.
         * 토큰이 존재하지 않으면 로그인되지 않은 상태이므로 인증실패를 반환합니다.
         */
        if ($authorization_history) {
            /**
             * 사용자 로그인 유무 저장변수
             * 
             * @var boolean $authorized
             */
            $authorized = false;

            /**
             * 로그인 유무 확인 후 데이터베이스에 저장될 새로운 로그인 상태유지 토큰을 저장하는 배열
             * 
             * @var array $new_tokens
             */
            $new_tokens = [];

            /**
             * 현재 로그인된 토큰이 로그인 상태유지 토큰인지 확인하기 위한 변수
             * 
             * @var boolean $remember_me
             */
            $remember_me = false;

            /**
             * 데이터베이스에 저장되어 있는 로그인 상태유지 토큰 갯수만큼 반복합니다.
             */
            foreach ($authorization_history as $item) {
                /**
                 * 로그인 상태유지 토큰에 저장되어 있는 인증토큰과 현재 클라이언트에서 요청한 인증토큰이 동일하면,
                 */
                if ($item[0] == $access_token) {
                    /**
                     * 로그인 상태유지 유무를 확인합니다.
                     * 
                     * 로그인 상태유지가 활성회되어 있다면, (remember_me === true)
                     * 1. 토큰에 저장되어 있는 시간에 30일을 더한 값이 현재 시간보다 크고,
                     * 2. 토큰에 저장되어 있는 사용자 에이전트가 동일하다면,
                     * 동일한 기기에서 접속한 유효한 로그인으로 확정합니다.
                     */
                    if ($item[1] === true) {
                        if (isset($item[4]) && is_numeric($item[4]) && ($item[4] + config('auth.cookie_expires')) >= time()) {
                            if (isset($item[3]) && is_string($item[3]) && $item[3] == json_encode($user_agent)) {
                                $authorized = true;
                                $remember_me = true;
                                $item[4] = time();
                                $new_tokens[] = $item;
                            }
                        }
                    } else {
                        /**
                         * 로그인 상태유지 유무가 false 인 경우에는,
                         * 사용자 에이전트만 일치하는지 확인 후,
                         * 에이전트가 일치하는 경우에는 유효한 로그인으로 확정합니다. (새로운 토큰으로 저장)
                         */
                        if (isset($item[3]) && is_string($item[3]) && $item[3] == json_encode($user_agent)) {
                            $authorized = true;
                            $new_tokens[] = $item;
                        }
                    }
                } else {
                    /**
                     * 데이터베이스에 저장되어 있는 인증토큰과 현재 클라이언트에 인증 요청한 토큰이 다른 경우,
                     * 로그인 상태유지 활성화 상태인 경우에 한하여 (로그인 상태유지 값이 true 일 때)
                     * 저장된 시간 값에 30일을 더한 값이 현재 시간보다 큰 경우 해당 토큰을 그대로 데이터베이스에 저장합니다.
                     */
                    if ($item[1] === true) {
                        if (isset($item[4]) && is_numeric($item[4]) && ($item[4] + config('auth.cookie_expires')) >= time()) {
                            $new_tokens[] = $item;
                        }
                    }
                }
            }

            MongoDBUser::where('uuid', $user->uuid)->update(['authorization_history' => $new_tokens]);

            /**
             * 사용자 이미지가 존재하는지 확인한 후, 이미지 경로를 가져옵니다.
             * 존재하지 않으면 공백을 가져옵니다.
             */

            /**
             * 클라우드 스토리지 인스턴스 저장 변수
             * 
             * @var \Illuminate\Contracts\Filesystem\Filesystem $storage
             */
            $storage = Storage::disk('azure');

            /**
             * 스토리지 내 사용자 이미지 저장 경로
             * 
             * @var string $path
             */
            $user_image_path = 'user_image/' . $user->uuid;

            /**
             * 스토리지에 사용자 이미지 파일이 존재하는지 확인합니다.
             * 파일이 존재하지 않으면 공백을 반환합니다.
             * 파일이 존재하면 백엔드 서버를 경유하는 이미지 경로를 반환합니다.
             */
            if (!$storage->exists($user_image_path)) {
                $user_image = '';
            } else {
                $user_image = url(route('user.image', ['user' => $user->uuid]));
            }

            /**
             * 로그인 상태가 확인된 경우 다음의 값을 반환합니다.
             * 
             * <Responses>
             *  - headers
             *      - Aether-Access-Token 사용자 인증 토큰
             *      - Aether-User-Unique-Code 사용자 식별 코드
             *      - Aether-Auth-Expires 쿠키 만료일자 (분 단위)
             */
            if ($authorized) {
                return response()->json([
                    'user_uuid' => $user->uuid,
                    'user_email' => $user->email,
                    'user_firstname' => $user->firstname,
                    'user_lastname' => $user->lastname,
                    'user_nickname' => $user->nickname,
                    'user_image' => $user_image,
                ], 200)
                    ->header('Aether-Access-Token', $access_token)
                    ->header('Aether-User-Unique-Code', $unique_code)
                    ->header('Aether-Auth-Expires', $remember_me ? 43200 : 0);
            } else {
                return response()->json(null, 401);
            }
        } else {
            return response()->json(null, 401);
        }
    }
}
