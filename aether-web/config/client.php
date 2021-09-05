<?php

use Jenssegers\Agent\Agent;

$agent = new Agent();

return [
    'user_agent' => [
        'device' => $agent->device(),
        'platform' => ($_platform = $agent->platform()),
        'platform_version' => str_replace('_', '.', $agent->version($_platform)),
        'browser' => $agent->browser(),
    ],

];
