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
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(Request $request)
    {
        $agent = new Agent();

        /**
         * 클라이언트 에이전트 정보
         * 
         * @var array $user_agent
         */
        $user_agent = config('client.user_agent');

        /**
         * 현재 페이지 정보
         * 
         * @var array $page
         */
        $page = $this->_getPageInformation($request);

        /**
         * 모바일 접속 유무
         * 
         * @var boolean
         */
        $is_mobile = ($agent->isMobile() || !$agent->isDesktop());

        view()->share('title', $page['name']);
        view()->share('description', $page['description']);
        view()->share('user_agent', $user_agent);
        view()->share('is_mobile', $is_mobile);
    }

    /**
     * 페이지 정보를 가져오는 함수
     * 
     * @param Request $request
     * @return array
     */
    private function _getPageInformation(Request $request): array
    {
        $page = [];
        $path = $request->path() == '/' ? 'home' : $request->path();
        $path = str_replace('/', '.routes.', preg_replace('/^\/(.*?)$/', '$1', $path));

        if (($config = config('routes.' . $path))) {
            $page['name'] = isset($config['name']) ? $config['name'] : '';
            $page['description'] = isset($config['description']) ? $config['description'] : '';
        }

        return $page;
    }
}
