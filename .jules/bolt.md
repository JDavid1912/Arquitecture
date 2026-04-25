## 2025-05-14 - [Character to Binary Optimization]
**Learning:** For bulk string transformations (like character to 8-bit binary), using a precomputed lookup table (256 entries) combined with `Array` pre-allocation and `join(' ')` significantly outperforms bitwise calculations and string concatenation.
**Action:** Always favor lookup tables and `Array.join` for batch processing of character data to avoid O(n^2) string operations and redundant calculations.
