@extends('layouts.react')

@section('header')
    @include('layouts.headerProperties')
    @include('layouts.headerPropertiesDefaultExtended')
    @include('layouts.headerJS')
@endsection

@section('scripts')
    <script src="{{ mix('/js/app.js') }}" type="text/javascript"></script>
@endsection
