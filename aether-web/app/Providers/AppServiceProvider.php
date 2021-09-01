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

        $page = $this->_getPageInformation($request);

        view()->share('title', $page['name']);
        view()->share('description', $page['description']);
        view()->share('user_agent', $user_agent);
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
