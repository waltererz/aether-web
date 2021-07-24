<?php
$name = env('APP_TITLE');
$title = isset($title) && strlen($title) > 0 ? $title . ' :: ' . env('APP_TITLE') : env('APP_TITLE');
$type = isset($type) && strlen($type) > 0 ?? 'website';
$description = isset($description) && strlen($description) > 0 ? $description : env('APP_DESCRIPTION');
?>

@extends('layout.react')

@section('header')
    <title>{{ $title }}</title>
    <meta property="og:title" content="{{ $title }}" />
    <meta property="og:type" content="{{ $type }}" />
    <meta property="og:url" content="{{ config('app.url') . $_SERVER['REQUEST_URI'] }}" />
    <meta property="og:description" content="{{ $description }}" />
    <meta property="og:locale" content="ko_KR" />
    <script type="text/javascript">
        window._aether = {
            title: "{{ $name }}",
            description: "{{ $description }}",
            auth: null,
        }
    </script>
@endsection
