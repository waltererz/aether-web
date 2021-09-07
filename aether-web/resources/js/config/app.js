const _config = {
    name: window._aether.name,                  // 어플리케이션 이름
    client: window._aether.client,              // 클라이언트 IP주소
    agent: window._aether.agent,                // 클라이언트 에이전트 이름
    auth: window._aether.auth,                  // 현재 로그인된 사용자 UUID
    domain: window._aether.domain,              // 세션 도메인
    is_mobile: window._aether.is_mobile,        // 모바일기기 접속 유무

    url: {
        app: window._aether.baseUrl,
        backend: 'http://back.erzsphilos.com',  // 백엔드 서버 URL
        api: 'http://back.erzsphilos.com/api',  // API 서버 URL
    },

    user: {}
}

if ('user' in window._aether) {
    _config.user = {
        email: window._aether.user.email,
        name: window._aether.user.name,
        nickname: window._aether.user.nickname,
        group: window._aether.user.group,
        image: window._aether.user.image,
    }
}

Object.freeze(_config);

export default _config;