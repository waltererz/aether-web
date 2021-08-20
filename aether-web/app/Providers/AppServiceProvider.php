<?php

namespace App\Providers;

use GuzzleHttp\Cookie\CookieJar;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Http\Request;

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
        view()->share('title', $this->_getDocumentTitle($request));
        view()->share('description', $this->_getDocumentDescription($request));
        view()->share('auth', $this->_getUserInformation($request));
    }

    /**
     * 웹브라우저 타이틀을 가져오는 함수
     * 
     * @return string
     */
    private function _getDocumentTitle(Request $request): string
    {
        $path = $request->path() == '/' ? 'home' : $request->path();
        $path = str_replace('/', '.routes.', preg_replace('/^\/(.*?)$/', '$1', $path));

        if (($config = config('routes.' . $path))) {
            return isset($config['name']) ? $config['name'] : '';
        } else {
            return '';
        }
    }

    /**
     * 페이지 설명글을 가져오는 함수
     * 
     * @return string
     */
    private function _getDocumentDescription(Request $request): string
    {
        $path = $request->path() == '/' ? 'home' : $request->path();
        $path = str_replace('/', '.routes.', preg_replace('/^\/(.*?)$/', '$1', $path));

        if (($config = config('routes.' . $path))) {
            return isset($config['description']) ? $config['description'] : '';
        } else {
            return '';
        }
    }

    private function _getUserInformation(Request $request): string
    {
        $result = '';
        $cookies = $request->cookie();

        if (!isset($cookies['personal_access_token']) || !isset($cookies['personal_unique_code'])) {
            return '';
        }

        $response = Http::withToken($cookies['personal_access_token'])
            ->accept('application/json')->post(config('app.api_url') . '/auth/check', [
                'unique_code' => $cookies['personal_unique_code'],
                'access_token' => $cookies['personal_access_token'],
                'ipaddress' => $request->ip(),
                'user_agent' => $request->server('HTTP_USER_AGENT'),
            ]);

        $response = json_decode($response);

        if (isset($response->auth) && $response->auth === false) {
            if (isset($response->destroy_cookies) && $response->destroy_cookies === true) {
                Cookie::queue(Cookie::forget('personal_access_token'));
                Cookie::queue(Cookie::forget('personal_unique_code'));
            }
        } else if (isset($response->auth) && $response->auth === true) {
            $result = $response->user_uuid;

            Cookie::queue('personal_access_token', $response->access_token, $response->cookie_expire, null, null, false, false);
            Cookie::queue('personal_unique_code', $response->unique_code, $response->cookie_expire, null, null, false, false);
        }

        return $result;
    }
}
