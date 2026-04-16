## 2025-05-14 - Lookup Table and Array Join for Binary Conversion
**Learning:** For high-throughput character-to-binary conversion, replacing bitwise loops and O(n^2) string concatenation with a precomputed 256-entry lookup table and `Array.join()` provides a ~6x performance improvement for large inputs (100k+ chars).
**Action:** Always prefer precomputed tables for fixed-domain conversions (like ASCII) and avoid building large strings inside loops via concatenation.
