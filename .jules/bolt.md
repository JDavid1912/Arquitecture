## 2026-10-12 - Character Code Lookup Table Optimization

**Learning:** Character-to-binary conversion in JavaScript loops suffers from $O(N \times 8)$ bitwise operations and string concatenation overhead. Pre-computing an 8-bit binary lookup table (`BINARY_LOOKUP`) and pre-allocating an array for string joining eliminates inner bitwise loops and reduces runtime by ~90%.
**Action:** Always pre-allocate fixed lookup tables for byte/char-level operations (0-255) and avoid string concatenation inside hot loops.
