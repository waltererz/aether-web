<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet">
    @yield('header')
</head>

<body>
    @yield('body')
    <div id="app" class="aether-app"></div>
    @yield('footer')
    <script src="{{ mix('/js/manifest.js') }}" type="text/javascript"></script>
    <script src="{{ mix('/js/vendor.js') }}" type="text/javascript"></script>
    <script defer src="{{ mix('/js/app.js') }}" type="text/javascript"></script>
</body>

</html>
