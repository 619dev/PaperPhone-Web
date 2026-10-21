(() => {
  const template = document.getElementById('code-architecture').cloneNode(true);
  const copy = {
    en: ['Explore the code architecture.', 'Interactive maps of clients, messaging, databases, files, and external dependencies. Click components for commit-pinned source. Diagram content is in Chinese; native shell internals are outside this overview.', 'Open interactive map ↗'],
    ja: ['コードから構成を理解。', 'クライアント、メッセージ、データベース、ファイル、外部依存を表示。要素から固定版ソースを参照できます。図は中国語で、ネイティブシェル内部は対象外です。', 'インタラクティブ図を開く ↗'],
    ko: ['코드 아키텍처 살펴보기.', '클라이언트, 메시징, 데이터베이스, 파일 및 외부 의존성을 표시합니다. 구성 요소에서 고정 버전 소스를 확인하세요. 도표는 중국어이며 네이티브 셸 내부는 제외됩니다.', '대화형 도표 열기 ↗'],
    fr: ['Explorer l’architecture du code.', 'Clients, messagerie, bases, fichiers et dépendances externes. Cliquez pour consulter les sources à une révision précise. Diagrammes en chinois ; détails des coques natives exclus.', 'Ouvrir le diagramme ↗'],
    de: ['Die Codearchitektur erkunden.', 'Clients, Nachrichten, Datenbanken, Dateien und externe Dienste. Komponenten verlinken auf einen festen Quellstand. Diagramme auf Chinesisch; interne native Hüllen sind ausgenommen.', 'Interaktive Karte öffnen ↗'],
    ru: ['Архитектура по исходному коду.', 'Клиенты, сообщения, базы данных, файлы и внешние зависимости. Нажмите компонент для исходников фиксированной версии. Схемы на китайском; внутренности нативных оболочек не показаны.', 'Открыть интерактивную схему ↗'],
    es: ['Explora la arquitectura del código.', 'Clientes, mensajería, bases de datos, archivos y dependencias externas. Pulsa los componentes para ver el código de una revisión fija. Diagramas en chino; se omiten los detalles internos de las aplicaciones nativas.', 'Abrir mapa interactivo ↗']
  };
  window.mountArchitecture = lang => {
    document.getElementById('code-architecture')?.remove();
    const section = template.cloneNode(true);
    const text = copy[lang] || copy.en;
    section.querySelector('[data-arch-title]').textContent = text[0];
    section.querySelector('[data-arch-description]').textContent = text[1];
    section.querySelectorAll('[data-arch-open]').forEach(link => { link.textContent = text[2]; });
    section.querySelectorAll('iframe').forEach(frame => { frame.title = `${frame.title.split(' ')[0]} architecture`; });
    document.querySelector('main .cta').before(section);
  };
})();
