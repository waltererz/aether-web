@extends('layouts.standalone')

@section('title', config('app.name'))
@section('description', config('app.description'))

@section('footer')
    <script src="{{ mix('/js/manifest.js') }}" type="text/javascript"></script>
    <script src="{{ mix('/js/vendor.js') }}" type="text/javascript"></script>
    <script defer src="{{ mix('/js/landing.js') }}" type="text/javascript"></script>
@endsection
