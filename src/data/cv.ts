// src/data/cv.ts
// Single source of truth for CV content.
//
// Consumed by:
//   - src/pages/cv.astro     — the print-optimised CV
//   - src/pages/index.astro  — the #resume and #skills sections of the home page
//
// Both pages used to carry their own copy of this data and the two had already
// drifted apart. Edit here, never in the pages.
//
// House style: British English ("behaviour", "specialisation", "optimising").
// Exception: product and API names keep their own spelling — Unreal's
// "Behavior Tree" asset and Unity's "Behavior Graph" package are proper nouns.

export interface Entry {
  /** Job title, degree or certification. */
  role: string;
  /** Company, product or institution. */
  org: string;
  /** External URL for `org`, when there is one to link to. */
  orgLink?: string;
  /** Secondary context shown after `org` — studio, campus, publisher. */
  orgNote?: string;
  /** Free-form date range, rendered verbatim. */
  date: string;
  body: string;
}

export interface Project {
  name: string;
  /** Tech stack / platform line, shown opposite the name. */
  meta: string;
  /** Absolute URL — printed after the name on paper, so it must be resolvable. */
  link?: string;
  body: string;
}

export interface SkillCategory {
  label: string;
  skills: { name: string; hi?: boolean }[];
}

export const profile = {
  name: 'Fernando Fernández Andueza',
  role: 'Gameplay & AI Programmer',
  email: 'anduezadev@gmail.com',
  linkedin: 'https://linkedin.com/in/fernando-fernandez-andueza',
  github: 'https://github.com/andueza013',
  itch: 'https://anduezadev.itch.io',
  location: 'Valencia, Spain',
  facts: [
    ['Based in', 'Valencia, Spain'],
    ['Work status', 'EU citizen — no visa sponsorship needed in the EU'],
    ['Availability', 'Open to relocation within Spain, and to remote work'],
    ['Languages', 'Spanish (native) · English (professional)'],
  ] as [string, string][],
};

/** The "Profile" block of the CV. */
export const summary =
  'Gameplay and AI programmer working in Unreal Engine 5 (C++ and Blueprints). ' +
  'Shipped Beerserker: The Stolen Brew on Steam, owning the enemy AI in StateTree. ' +
  'Wrote XEMA, a custom C++ engine, from scratch — OpenGL 4.5, deferred PBR rendering, ' +
  'an ECS core and a Nintendo Switch port, with a PlayStation 4 port in progress. ' +
  'Two prior years as a fullstack developer shipping ERP software in production.';

export const experience: Entry[] = [
  {
    role: 'Gameplay & AI Programmer',
    org: 'Beerserker: The Stolen Brew',
    orgLink: 'https://store.steampowered.com/app/4522440/',
    orgNote: 'ESAT final-year production, published on Steam by Grumpy Games',
    date: 'Sept 2025 — Present',
    body:
      'Enemy AI on a 10-month production built by a 20+ person multidisciplinary team at ESAT ' +
      'and released commercially on Steam. Designed and implemented four distinct enemy ' +
      'archetypes in StateTree (Unreal Engine 5, C++) — melee, ranged and explosive enemies, ' +
      'plus a tank mini-boss with four unique attack patterns.',
  },
  {
    role: 'Unity Game Developer',
    org: 'Roadtrip: The Engine of Madness',
    orgLink: 'https://store.steampowered.com/app/3776540/Roadtrip_El_Motor_de_la_Locura/',
    orgNote: 'Oniric Tales',
    date: 'Dec 2024 — Jun 2025',
    body:
      'Design, architecture and development of core gameplay systems. Built a scalable ' +
      'component-based dialogue system, an AI perception system integrated into behaviour ' +
      'trees, and a radio communication system; contributed to the Behavior Graph, general ' +
      'gameplay mechanics, profiling and bug fixing.',
  },
  {
    role: 'Fullstack Developer (ERP)',
    org: 'Enterprise software industry',
    date: 'Sept 2020 — Feb 2023',
    body:
      'Built scalable web applications and enterprise services with Vue.js, TypeScript and ' +
      'Microsoft SQL Server. Managed production server environments and resolved live client ' +
      'incidents under strict SLAs, working in Agile teams as a certified Scrum Product Owner ' +
      'and Scrum Master.',
  },
];

