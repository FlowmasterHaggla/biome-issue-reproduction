# Biome IntelliJ Issue #233 Reproduction

## What This Is

This is a minimal Node.js project to reproduce `biomejs/biome-intellij` issue `#233` using `@biomejs/biome@2.4.9`. It includes a tiny Fastify server and reproducible formatter/linter inputs so behavior can be compared between IntelliJ and CLI.

## Core Value

Anyone can clone this repository and reliably reproduce the IntelliJ plugin behavior with Biome `2.4.9`.

## Requirements

### Validated

(None yet - ship to validate)

### Active

- [ ] Reproduction environment installs and runs locally with minimal setup.
- [ ] Biome is pinned to version `2.4.9` and used by both CLI scripts and IDE plugin.
- [ ] Reproduction steps are documented and deterministic.

### Out of Scope

- Fixing the upstream IntelliJ plugin issue - this repo only reproduces.
- Production-ready backend architecture - Fastify is only a realistic fixture.

## Context

- Target issue: `https://github.com/biomejs/biome-intellij/issues/233`
- Requested stack: Node.js + Fastify + Biome `2.4.9`
- Goal is fast reproduction, not feature completeness.

## Constraints

- **Tech stack**: Node.js project with Fastify - required by request.
- **Tool version**: `@biomejs/biome@2.4.9` - exact version required for reproduction consistency.
- **Scope**: Minimal files only - reduce noise and avoid unrelated variables.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Use plain JavaScript instead of TypeScript | Keep repro minimal and avoid transpilation variables | - Pending |
| Pin Biome exactly to 2.4.9 | Reproduction must match reported issue version | - Pending |
| Include a Fastify server fixture | Repro should look like a real Node backend project | - Pending |

---
*Last updated: 2026-03-31 after initialization*

