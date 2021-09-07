@extends('layouts.react')

@section('header')
    @include('layouts.headerProperties')
    @include('layouts.headerPropertiesDefaultExtended')
    @include('layouts.headerJS')
@endsection

@section('scripts')
    <script
        src="{{ preg_replace('/^\/admin\/(.*?)$/', 'http://admin.erzsphilos.com:38591/$1', mix('/admin/js/app.js')) }}"
        type="text/javascript"></script>
@endsection
