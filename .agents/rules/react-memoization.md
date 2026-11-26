---
trigger: always_on
---

# React Performance Rules (`useCallback` & `useMemo`)

Always apply `useCallback` and `useMemo` in React Client Components (`"use client"`):

1. **`useCallback` for Event Handlers & Callbacks**:
   - Wrap component event handlers, toggle functions, copy handlers, form submit handlers, and callbacks passed to child components or hooks in `useCallback` with explicit dependency arrays.
2. **`useMemo` for Derived Data, Arrays, Objects & Context Values**:
   - Wrap computed arrays/lists (such as navigation items, translated raw arrays, filtered lists), derived objects, and React Context `value` objects in `useMemo` so references remain stable across renders.
