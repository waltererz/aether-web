<?php
$name = config('app.name');
$title = isset($title) && strlen($title) > 0 ? $title . ' | ' . $name : $name;
$type = isset($type) && strlen($type) > 0 ?? 'website';
$description = isset($description) && strlen($description) > 0 ? $description : config('app.description');
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
            name: "{{ $name }}",
            baseUrl: "{{ config('app.url') }}",
            auth: null,
            currentTabName: null,
        }
    </script>
@endsection