export const education: Entry[] = [
  {
    role: 'HND in Video Game Programming',
    org: 'ESAT — Escuela Superior de Arte y Tecnología',
    orgNote: 'Valencia',
    date: '2023 — 2025',
    body:
      'Specialisation in low-level systems and game loops. Built XEMA, a cross-platform 3D ' +
      'engine from scratch in C++ (OpenGL 4.5 DSA, deferred shading, PBR), implemented ECS ' +
      'frameworks with O(1) access constraints, and ported the codebase to Nintendo Switch.',
  },
  {
    role: 'DAM — Multiplatform Application Development',
    org: 'IES El Grao',
    orgNote: 'Valencia',
    date: '2018 — 2020',
    body:
      'Object-oriented programming, relational databases (SQL) and application design ' +
      'patterns; mobile and desktop development, client-server architecture and version ' +
      'control workflows.',
  },
  {
    role: 'Scrum Master & Product Owner',
    org: 'Scrum.org / International Agile Institutes',
    date: 'Professional credentials',
    body:
      'Certified in both roles: bridging design requirements and system architecture, ' +
      'optimising production pipelines and managing technical debt across team iterations.',
  },
];

// Only work that does NOT already appear under `experience` — a one-page CV is the
// worst place to say the same thing twice.
export const cvProjects: Project[] = [
  {
    name: 'XEMA — custom 3D engine',
    meta: 'C++ · OpenGL 4.5 · Nintendo Switch',
    link: 'https://andueza013.github.io/PortfolioGameDev/graphic-engine',
    body:
      'Solo-built engine, 10 months. ECS core storing components in contiguous arrays with ' +
      'O(1) access, deferred renderer with PBR, a std::future job system driving asynchronous ' +
      'asset loading, multithreaded Wave Function Collapse for biome generation, Lua scripting ' +
      'through sol2 and PhysX 5 integration. Ported to Nintendo Switch via libnx and EGL; a ' +
      'PlayStation 4 port to GNM/GNMX is in progress.',
  },
  {
    name: 'Abandoned Hospital',
    meta: 'Unreal Engine 5 · C++ · AI Perception, EQS',
    body:
      'Enemy and NPC behaviour driven by AI Perception and EQS in Unreal Engine. First ' +
      'implemented with behaviour trees, then rebuilt from scratch on StateTree to compare ' +
      'both approaches to the same problem.',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    label: 'Game engines',
    skills: [
      { name: 'Unreal Engine 5 (C++ & Blueprints)', hi: true },
      { name: 'Unity (C#)', hi: true },
      { name: 'XEMA — custom C++ engine', hi: true },
    ],
  },
  {
    label: 'AI & gameplay',
    skills: [
      { name: 'StateTree', hi: true },
      { name: 'Behaviour Trees', hi: true },
      { name: 'EQS' },
      { name: 'AI Perception' },
      { name: 'Animation systems' },
      { name: 'Object pooling' },
    ],
  },
  {
    label: 'Languages',
    skills: [
      { name: 'C++', hi: true },
      { name: 'C#', hi: true },
      { name: 'C' },
      { name: 'Lua' },
    ],
  },
  {
    label: 'Graphics & systems',
    skills: [
      { name: 'OpenGL 4.5 DSA', hi: true },
      { name: 'Deferred shading / PBR', hi: true },
      { name: 'Vertex & fragment shaders' },
      { name: 'ECS architecture' },
      { name: 'Multithreading & job systems' },
      { name: 'Memory management & pointers' },
      { name: 'PhysX 5' },
    ],
  },
  {
    label: 'Debugging & profiling',
    skills: [
      { name: 'Unreal Insights', hi: true },
      { name: 'Visual Studio debugger', hi: true },
      { name: 'RenderDoc', hi: true },
    ],
  },
  {
    label: 'Platforms',
    skills: [
      { name: 'PC (Windows)' },
      { name: 'Nintendo Switch', hi: true },
      { name: 'PlayStation 4 (in progress)' },
    ],
  },
  {
    label: 'Tooling',
    skills: [
      { name: 'Git' },
      { name: 'Perforce' },
      { name: 'Plastic SCM' },
      { name: 'Premake5' },
    ],
  },
  {
    label: 'Outside games',
    skills: [
      { name: 'TypeScript / JavaScript' },
      { name: 'Vue.js' },
      { name: 'SQL Server' },
      { name: 'Java' },
      { name: 'VB .NET' },
    ],
  },
];

/** Flat "label: a, b, c" rows for the CV's skills block, derived from the categories above. */
export const skillRows: [string, string][] = skillCategories.map((c) => [
  c.label,
  c.skills.map((s) => s.name).join(', '),
]);
