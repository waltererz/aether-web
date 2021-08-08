<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
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
}
