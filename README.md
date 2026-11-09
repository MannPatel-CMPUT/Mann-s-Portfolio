# Mann Patel Portfolio

Foundation for Mann Patel’s portfolio website. This milestone provides a minimal Next.js application and project workflow; portfolio content and visual design are planned follow-up work.

## Requirements

- Node.js 22 (npm is included with Node.js)
- npm

## Setup

```sh
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The foundation currently needs no environment variables.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Check TypeScript types without emitting files |
| `npm run build` | Create the production build |
| `npm start` | Serve the production build locally |

Run `npm run lint`, `npm run typecheck`, and `npm run build` before opening a pull request.

## Project structure

```text
app/                         App Router pages, layout, and global styles
components/ui/               Shared accessible controls
public/images/README.md      Photography sources and licenses
docs/design-brief.md         Product and visual requirements plus roadmap
docs/content-checklist.md    Verification status for portfolio materials
.github/workflows/ci.yml     Pull request and main-branch checks
```

## Deployment

The app can be deployed to a Node.js host that supports Next.js 16, or to a compatible managed Next.js platform. Use Node.js 22, install with `npm ci`, and build with `npm run build`. Configure any future runtime variables in the hosting provider; never commit secrets. Deployment configuration and production release are outside this foundation milestone.

## Product requirements and workflow

See [docs/design-brief.md](docs/design-brief.md), [docs/content-checklist.md](docs/content-checklist.md), and [AGENTS.md](AGENTS.md).
