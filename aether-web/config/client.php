<?php

use Jenssegers\Agent\Agent;

/**
 * Aether에서는 사용자 인증을 위해 각자의 에이전트 정보를 활용합니다.
 * 인증 토큰에 에이전트 정보가 포함되며, 같은 기기에서 접속한 경우에는 최대 30일 로그인 상태를 유지시킬 수 있습니다.
 * 따라서 해당 에이전트 정보는 앱에서 굉장히 중요한 정보이며, React에서 타인이 수정할 수 없는 방법으로 활용되어야 합니다.
 */

/**
 * 에이전트 정보 인스턴스
 * 
 * @var \Jenssegers\Agent\Agent $agent
 */
$agent = new Agent();

return [
    'user_agent' => [
        'device' => $agent->device(),
        'platform' => ($_platform = $agent->platform()),
        'platform_version' => str_replace('_', '.', $agent->version($_platform)),
        'browser' => $agent->browser(),
    ],

];
