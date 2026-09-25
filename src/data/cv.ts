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
  itch: 'https://anduezadev.itch.io',
  location: 'Valencia, Spain',
  facts: [
    ['Based in', 'Valencia, Spain'],
    ['Work status', 'EU citizen — no visa sponsorship needed in the EU'],
    ['Availability', 'Open to relocation within Spain, and to remote work'],
    ['Languages', 'Spanish (native)'],
  ] as [string, string][],
};

/** The "Profile" block of the CV. */
export const summary =
  'Gameplay and AI programmer. I built the enemy AI for Beerserker: The Stolen Brew ' +
  '(Steam, Early Access) with StateTree in Unreal Engine 5. I built XEMA, a custom C++ ' +
  'engine, from scratch, with OpenGL 4.5, deferred PBR rendering and an ECS core. I ported ' +
  'it to Nintendo Switch, where I have only tested it on an emulator, and a PlayStation 4 ' +
  'port is under way: the ECS and simple-geometry rendering work, on a devkit. Before that ' +
  'I spent two and a half years as a fullstack developer on ERP software.';

export const experience: Entry[] = [
  {
    role: 'Gameplay & AI Programmer',
    org: 'Beerserker: The Stolen Brew',
    orgLink: 'https://store.steampowered.com/app/4522440/',
    orgNote:
      'Final-year project at ESAT. Developed by Grumpy Games and ESAT, published on Steam by ' +
      'ESAT (Early Access, free)',
    date: 'Sept 2025 — Jul 2026',
    body:
      'About 20 people across programming, art, design, music and production. I implemented ' +
      'the four enemy archetypes in StateTree, in C++ and Blueprints, with custom tasks and ' +
      'conditions, and used EQS to query the environment. I also built a templated object ' +
      'pool as a plugin (enemies, projectiles, decals and particles), so it is modular and ' +
      'can be taken to other projects, and the enemy spawners, ' +
      'and took part in designing the architecture of a custom GAS-based action system. I was ' +
      'responsible for configuring and uploading the Steam builds.',
  },
  {
    role: 'Gameplay Programmer',
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
    role: 'Fullstack Developer',
    org: 'AHORA',
    date: 'Sept 2020 — Mar 2023',
    body:
      'Frontend of an enterprise management system with Vue.js, TypeScript, SCSS, HTML, ' +
      'Bootstrap, Flexbox and DevExtreme. Developed products and management systems with ' +
      'FlexyGo, an in-house low-code framework, and built components and extensions for it. ' +
      'Backend in VB and C# on MSSQL; frontend with TypeScript, HTML, CSS and WebComponents. ' +
      'Handled and resolved client incidents, with frequent travel to the client’s site. ' +
      'Worked with Agile methodologies (Scrum).',
  },
];

export const education: Entry[] = [
  {
    role: 'HND in Video Game Programming',
    org: 'ESAT — Escuela Superior de Arte y Tecnología',
    orgNote: 'Valencia',
    date: '2023 — 2026',
    body:
      'Specialisation in video game programming, especially in C++. Over three years I have ' +
      'built a graphics engine from scratch, which taught me how graphics engines work under ' +
      'the hood, both in software architecture and in the graphics pipeline, and published a ' +
      'game on Steam with Unreal Engine 5. I have also worked on procedural generation, ' +
      'implementing WFC (in my own engine); a templated FSM from scratch; Markov chains (to ' +
      'choose which attack the Beerserker tank uses, with weights that adjust dynamically); ' +
      'A* pathfinding; cellular automata and L-systems. During the three years we also learned ' +
      'to program in assembly and to read the assembly our C++ compiles to, in order to ' +
      'identify bottlenecks and performance problems, especially in inner loops, and fix them ' +
      'with optimisation techniques. This last year I have specialised as an AI programmer, ' +
      'building the four enemy archetypes with StateTree in UE 5.6.',
  },
  {
    role: 'DAM — Multiplatform Application Development',
    org: 'IES El Grao',
    orgNote: 'Valencia',
    date: '2018 — 2020',
    body:
      'Java programming with Eclipse and NetBeans for desktop, and Android Studio for mobile. ' +
      'Relational databases, HTML and CSS. Fundamentals of OOP and version control.',
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
    meta: 'C++ · OpenGL 4.5 · Nintendo Switch (emulator)',
    link: 'https://andueza013.github.io/PortfolioGameDev/graphic-engine',
    body:
      'A graphics engine I built entirely myself in C++ and OpenGL. It has an ECS ' +
      'architecture, deferred PBR rendering with shadow mapping and instanced rendering, a JobSystem ' +
      'for tasks such as asynchronous mesh loading, Lua scripting and PhysX for physics. I use ' +
      'GLFW for the window and input, and ImGui for visual markers of entities, components ' +
      'and performance. It runs on PC and I have ported it to Nintendo Switch, where I have ' +
      'only tested it on an emulator. The PS4 port is in progress: so far the ECS and ' +
      'rendering of simple geometry work, on a devkit. Mesh loading, textures, instancing, ' +
      'lights, shadows and PBR are still missing.',
  },
  {
    name: 'Abandoned Hospital',
    meta: 'Unreal Engine 5 · C++ · AI Perception, EQS',
    body:
      'Class exercise to work with AI Perception and EQS in Unreal Engine, built with a ' +
      'behaviour tree, for enemy and NPC behaviour. Once I had handed it in, I rebuilt it on ' +
      'my own with free assets and rewrote the AI from scratch with StateTree.',
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

/** Flat "label: a, b, c" rows for the CV's skills block, derived from the categories above. */
export const skillRows: [string, string][] = skillCategories.map((c) => [
  c.label,
  c.skills.map((s) => s.name).join(', '),
]);
