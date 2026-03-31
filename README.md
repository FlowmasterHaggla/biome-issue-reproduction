# Biome IntelliJ Issue #233 Reproduction

Minimal Node.js + Fastify project with `@biomejs/biome@2.4.9` for reproducing:
`https://github.com/biomejs/biome-intellij/issues/233`

## Prerequisites

- Node.js 20+
- IntelliJ IDEA with Biome plugin enabled

## Setup

```bash
npm install
```

## Commands

```bash
npm run start
npm run check
npm run check:workspaces
npm run format
npm run lint
```

## Workspace Packages

This repository now uses Node workspaces:

- `packages/auth-tests`
- `packages/content-tests`
- `packages/admin-tests`

Each workspace includes Fastify-focused test class files under `tests/`.
The class fixtures intentionally contain Biome warnings to help reproduce IDE-vs-CLI diagnostics behavior.

## Reproduction Steps

1. Open this project in IntelliJ IDEA.
2. Confirm plugin picks up root `biome.json`.
3. Open `src/repro-sample.js`.
4. Run `npm run check` and `npm run format` in terminal to establish CLI behavior.
5. Trigger the equivalent action in IntelliJ (format-on-save or explicit format/check action).
6. Compare IntelliJ output/diagnostics with CLI output.

## Expected Checkpoints

- CLI uses pinned `@biomejs/biome@2.4.9`.
- `src/repro-sample.js` is transformed by CLI format command.
- Any mismatch between CLI behavior and IntelliJ plugin behavior is the repro signal to capture.
