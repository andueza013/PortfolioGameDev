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
  /** Secondary context shown under the heading — studio, campus, publisher. */
  orgNote?: string;
  /** Free-form date range, rendered verbatim. */
  date: string;
  /** One bullet each on the CV. */
  points: string[];
}

export interface Project {
  name: string;
  /** Tech stack / platform line, shown opposite the name. */
  meta: string;
  /** Absolute URL — printed after the name on paper, so it must be resolvable. */
  link?: string;
  /** One bullet each on the CV. */
  points: string[];
}

export interface SkillCategory {
  label: string;
  skills: { name: string; hi?: boolean }[];
}

export const profile = {
  name: 'Fernando Fernández Andueza',
  role: 'Gameplay & AI Programmer',
  email: 'anduezadev@gmail.com',
  portfolio: 'https://andueza013.github.io/PortfolioGameDev',
  linkedin: 'https://linkedin.com/in/fernando-fernandez-andueza',
  itch: 'https://anduezadev.itch.io',
  location: 'Valencia, Spain',
  facts: [
    ['Based in', 'Valencia, Spain'],
    ['Work status', 'EU citizen, no visa needed to work in the EU'],
    ['Availability', 'Open to relocation within Spain and to remote work'],
    ['Languages', 'Spanish (native)'],
  ] as [string, string][],
};

/** The "Profile" block of the CV. The Switch and PS4 detail lives under XEMA. */
export const summary =
  'Gameplay and AI programmer. I built the enemy AI for Beerserker: The Stolen Brew (Early ' +
  'Access on Steam, team of about 20): all four archetypes, in StateTree with C++ and ' +
  'Blueprints. I built XEMA, my own C++ and OpenGL engine, with an ECS and ' +
  'deferred PBR rendering. I work with Unreal and Unity, and before games I spent two and a ' +
  'half years as a fullstack developer on ERP software.';

export const experience: Entry[] = [
  {
    role: 'Gameplay & AI Programmer',
    org: 'Beerserker: The Stolen Brew',
    orgLink: 'https://store.steampowered.com/app/4522440/',
    orgNote:
      'ESAT final-year project, team of about 20 · developed by Grumpy Games and ESAT, ' +
      'published on Steam by ESAT (Early Access, free)',
    date: 'Sept 2025 — Jul 2026',
    points: [
      'Implemented the four enemy archetypes (melee, ranged, explosive and a tank mini-boss) ' +
        'with StateTree in C++ and Blueprints, with custom tasks and conditions.',
      'Built a templated object pool as a plugin, reusable in other projects, for the many ' +
        'enemies, particles, decals and projectiles.',
      'Used EQS to pick where the ranged enemy retreats to, based on distance to the player ' +
        'and line of sight. The tank favours its less-used melee attacks, so it ' +
        'doesn’t keep repeating the same one.',
      'Built the enemy spawners, set up and uploaded the Steam builds, and took part in ' +
        'designing the architecture of a custom GAS-based action system.',
    ],
  },
  {
    role: 'Gameplay Programmer',
    org: 'Roadtrip: The Engine of Madness',
    orgLink: 'https://store.steampowered.com/app/3776540/Roadtrip_El_Motor_de_la_Locura/',
    orgNote: 'Oniric Tales',
    date: 'Dec 2024 — Jun 2025',
    points: [
      'Designed and built core gameplay systems: a component-based dialogue system, an AI ' +
        'perception system integrated with the behaviour trees, and a radio communication system.',
      'Also worked on the Behavior Graph, general gameplay mechanics, profiling and bug fixing.',
    ],
  },
  {
    role: 'Fullstack Developer',
    org: 'AHORA',
    date: 'Sept 2020 — Mar 2023',
    points: [
      'Enterprise management system: frontend with Vue.js, TypeScript and DevExtreme; ' +
        'backend in VB and C# on MSSQL.',
      'Built products, components and extensions with FlexyGo, an in-house low-code framework.',
      'Handled client incidents, often on site. Worked in Scrum.',
    ],
  },
];

export const education: Entry[] = [
  {
    role: 'HND in Video Game Programming',
    org: 'ESAT — Escuela Superior de Arte y Tecnología',
    orgNote: 'Valencia',
    date: '2023 — 2026',
    points: [
      'Video game programming, specialising in C++: my own graphics engine from scratch, ' +
        'procedural generation (Wave Function Collapse, cellular automata, L-systems), a ' +
        'templated FSM, A* pathfinding, and assembly to find and fix bottlenecks in inner loops.',
    ],
  },
  {
    role: 'DAM — Multiplatform Application Development',
    org: 'IES El Grao',
    orgNote: 'Valencia',
    date: '2018 — 2020',
    points: [
      'Java for desktop and Android, relational databases, HTML and CSS, OOP fundamentals and ' +
        'version control.',
    ],
  },
  {
    role: 'Certified Scrum Master & Product Owner',
    org: 'Scrum.org / International Agile Institutes',
    date: 'Professional credentials',
    points: [],
  },
];

// Only work that does NOT already appear under `experience` — a one-page CV is the
// worst place to say the same thing twice.
export const cvProjects: Project[] = [
  {
    name: 'XEMA — custom 3D engine',
    meta: 'C++ · OpenGL 4.5 · Nintendo Switch (emulator)',
    link: 'https://andueza013.github.io/PortfolioGameDev/graphic-engine',
    points: [
      'ECS, deferred PBR, shadow mapping, instancing, a JobSystem for async mesh loading, ' +
        'Lua scripting and PhysX.',
      'Ported to Nintendo Switch, tested only on an emulator. PS4 port in progress on a ' +
        'devkit: the ECS and simple-geometry rendering work; mesh loading, textures, ' +
        'instancing, lights, shadows and PBR are still missing.',
    ],
  },
  {
    name: 'Abandoned Hospital',
    meta: 'Unreal Engine 5 · C++ · AI Perception, EQS',
    points: [
      'Class exercise with AI Perception and EQS on a behaviour tree; I later rebuilt it on ' +
        'my own, with the AI rewritten in StateTree.',
    ],
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
      { name: 'ImGui' },
      { name: 'GLFW' },
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
      { name: 'Nintendo Switch (emulator)' },
      { name: 'PlayStation 4 (partial, devkit)' },
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
      { name: 'HTML / CSS' },
      { name: 'Vue.js' },
      { name: 'SQL Server' },
      { name: 'Java' },
      { name: 'VB .NET' },
    ],
  },
];

// The one-page CV folds the home page's eight categories into five rows.
const cvSkillGroups: [string, string[]][] = [
  ['Engines & AI', ['Game engines', 'AI & gameplay']],
  ['Languages', ['Languages']],
  ['Graphics & systems', ['Graphics & systems']],
  ['Tools & platforms', ['Debugging & profiling', 'Tooling', 'Platforms']],
  ['Outside games', ['Outside games']],
];

/** Flat "label: a, b, c" rows for the CV's skills block, derived from the categories above. */
export const skillRows: [string, string][] = cvSkillGroups.map(([label, sources]) => [
  label,
  skillCategories
    .filter((c) => sources.includes(c.label))
    .flatMap((c) => c.skills.map((s) => s.name))
    .join(', '),
]);
