<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{{ config('app.url') . request()->path() }}" />
    <meta property="og:locale" content="ko_KR" />
    <meta name="theme-color" content="#222222" />
    @yield('header')
    @include('layouts/styles')
</head>

<body>
    @yield('body')
    <div id="app" class="aether-app"></div>
    @yield('footer')
    <script src="{{ mix('/js/common/manifest.js') }}" type="text/javascript"></script>
    <script src="{{ mix('/js/common/chunk.1.js') }}" type="text/javascript"></script>
    <script src="{{ mix('/js/common/chunk.2.js') }}" type="text/javascript"></script>
    <script src="{{ mix('/js/common/chunk.a.js') }}" type="text/javascript"></script>
    @yield('scripts')
</body>

</html>
