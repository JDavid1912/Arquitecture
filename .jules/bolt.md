## 2026-10-13 - String concatenation in bitwise conversion loops
**Learning:** In vanilla JavaScript string manipulation routines, replacing inner bitwise bit-string concatenation and outer string appending with a global 256-entry lookup table and `Array.prototype.join(' ')` improves conversion performance by >2.4x.
**Action:** Always preallocate arrays and use precomputed lookup tables when processing byte sequences.
