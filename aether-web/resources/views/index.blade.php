<?php
$name = config('app.name');
$title = isset($title) && strlen($title) > 0 ? $title . ' | ' . $name : $name;
$description = isset($description) && strlen($description) > 0 ? $description : config('app.description');
$type = isset($type) && strlen($type) > 0 ? $type : 'website';
?>

@extends('layouts.react')

@section('header')
    <title>{{ $title }}</title>
    <meta property="og:title" content="{{ $title }}" />
    <meta property="og:type" content="{{ $type }}" />
    <meta property="og:url" content="{{ config('app.url') . request()->path() }}" />
    <meta property="og:description" content="{{ $description }}" />
    <meta property="og:locale" content="ko_KR" />
    <meta name="theme-color" content="#222222" />
    <script type="text/javascript">
        window._aether = {
            name: "{{ $name }}",
            domain: "{{ config('session.domain') }}",
            baseUrl: "{{ config('app.url') }}",
            client: "{{ request()->ip() }}",
            agent: {
                'device': "{{ $user_agent['device'] }}",
                'platform': "{{ $user_agent['platform'] }}",
                'platform_version': "{{ $user_agent['platform_version'] }}",
                'browser': "{{ $user_agent['browser'] }}",
            },
            auth: "{{ isset($auth) ? $auth : '' }}",
            user_email: "{{ isset($user_email) ? $user_email : '' }}",
            user_name: "{{ isset($user_lastname) && isset($user_firstname) ? $user_lastname . $user_firstname : '' }}",
            user_nickname: "{{ isset($user_nickname) ? $user_nickname : '' }}",
            user_image: "{{ isset($user_image) ? $user_image : '' }}",
            is_mobile: {{ isset($is_mobile) ? ($is_mobile ? 'true' : 'false') : 'false' }},
        };
    </script>
@endsection
