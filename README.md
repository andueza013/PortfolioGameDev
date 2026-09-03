# Portfolio — Fernando Fernández Andueza

Personal portfolio of a Gameplay & AI Programmer (Unreal Engine 5 / C++, Unity / C#,
and XEMA — a custom C++ engine shipped to Nintendo Switch).

Built with [Astro](https://astro.build) as a fully static site and deployed to GitHub Pages
at **https://andueza013.github.io/PortfolioGameDev**.

## Structure

```text
public/
├── favicon.svg, favicon.ico
├── profile.jpeg              # also used as the Open Graph preview image
└── project-images/           # card thumbnails
src/
├── components/
│   ├── Nav.astro             # sticky header + mobile menu, shared across pages
│   ├── ProjectCard.astro     # card for the "Other projects" grid
│   └── ResumeEntry.astro     # one block of the home page timeline
├── data/
│   └── cv.ts                 # experience, education, projects, skills
├── layouts/
│   └── Layout.astro          # <head>, meta/OG tags, skip link, nav + footer
├── pages/
│   ├── index.astro           # hero, featured projects, other projects, résumé, skills, contact
│   ├── cv.astro              # print-optimised CV (Ctrl+P → A4 PDF)
│   └── graphic-engine.astro  # XEMA technical breakdown
└── styles/
    └── global.css            # design tokens + all component styles
```

## Content

Experience, education, selected projects and the skills list live in `src/data/cv.ts`.
Both `src/pages/cv.astro` and the résumé and skills sections of `src/pages/index.astro`
read from it, so **edit that file, never the pages** — the two used to hold separate
copies and they drifted apart.

House style is British English ("behaviour", "specialisation"). Product names keep their
own spelling, so Unreal's "Behavior Tree" and Unity's "Behavior Graph" stay as they are.

The "Other projects" grid is the `otherProjects` array in the frontmatter of
`src/pages/index.astro`, since it is page-specific.

## Commands

| Command           | Action                                        |
| :---------------- | :-------------------------------------------- |
| `npm install`     | Install dependencies                          |
| `npm run dev`     | Dev server at `localhost:4321/PortfolioGameDev` |
| `npm run build`   | Build the production site to `./dist/`        |
| `npm run preview` | Preview the build locally                     |

Requires Node.js >= 22.12.0.

## Deployment

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to
`develop` (the repository's default branch), or manually via *workflow_dispatch*.

`astro.config.mjs` sets `site` and `base: '/PortfolioGameDev'`. Because the site is served
from a subpath, **every internal link and asset must be prefixed with
`import.meta.env.BASE_URL`** — a bare `href="/"` resolves to the domain root and 404s.
