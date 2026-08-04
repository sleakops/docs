# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is the Docusaurus 3 site for [docs.sleakops.com](https://docs.sleakops.com), edited via Sveltia CMS. Content lives under `content/docs/<en|es>/<section>/`, `content/tutorials/<en|es>/`, and `content/changelog/<en|es>/`. For the full writing style guide (voice, doc article vs tutorial structure, FAQ format, tags, image conventions), see `.claude/skills/sleakops-docs` — this file only covers repo mechanics.

## Development Commands

```bash
make install     # yarn install (via docker compose)
make run         # docker compose up -d — dev server on :4000 (English content)
make run-es      # dev server with locale=es
make build       # production build, all locales
make build-en / make build-es   # single-locale build
make serve       # serve the production build locally
make collections # regenerate Sveltia CMS config.yml from the content/ folder structure
make tutorials   # regenerate tutorials-generated.json from tutorial MDX files
make clear       # clear Docusaurus cache
```

**Always start via `yarn start`/`make run`, never `npx docusaurus start` directly.** The `prestart`/`prebuild` npm hooks run `sync_content.js`, which builds the symlinks Docusaurus actually reads (`docs/ → content/docs/en`, `i18n/es/docusaurus-plugin-content-docs/current/ → content/docs/es`, etc.) from the CMS-friendly `content/<type>/<locale>/` structure. Skipping the hook leaves stale or broken symlinks and the dev server fails with "the docs folder does not exist".

Other repo scripts run as part of those hooks — `clean_frontmatter.js` (strips empty frontmatter fields that fail validation), `cleanup_cms_temp.js` (removes Sveltia's temp hex-named folders), `generate_tutorials.js` (builds the tutorials showcase index), `fix_links.js` (one-off ES link-prefix repair, not part of the normal hook chain).

The Docusaurus dev server does not SSR content in dev mode (`view-source` just shows an empty `<div id="__docusaurus">` shell) — verifying rendered output requires a real browser, not `curl`.

## FAQ `<details>`/`<summary>` gotcha

Docusaurus's `<Details>` component looks for a `<summary>` element among its JSX children to use as the disclosure title. If `<summary>`, its text, and `</summary>` are collapsed onto **one line**, MDX parses it in a way that breaks that lookup, and the component silently falls back to the literal placeholder text **"Details"** instead of showing the question. Always split it across separate lines:

```mdx
<details>
  <summary>
    ### Your question here?
  </summary>
  Your answer.
</details>
```

not `<summary>### Your question here?</summary>` on a single line.
