<?php
$app_name = config('app.name');
$title = isset($__title) && strlen($__title) > 0 ? $__title . ' | ' . $app_name : $app_name;
$description = isset($__desc) && strlen($__desc) > 0 ? $__desc : config('app.description');
?>

<meta property="og:title" content="{{ $title }}" />
<meta property="og:description" content="{{ $description }}" />
<title>{{ $title }}</title>
