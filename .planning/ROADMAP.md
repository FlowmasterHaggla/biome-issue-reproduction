# Roadmap: Biome IntelliJ Issue #233 Reproduction

## Overview

Build a minimal Node.js/Fastify project pinned to Biome `2.4.9`, add reproducible source files and commands, and document exact IDE-vs-CLI reproduction steps for the IntelliJ plugin issue.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Foundation Setup** - Initialize Node project, Fastify app, and pinned Biome dependency.
- [ ] **Phase 2: Repro Inputs** - Add reproducible sample files and CLI scripts for checks and formatting.
- [ ] **Phase 3: Repro Documentation** - Document exact IntelliJ reproduction workflow and verification checkpoints.

## Phase Details

### Phase 1: Foundation Setup
**Goal**: A clean install starts a minimal Fastify service with Biome pinned to 2.4.9.
**Depends on**: Nothing (first phase)
**Requirements**: [SETUP-01, SETUP-02, SETUP-03]
**Success Criteria** (what must be TRUE):
  1. `npm install` completes on a clean checkout.
  2. `npm run start` starts Fastify and serves a health route.
  3. `npm ls @biomejs/biome` shows version `2.4.9`.
**Plans**: 2 plans

Plans:
- [ ] 01-01: Create package metadata, scripts, and ignore rules.
- [ ] 01-02: Add Fastify server and verify startup.

### Phase 2: Repro Inputs
**Goal**: Reproduction files and Biome config are in place for CLI and IDE behavior checks.
**Depends on**: Phase 1
**Requirements**: [REPRO-01, REPRO-02]
**Success Criteria** (what must be TRUE):
  1. Biome configuration file is detected by CLI in repository root.
  2. `npm run check` and `npm run format` execute against sample files.
  3. Sample files are deterministic and suitable for repeated comparison.
**Plans**: 2 plans

Plans:
- [ ] 02-01: Add `biome.json` and sample source fixture.
- [ ] 02-02: Validate scripts and command outputs locally.

### Phase 3: Repro Documentation
**Goal**: Anyone can execute consistent steps in IntelliJ and compare with CLI behavior.
**Depends on**: Phase 2
**Requirements**: [REPRO-03, VERI-01, VERI-02]
**Success Criteria** (what must be TRUE):
  1. README contains complete, ordered reproduction steps.
  2. Verification section defines expected CLI checkpoints and where plugin output may diverge.
  3. Artifact set is sufficient for filing follow-up findings without extra setup.
**Plans**: 1 plan

Plans:
- [ ] 03-01: Write reproducible workflow and verification notes.

## Progress

**Execution Order:**
Phases execute in numeric order: 1 -> 2 -> 3

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation Setup | 0/2 | Not started | - |
| 2. Repro Inputs | 0/2 | Not started | - |
| 3. Repro Documentation | 0/1 | Not started | - |

