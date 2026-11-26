---
name: naming-conventions
description: >-
  File and symbol naming conventions for this project. Activate whenever
  creating, renaming, or refactoring React hooks, components, utilities, or
  other TypeScript/TSX files.
---

# Project Naming Conventions

Always follow these naming conventions when creating or refactoring files in this codebase:

1. **Custom React Hooks (`src/hooks/`)**:
   - Use **camelCase** starting with `use` for both the filename and the exported function name.
   - Correct: `src/hooks/useMounted.ts` (`export function useMounted()`), `src/hooks/useMediaQuery.ts`.
   - Incorrect: `src/hooks/use-mounted.ts`, `src/hooks/use_mounted.ts`.
2. **Utilities & Helpers (`src/lib/`, `src/data/`, `src/i18n/`)**:
   - Use **camelCase** for utility and hook-like module filenames when appropriate.
3. **Verification**:
   - When adding or renaming a file, update all `@/` imports and run `biome check` and `tsc --noEmit` to ensure all import paths resolve cleanly.
