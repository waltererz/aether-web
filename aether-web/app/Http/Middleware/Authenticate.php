<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cookie;
use Jenssegers\Agent\Agent;

class Authenticate
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param string $role 로그인 인증 대상자 지정 변수 (guest|user|admin|owner)
     * @return mixed
     */
    public function handle(Request $request, Closure $next, string $role = 'user')
    {
        /**
         * 클라이언트 쿠키 값을 저장하는 변수
         * 
         * @var array
         */
        $cookies = $request->cookie();

        /**
         * 지정된 로그인 인증 대상자가 guest가 아닌 경우,
         * 사용자 인증과 관련된 쿠키 값이 존재하지 않으면 로그인되지 않은 것으로 간주하고, 로그인 페이지로 이동시킵니다.
         * 추가적으로 로그인 인증 대상자가 guest이며, 인증 관련 쿠키가 생성되지 않은 경우 미들웨어를 통과시킵니다.
         */
        if (!isset($cookies['personal_access_token']) || !isset($cookies['personal_unique_code'])) {
            if ($role != 'guest') {
                return redirect(route('signin'));
            } else {
                return $next($request);
            }
        }

        /**
         * 클라이언트 에이전트 정보를 가져옵니다.
         */
        $agent = new Agent();
        $user_agent = [
            'device' => $agent->device(),
            'platform' => ($_platform = $agent->platform()),
            'platform_version' => str_replace('_', '.', $agent->version($_platform)),
            'browser' => $agent->browser(),
        ];

        /**
         * 인증 관련 쿠키가 모두 생성되어 있는 경우,
         * 지정된 로그인 인증 대상자와 관련 없이 백엔드 서버를 통해 현재 로그인되어 있는 상태인지 확인해야 합니다.
         */

        /**
         * 백엔드 서버에 필요한 데이터를 전송해 인증 여부를 확인합니다.
         */
        $response = Http::withToken($cookies['personal_access_token'])
            ->withHeaders([
                'Cookie' => 'personal_unique_code=' . $cookies['personal_unique_code'],
            ])
            ->accept('application/json')->post(config('app.api_url') . '/auth/check', [
                'user_agent' => $user_agent,
            ]);

        $response_status = $response->status();

        if ($response_status == '401') {
            /**
             * 인증된 사용자가 아닌 경우 현재 생성되어 있는 인증 관련 쿠키를 제거하고,
             * 지정된 로그인 인증 대상자에 따라 로그인 페이지로 이동시키거나 미들웨어를 통과시킵니다.
             */
            if ($role != 'guest') {
                /**
                 * 인증된 사용자가 아니므로 현재 생성되어 있는 쿠키를 삭제합니다.
                 */
                Cookie::queue(Cookie::forget('personal_access_token'));
                Cookie::queue(Cookie::forget('personal_unique_code'));

                return redirect(route('signin'));
            } else {
                return $next($request);
            }
        } else if ($response_status == '200') {
            /**
             * 지정된 로그인 인증 대상자가 guest가 아닌 경우 인증 관련 쿠키를 업데이트하고,
             * 뷰에서 사용할 수 있는 인증 변수를 생성합니다. (auth)
             */
            if ($role != 'guest') {
                $expires = (int)$response->header('Aether-Auth-Expires-Time');

                Cookie::queue('personal_access_token', $response->header('Aether-Access-Token'), $expires, null, null, false, false);
                Cookie::queue('personal_unique_code', $response->header('Aether-User-Unique-Code'), $expires, null, null, false, false);

                view()->share('auth', json_decode($response->body())->user_uuid);

                return $next($request);
            } else {
                /**
                 * 지정된 로그인 인증 대상자가 guest인 경우 웹 디렉토리 루트로 이동시킵니다.
                 */
                return redirect('/');
            }
        }
    }
}
