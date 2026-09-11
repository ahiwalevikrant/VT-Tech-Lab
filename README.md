# VT Tech Lab — Portfolio

Portfolio site for **VT Tech Lab**, the freelance studio of Vikrant Ahiwale.
Built with Next.js (App Router) + TypeScript + Tailwind CSS, exported as a
static site so it can be hosted directly on GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build a static export

```bash
npm run build
```

This produces a static site in the `out/` folder (because `next.config.mjs`
sets `output: "export"`).

## Deploy to GitHub Pages

You have two options:

### Option A — Automatic (recommended)

1. Push this project to a new GitHub repo, e.g. `vt-tech-lab`.
2. In the repo, go to **Settings → Pages → Build and deployment → Source**,
   and set it to **GitHub Actions**.
3. Push to `main`. The included workflow at
   `.github/workflows/deploy.yml` will build and publish automatically.
   - It auto-sets the base path to `/<repo-name>`, so links and assets work
     correctly at `https://<your-username>.github.io/<repo-name>/`.
   - If you're deploying this as your **user page** repo (named exactly
     `<your-username>.github.io`), open `.github/workflows/deploy.yml` and
     delete the `BASE_PATH` env line so the site is built with no base path.

### Option B — Manual

```bash
npm run build
# then push the contents of the `out/` folder to a `gh-pages` branch,
# or use a tool like `gh-pages`:
npx gh-pages -d out
```

If deploying manually to a **project page** (not a user page), set the base
path before building:

```bash
BASE_PATH=/vt-tech-lab npm run build
```

## Editing content

All resume, experience, and project copy lives in one place:
`lib/content.ts`. Update names, links, or project details there — the
components pull from it directly, so there's nothing else to hunt down.

## Structure

```
app/                 Routes, layout, global styles
components/          Nav, Hero, Skills, Projects, Experience, Contact
lib/content.ts       All editable copy (profile, skills, experience, projects)
.github/workflows/   GitHub Pages auto-deploy
```
