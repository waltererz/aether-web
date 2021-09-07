<?php
$title = $__user->lastname . $__user->firstname . ' | ' . config('app.name');
$description = isset($__user->signature) ? $__user->signature : config('app.description');
?>

<meta property="og:title" content="{{ $title }}" />
<meta property="og:description" content="{{ $description }}" />
<title>{{ $title }}</title>
