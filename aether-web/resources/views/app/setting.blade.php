<?php
$app_name = config('app.name');
$title = isset($__title) && strlen($__title) > 0 ? $__title . ' | ' . $app_name : $app_name;
$description = isset($__desc) && strlen($__desc) > 0 ? $__desc : config('app.description');
$pagetype = isset($__pagetype) && strlen($__pagetype) > 0 ? $__pagetype : 'website';
?>

@extends('layouts.react')

@section('header')
    <title>{{ $title }}</title>
    <meta property="og:title" content="{{ $title }}" />
    <meta property="og:type" content="{{ $pagetype }}" />
    <meta property="og:url" content="{{ config('app.url') . request()->path() }}" />
    <meta property="og:description" content="{{ $description }}" />
    <meta property="og:locale" content="ko_KR" />
    <meta name="theme-color" content="#222222" />
    <script type="text/javascript">
        window._aether = {
            name: "{{ $app_name }}",
            domain: "{{ config('session.domain') }}",
            baseUrl: "{{ config('app.url') }}",
            client: "{{ request()->ip() }}",
            auth: "{{ isset($__auth) ? $__auth : '' }}",
            agent: {
                'device': "{{ $__agent['device'] }}",
                'platform': "{{ $__agent['platform'] }}",
                'platform_version': "{{ $__agent['platform_version'] }}",
                'browser': "{{ $__agent['browser'] }}",
            },
            user: {
                'email': "{{ $__user->email }}",
                'name': "{{ $__user->lastname . $__user->firstname }}",
                'nickname': "{{ $__user->nickname }}",
                'image': "{{ $__user->image }}",
            },
            is_mobile: {{ isset($__mobile) ? ($__mobile ? 'true' : 'false') : 'false' }},
        };
    </script>
@endsection
