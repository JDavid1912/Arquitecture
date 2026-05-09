## 2025-05-14 - [Character to Binary Bottleneck]
**Learning:** Repeated string concatenation in nested loops for binary conversion creates a significant O(n^2) bottleneck. Precomputing a 256-entry lookup table and using `Array.join(' ')` for final string assembly reduces execution time by over 70% for large inputs (100k+ characters).
**Action:** Always prefer lookup tables for fixed-size data transformations and `Array.join` over `+=` for bulk string construction.
