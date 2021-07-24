@extends('layout.react')

@section('header')
    <title>{{ isset($title) ? $title . ' :: ' . env('APP_TITLE') : env('APP_TITLE') }}</title>
    <meta property="og:title" content="{{ isset($title) ? $title . ' :: ' . env('APP_TITLE') : env('APP_TITLE') }}" />
    <meta property="og:type" content="{{ $type ?? 'website' }}" />
    <meta property="og:url" content="{{ url()->current() }}" />
    <meta property="og:description" content="누구나 쉽고 재미있게 친구들과 함께 투자의 세계에 빠지다." />
    <meta property="og:locale" content="ko_KR" />
@endsection
