// PWA 설치 요건을 충족하기 위한 서비스 워커입니다.
// 과거 데이터가 캐싱되어 업데이트를 방해하지 못하도록
// 항상 네트워크에서 직접 정보를 가져옵니다.

self.addEventListener('install', (event) => {
    // 설치 즉시 활성화 되도록 강제합니다.
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    // 활성화 후 모든 탭을 제어합니다.
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
    // 어떠한 캐싱 로직도 없이 요청을 그대로 통과시킵니다.
    event.respondWith(fetch(event.request));
});