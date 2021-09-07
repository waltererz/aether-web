<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>Aether Administrator</title>
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet">
    @yield('header')
</head>

<body>
    @yield('body')
    <div id="app"></div>
    @yield('footer')
    <script defer src="{{ mix('/js/app.js') }}" type="text/javascript"></script>
</body>

</html>
