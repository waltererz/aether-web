<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    @yield('header')
    @include('layouts/styles')
</head>

<body>
    @yield('body')
    <div id="app" class="aether-app"></div>
    @yield('footer')
    <script src="{{ config('app.asset_url') . mix('/js/extract/manifest.js') }}" type="text/javascript"></script>
    <script src="{{ config('app.asset_url') . mix('/js/extract/chunk.1.js') }}" type="text/javascript"></script>
    <script src="{{ config('app.asset_url') . mix('/js/extract/chunk.2.js') }}" type="text/javascript"></script>
    <script src="{{ config('app.asset_url') . mix('/js/extract/chunk.3.js') }}" type="text/javascript"></script>
    <script src="{{ config('app.asset_url') . mix('/js/extract/chunk.a.js') }}" type="text/javascript"></script>
    @yield('scripts')
</body>

</html>
