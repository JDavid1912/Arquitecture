## 2025-05-15 - Optimization of Binary Conversion Logic
**Learning:** Character-to-binary conversion using O(n²) string concatenation and bitwise loops is a significant bottleneck. Using a precomputed 256-entry lookup table and `Array.join(' ')` with pre-allocated arrays provides a ~17x speedup (120ms to 7ms for 50k chars) in Node.js v22.
**Action:** Always prefer lookup tables for fixed-domain conversions (like 8-bit bytes) and `Array.join` for large string construction.
