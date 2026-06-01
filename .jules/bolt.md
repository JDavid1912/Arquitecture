## 2025-06-01 - [Optimizing character-to-binary conversion]
**Learning:** For bulk string transformations in JavaScript (like character-to-binary), using a precomputed lookup table combined with array pre-allocation and `Array.join()` provides a massive performance boost (measured at ~27x) compared to manual bitwise loops and O(n^2) string concatenation.
**Action:** Always prefer lookup tables for fixed-domain transformations (like 0-255 char codes) and `Array.join()` for large-scale string building.
