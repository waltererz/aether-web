<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Http\Request;
use Jenssegers\Agent\Agent;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * 앱이 실행될 때 부트스트랩 단계에서 자동으로 실행되는 메소드
     *
     * @return void
     */
    public function boot(Request $request)
    {
        /**
         * Aether에서는 사용자 인증을 위해 각자의 에이전트 정보를 활용합니다.
         * 인증 토큰에 에이전트 정보가 포함되며, 같은 기기에서 접속한 경우에는 최대 30일 로그인 상태를 유지시킬 수 있습니다.
         * 따라서 해당 에이전트 정보는 앱에서 굉장히 중요한 정보이며, React에서 타인이 수정할 수 없는 방법으로 활용되어야 합니다.
         */

        /**
         * 에이전트 정보 인스턴스
         * 
         * @var \Jenssegers\Agent\Agent $agent
         */
        $agent = new Agent();

        /**
         * 클라이언트 에이전트 정보
         * client configure 파일에 에이전트 배열 구조가 명시되어 있습니다.
         * 해당 에이전트 배열은 모든 앱에서 동일하게 사용되어야 합니다.
         * 
         * @var array $user_agent
         */
        $user_agent = config('client.user_agent');

        /**
         * 모바일 접속 유무
         * 뷰 또는 React에서는 모바일 접속 유무에 따라 다른 출력을 요청할 수 있습니다.
         * 
         * @var boolean
         */
        $is_mobile = ($agent->isMobile() || !$agent->isDesktop());

        view()->share('__agent', $user_agent);
        view()->share('__mobile', $is_mobile);

        unset($agent, $user_agent, $is_mobile);
    }
}
