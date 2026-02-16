# AI × Finance Lab Notebook — Portfolio

Local dev, editing, and GitHub Pages deployment instructions.

Getting started

1. Install dependencies:

```bash
npm install
```

2. Run locally:

```bash
npm run dev
```

Static export for GitHub Pages

This project uses `next export` to produce a static `out/` folder which the workflow publishes to the `gh-pages` branch.

By default the site assumes it will be served from the domain root. If you want to host as a project site (https://<username>.github.io/<repo>/), set the `BASE_PATH` environment variable before building.

Example (locally building for a project site):

```bash
# on Windows PowerShell
$env:BASE_PATH = '/repo'
npm run build
npm run export
```

Editing content

- Primary source of truth: `src/data/profile.ts` — edit name, bio, skills, experiences, and projects here.
- Projects must include full GitHub repo URLs for the repo links to work.

Deploy via GitHub Actions

1. Push to `main` branch.
2. Workflow `.github/workflows/deploy.yml` will build and publish `out/` to `gh-pages` branch.

If you prefer user site (`<username>.github.io`), create a repository named exactly that, push this code to `main`, and GitHub Pages will serve the site. For a project site, set `BASE_PATH` to `/<repo>` during build (see above).

Notes

- The site is intentionally minimal and static — no secrets or backends required.
- Edit `src/components` and `src/app` to change layout and styles.
