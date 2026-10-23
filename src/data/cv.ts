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
  /** Employer or institution. Kept to the company name: ATS parsers read the
   *  text after the job title as the employer. */
  org: string;
  /** External URL for `org`, when there is one to link to. */
  orgLink?: string;
  /** The game worked on, shown on the line under the heading. */
  product?: string;
  /** External URL for `product` (its Steam page). */
  productLink?: string;
  /** Secondary context — engine, campus, project type, publisher. */
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
  /** Context line under the heading — project type, team, publisher. */
  note?: string;
  /** One bullet each on the CV. */
  points: string[];
}

export interface SkillCategory {
  label: string;
  skills: { name: string; hi?: boolean }[];
}

export const profile = {
  name: 'Fernando Fernández Andueza',
  role: 'Gameplay and AI Programmer',
  email: 'anduezadev@gmail.com',
  portfolio: 'https://andueza013.github.io/PortfolioGameDev',
  linkedin: 'https://linkedin.com/in/fernando-fernandez-andueza',
  itch: 'https://anduezadev.itch.io',
  location: 'Valencia, Spain',
  facts: [
    ['Based in', 'Valencia, Spain'],
    ['Work status', 'EU citizen, no visa needed to work in the EU'],
    ['Availability', 'Open to relocation and to remote work'],
    ['Languages', 'Spanish (native), English (intermediate)'],
  ] as [string, string][],
};

/** The "Profile" block of the CV: who I am, not what I built — the projects say that. */
export const summary =
  'Game programmer focused on game AI, gameplay systems and procedural generation, working in ' +
  'C++ with Unreal Engine 5 and in C# with Unity. I have a Higher National Diploma (HND) in ' +
  'Computing: Video Games Programming from ESAT and spent two and a half years as a fullstack developer ' +
  'before moving into games.';

export const experience: Entry[] = [
  {
    role: 'Gameplay Programmer',
    org: 'Oniric Tales',
    product: 'Roadtrip: The Engine of Madness',
    productLink: 'https://store.steampowered.com/app/3776540/Roadtrip_El_Motor_de_la_Locura/',
    orgNote: 'Unity',
    date: 'Dec 2024 – Jun 2025',
    points: [
      'Built the core architecture of the game.',
      'Built the AI with Unity’s Behavior Graph, including a perception system written entirely by me.',
      'Built a component-based dialogue system and the car radio, which plays songs on several ' +
        'stations like a real car radio.',
      'Also worked on other gameplay mechanics, profiling and bug fixing.',
    ],
  },
  {
    role: 'Fullstack Developer',
    org: 'AHORA',
    date: 'Sep 2020 – Mar 2023',
    points: [
      'Developed business management software with FlexyGo, the company’s in-house low-code ' +
        'framework, using C#, VB.NET, SQL Server, JavaScript, jQuery, HTML and CSS.',
      'Worked on a production plant’s back office, the forklift drivers’ handheld app, ' +
        'quality-control tools and an offline mobile clock-in app with facial recognition. ' +
        'Built a ZPL label-printing app on my own.',
      'Also worked on apps for maintenance, HR, sales and real estate management. Handled ' +
        'client incidents, often on site, in a Scrum team.',
    ],
  },
];

export const education: Entry[] = [
  {
    role: 'HND in Computing: Video Games Programming',
    org: 'ESAT (Escuela Superior de Arte y Tecnología)',
    orgNote: 'Valencia',
    date: '2023–2026',
    points: [
      'C++, algorithms and data structures, ' +
        'memory management, low-level programming in 32- and 64-bit ARM assembly, graphics ' +
        'programming, and Unreal Engine and Unity. Final-year project: Beerserker.',
    ],
  },
  {
    role: 'DAM (Multiplatform Application Development)',
    org: 'IES El Grao',
    orgNote: 'Valencia',
    date: '2018–2020',
    points: [
      'Java for desktop and Android, relational databases, HTML and CSS, OOP fundamentals and ' +
        'version control.',
    ],
  },
  {
    role: 'Certified Scrum Master and Product Owner',
    org: 'Scrum.org / International Agile Institutes',
    date: '',
    points: [],
  },
];

