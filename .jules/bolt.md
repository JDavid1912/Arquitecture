## 2025-05-15 - Precomputed Lookup Tables for Character Processing
**Learning:** For character-to-binary conversion (and similar mapping tasks), a 256-entry lookup table combined with `Array.join()` is significantly faster (~5x) than bitwise operations and string concatenation in a loop.
**Action:** Use lookup tables and `Array.join()` for heavy string processing loops in this codebase.
