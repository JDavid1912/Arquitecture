## 2026-05-11 - [Lookup Tables & Array.join for String Processing]
**Learning:** For bulk character-to-binary conversion, a precomputed lookup table and `Array.join(' ')` significantly outperforms nested loops with bitwise operations and manual string concatenation. In this codebase, the optimization yielded a ~6-7x performance boost for large inputs.
**Action:** Use lookup tables for fixed-domain transformations (like 8-bit conversions) and prefer `Array.join` over `+=` in loops for efficient string building in JavaScript.
