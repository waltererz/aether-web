<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>@yield('title')</title>
    <meta property="og:title" content="@yield('title')" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{{ config('app.url') . request()->path() }}" />
    <meta property="og:description" content="@yield('description')" />
    <meta property="og:locale" content="ko_KR" />
    <meta name="theme-color" content="#222222" />
    @yield('header')
    @include('layouts/styles')
</head>

<body>
    @yield('body')
    <div id="app" class="aether-app"></div>
    @yield('footer')
</body>

</html>
