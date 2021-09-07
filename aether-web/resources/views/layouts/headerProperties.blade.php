<?php
$app_name = config('app.name');
$pagetype = isset($__pagetype) && strlen($__pagetype) > 0 ? $__pagetype : 'website';
?>

<meta property="og:type" content="{{ $pagetype }}" />
<meta property="og:url" content="{{ config('app.url') . request()->path() }}" />
<meta property="og:locale" content="ko_KR" />
<meta name="theme-color" content="#222222" />
