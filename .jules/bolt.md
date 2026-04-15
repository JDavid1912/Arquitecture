## 2025-05-14 - Optimized character-to-binary conversion
**Learning:** String concatenation in a loop and bitwise operations on every character are significant bottlenecks for large inputs in JavaScript. Replacing bitwise logic with a precomputed 256-entry lookup table and using `Array.join(' ')` instead of `+=` significantly improves performance.
**Action:** Use lookup tables for repetitive fixed-range calculations and batch DOM updates with `textContent`.
