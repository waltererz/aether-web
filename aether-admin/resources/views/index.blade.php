@extends('layouts.react')

@section('header')
    @include('layouts.headerProperties')
@endsection

@section('scripts')
    <script src="{{ mix('/js/app.js') }}" type="text/javascript"></script>
@endsection
