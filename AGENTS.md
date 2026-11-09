# Development workflow

## Milestone discipline

- Work on one roadmap milestone at a time and keep changes focused.
- Preserve existing work. Inspect `git status`, branches, and repository instructions before editing.
- Use short-lived branches from `main`, focused commits, and pull requests for review.
- Do not merge a pull request or deploy without explicit authorization.
- Do not add personal claims, project achievements, employment, profile links, images, or other assets without verifying their source and publication rights. Track unknowns in `docs/content-checklist.md`.
- Do not add credentials, secret-bearing `.env` files, `node_modules`, or build artifacts to commits. Do not add a license unless Mann chooses one.

## Runtime and verification

Use Node.js 22 and npm, matching `.nvmrc` (when present), `package.json`, CI, and the README. Install with `npm ci`. Before a pull request run:

```sh
npm run lint
npm run typecheck
npm run build
```

GitHub Actions runs the same checks for pull requests and pushes to `main`. Report actual results; do not state a check passed unless it ran successfully.

## Product specification

`docs/design-brief.md` is the visual and product specification. `docs/content-checklist.md` tracks the evidence needed before publishing personal content. The foundation milestone must not implement later portfolio sections.
