# Requirements: Biome IntelliJ Issue #233 Reproduction

**Defined:** 2026-03-31
**Core Value:** Anyone can clone this repository and reliably reproduce the IntelliJ plugin behavior with Biome `2.3.15`.

## v1 Requirements

### Setup

- [ ] **SETUP-01**: User can install dependencies with `npm install` from a clean checkout.
- [ ] **SETUP-02**: Project pins `@biomejs/biome` to exactly `2.3.15`.
- [ ] **SETUP-03**: User can start a Fastify server with `npm run start`.

### Reproduction

- [ ] **REPRO-01**: User can open the project in IntelliJ and Biome plugin detects `biome.json`.
- [ ] **REPRO-02**: User can run `npm run check` and `npm run format` against sample files.
- [ ] **REPRO-03**: User can follow documented steps to reproduce the issue and record observed IDE behavior.

### Verification

- [ ] **VERI-01**: User can compare Biome CLI output with IntelliJ plugin behavior for the same file.
- [ ] **VERI-02**: Repro repository contains deterministic sample inputs and expected checkpoints.

## v2 Requirements

None currently.

## Out of Scope

| Feature | Reason |
|---------|--------|
| Upstream plugin fix implementation | This project is only for reproduction |
| Full backend application features | Not required to trigger/report the issue |
| CI/CD pipeline and deployment | Adds complexity unrelated to IDE behavior |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| SETUP-01 | Phase 1 | Pending |
| SETUP-02 | Phase 1 | Pending |
| SETUP-03 | Phase 1 | Pending |
| REPRO-01 | Phase 2 | Pending |
| REPRO-02 | Phase 2 | Pending |
| REPRO-03 | Phase 3 | Pending |
| VERI-01 | Phase 3 | Pending |
| VERI-02 | Phase 3 | Pending |

**Coverage:**
- v1 requirements: 8 total
- Mapped to phases: 8
- Unmapped: 0

---
*Requirements defined: 2026-03-31*
*Last updated: 2026-03-31 after roadmap creation*
