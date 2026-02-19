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

The project is configured to produce a static `out/` folder via `npm run build` (Next's `output: 'export'` in `next.config.js`). The repository workflow uploads `out/` and deploys to GitHub Pages using the official Pages actions.

By default the site assumes it will be served from the domain root. If you want to host as a project site (https://<username>.github.io/<repo>/), set the `BASE_PATH` environment variable before building so asset paths resolve correctly.

Example (locally building for a project site):

```bash
# on Windows PowerShell
$env:BASE_PATH = '/repo'
npm run build
npx serve out -l 3000
```

Editing content

- Primary source of truth: `src/data/profile.ts` — edit name, bio, skills, experiences, and projects here.
- Projects must include full GitHub repo URLs for the repo links to work.

Deploy via GitHub Actions

1. Push to `main` branch.
2. Workflow `.github/workflows/deploy.yml` will build the site, upload the `out/` artifact, and deploy it to GitHub Pages (using the official Pages actions).

If you prefer user site (`<username>.github.io`), create a repository named exactly that, push this code to `main`, and GitHub Pages will serve the site. For a project site, set `BASE_PATH` to `/<repo>` during build (see above).

Notes

- The site is intentionally minimal and static — no secrets or backends required.
- Edit `src/components` and `src/app` to change layout and styles.
