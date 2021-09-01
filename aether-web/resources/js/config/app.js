const _config = {
    name: window._aether.name,                  // 어플리케이션 이름
    client: window._aether.client,              // 클라이언트 IP주소
    agent: window._aether.agent,                // 클라이언트 에이전트 이름
    auth: window._aether.auth,                  // 현재 로그인된 사용자 UUID
    domain: window._aether.domain,              // 세션 도메인

    url: {
        app: window._aether.baseUrl,
        backend: 'http://back.erzsphilos.com',  // 백엔드 서버 URL
        api: 'http://back.erzsphilos.com/api',  // API 서버 URL
    },

    route: {
        default: 1,
        home: 2,
        asset: 3,
        investment: 4,
        advisor: 5,
        developer: 6,
        user: 7,
    },
}

export default _config;