// Only work that does NOT already appear under `experience` — a one-page CV is the
// worst place to say the same thing twice.
export const cvProjects: Project[] = [
  {
    // A student project, so it lives here rather than under `experience`
    name: 'Beerserker: The Stolen Brew',
    meta: 'Unreal Engine 5, C++',
    link: 'https://store.steampowered.com/app/4522440/',
    note:
      'Final-year project at ESAT, made with Grumpy Games by a team of about 20. ' +
      'Free and available on Steam.',
    points: [
      'Built the four enemy types (melee, ranged, explosive and a tank mini-boss) in StateTree, ' +
        'with custom tasks and conditions in C++ and Blueprints.',
      'Wrote an object pool for enemies, projectiles, particles and decals, packaged as a ' +
        'plugin so other projects can reuse it.',
      'The ranged enemy uses EQS to find somewhere to retreat to, based on distance to the ' +
        'player and line of sight.',
      'The tank favours the melee attacks it has used least, so it doesn’t keep repeating ' +
        'the same one.',
      'Built the enemy spawners, set up and uploaded the Steam builds, and took part in ' +
        'designing the architecture of a custom action system based on GAS (Gameplay Ability System).',
    ],
  },
  {
    name: 'XEMA (custom C++ engine)',
    meta: 'C++, OpenGL 4.5',
    link: 'https://andueza013.github.io/PortfolioGameDev/graphic-engine',
    points: [
      'Built from scratch on my own. Includes an ECS, deferred PBR rendering, shadow mapping, instancing, a job system that ' +
        'loads meshes asynchronously, Lua scripting and PhysX. Resources are managed with ' +
        'RAII and smart pointers.',
      'Ported to Nintendo Switch (tested only on an emulator). PS5 port in progress.'
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    label: 'Game engines',
    skills: [
      { name: 'Unreal Engine 5 (UE5) with C++ and Blueprints', hi: true },
      { name: 'Unity (C#)', hi: true },

    ],
  },
  {
    label: 'AI and gameplay',
    skills: [
      { name: 'StateTree', hi: true },
      { name: 'Behavior Trees', hi: true },
      { name: 'EQS (Environment Query System)' },
      { name: 'AI Perception' },
      { name: 'Animation Montages' },
      { name: 'Gameplay Ability System (GAS)' },
      { name: 'Gameplay Tags' },
      { name: 'Actor Components' },
      { name: 'Subsystems' },
    ],
  },
  {
    label: 'Languages',
    skills: [
      { name: 'C++ (C++17 to C++23, STL)', hi: true },
      { name: 'C#', hi: true },
      { name: 'C' },
      { name: 'ARM assembly (32- and 64-bit)' },
    ],
  },
  {
    label: 'Graphics and systems',
    skills: [
      { name: 'OpenGL 4.5 DSA', hi: true },
      { name: 'deferred shading', hi: true },
      { name: 'PBR', hi: true },
      { name: 'vertex and fragment shaders' },
      { name: 'Entity Component System (ECS)' },
      { name: 'multithreading and job systems' },
      { name: 'memory management' }

    ],
  },
  {
    label: 'Debugging and profiling',
    skills: [
      { name: 'Visual Studio debugger', hi: true },
      { name: 'Unreal Insights', hi: true },
      { name: 'RenderDoc', hi: true },
    ],
  },
  {
    label: 'Version control',
    skills: [
      { name: 'Git' },
      { name: 'Perforce' },
      { name: 'Plastic SCM' }
    ],
  },
  {
    label: 'Outside games',
    skills: [
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'Vue.js' },
      { name: 'SQL Server' },
      { name: 'Java' },
      { name: 'VB.NET' },
    ],
  },
];

// The one-page CV folds the home page's seven categories into five rows.
const cvSkillGroups: [string, string[]][] = [
  ['Engines and AI', ['Game engines', 'AI and gameplay']],
  ['Programming languages', ['Languages']],
  ['Graphics and systems', ['Graphics and systems']],
  ['Tools', ['Debugging and profiling', 'Version control']],
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
