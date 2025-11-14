export const ROADMAPS = {
  frontend: {
    id: 'frontend',
    title: 'Front-end Developer',
    description: 'Build beautiful, responsive user interfaces using HTML, CSS, and JavaScript frameworks.',
    steps: [
      { step: 1, title: 'HTML & Accessibility', eta: '1-2 weeks', desc: 'Semantic HTML, forms, accessibility, and best practices.' },
      { step: 2, title: 'CSS Fundamentals', eta: '1-2 weeks', desc: 'Box model, Flexbox, Grid, responsive design.' },
      { step: 3, title: 'Advanced Styling', eta: '1-2 weeks', desc: 'Animations, transitions, preprocessors (Sass), design systems.' },
      { step: 4, title: 'JavaScript & DOM', eta: '2-3 weeks', desc: 'Core JS, DOM manipulation, events, fetch and async.' },
      { step: 5, title: 'Frameworks', eta: '3-6 weeks', desc: 'React (or Vue/Angular) fundamentals, state, routing.' },
      { step: 6, title: 'Tooling & Testing', eta: '2-3 weeks', desc: 'Build tools, bundlers, unit and E2E testing.' },
      { step: 7, title: 'Performance & Accessibility', eta: '2 weeks', desc: 'Optimization, Lighthouse, accessibility audits.' },
      { step: 8, title: 'Projects & Portfolio', eta: 'ongoing', desc: 'Build projects: SPA, component library, real site.' }
    ]
  },
  backend: {
    id: 'backend',
    title: 'Back-end Developer',
    description: 'Design APIs, databases, and server-side logic with reliability and security.',
    steps: [
      { step: 1, title: 'Language Basics', eta: '1-2 weeks', desc: 'Choose a backend language: Node.js, Python, Java, etc.' },
      { step: 2, title: 'HTTP & REST', eta: '1-2 weeks', desc: 'Design RESTful APIs, status codes, routes.' },
      { step: 3, title: 'Databases', eta: '2-3 weeks', desc: 'Relational (Postgres) and NoSQL (MongoDB), schema design.' },
      { step: 4, title: 'Authentication & Security', eta: '2 weeks', desc: 'JWT, OAuth, hashing, input validation, rate limiting.' },
      { step: 5, title: 'Testing & CI', eta: '2 weeks', desc: 'Unit tests, integration tests, CI pipelines.' },
      { step: 6, title: 'Scaling & Caching', eta: '2-3 weeks', desc: 'Caching, queues, horizontal scaling and observability.' },
      { step: 7, title: 'Deployment', eta: '1-2 weeks', desc: 'Containers, cloud providers, infrastructure basics.' }
    ]
  },
  fullstack: {
    id: 'fullstack',
    title: 'Full-stack Developer',
    description: 'A balanced path combining front-end and back-end skills to build end-to-end applications.',
    steps: [
      { step: 1, title: 'Web Fundamentals', eta: '2-3 weeks', desc: 'HTML, CSS, JavaScript basics.' },
      { step: 2, title: 'Frontend Framework', eta: '3-5 weeks', desc: 'React/Vue + state management and routing.' },
      { step: 3, title: 'Backend Basics', eta: '2-3 weeks', desc: 'Server-side language and REST APIs.' },
      { step: 4, title: 'Database & Auth', eta: '2-3 weeks', desc: 'DBs, auth, ORM/Query builders.' },
      { step: 5, title: 'Integrations & DevOps', eta: '2-3 weeks', desc: 'Deployments, CI, observability.' },
      { step: 6, title: 'Real Projects', eta: 'ongoing', desc: 'Build full apps with tests and monitoring.' }
    ]
  },
  python: {
    id: 'python',
    title: 'Python Developer',
    description: 'Learn Python for scripting, data, and backend development.',
    steps: [
      { step: 1, title: 'Python Basics', eta: '1-2 weeks', desc: 'Syntax, data types, control flow, functions.' },
      { step: 2, title: 'Libraries & Tooling', eta: '1-2 weeks', desc: 'pip, virtualenv, packaging, popular libs.' },
      { step: 3, title: 'Web with Flask/Django', eta: '2-4 weeks', desc: 'Build simple web apps and APIs.' },
      { step: 4, title: 'Data & Automation', eta: '2-4 weeks', desc: 'Pandas, scripts, automation, scraping.' },
      { step: 5, title: 'Testing & Deployment', eta: '2 weeks', desc: 'Testing practices and deployment.' }
    ]
  },
  flutter: {
    id: 'flutter',
    title: 'Flutter Developer',
    description: 'Build cross-platform mobile apps using Flutter and Dart.',
    steps: [
      { step: 1, title: 'Dart Basics', eta: '1-2 weeks', desc: 'Dart syntax, types, async, and packages.' },
      { step: 2, title: 'Flutter Fundamentals', eta: '2-3 weeks', desc: 'Widgets, layout, state management.' },
      { step: 3, title: 'Navigation & APIs', eta: '1-2 weeks', desc: 'Routing, network requests, persistence.' },
      { step: 4, title: 'Animations & UX', eta: '2 weeks', desc: 'Animations, transitions and native integrations.' },
      { step: 5, title: 'Testing & Release', eta: '2 weeks', desc: 'Testing and publishing to stores.' }
    ]
  }
};

export const ROADMAP_LIST = Object.values(ROADMAPS);
