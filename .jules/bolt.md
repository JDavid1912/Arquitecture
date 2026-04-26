## 2025-05-15 - [Character to Binary Optimization]
**Learning:** String concatenation in loops for binary conversion creates significant overhead due to string immutability and repeated bitwise calculations. Using a precomputed 256-entry lookup table combined with `Array.join(' ')` provides a ~6x speedup.
**Action:** Always prefer lookup tables for fixed-domain transformations (like 8-bit character encoding) and use `Array` with `join` for building large strings in loops.
