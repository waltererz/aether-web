@extends('layouts.react')

@section('header')
    @include('layouts.headerProperties')
    @include('layouts.headerPropertiesDefaultExtended')
@endsection

@section('scripts')
    <script src="{{ mix('/js/landing.js') }}" type="text/javascript"></script>
@endsection
