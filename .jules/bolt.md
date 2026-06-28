## 2026-06-28 - [Optimizing Binary Conversion in JavaScript]
**Learning:** String concatenation in a loop (O(n^2)) is a major bottleneck for large inputs. Using a precomputed lookup table for frequent conversions (like 8-bit char codes to binary strings) and `Array.join()` significantly improves performance.
**Action:** Always prefer `Array.join()` over `+=` for large string accumulations and use lookup tables for fixed-domain transformations.
