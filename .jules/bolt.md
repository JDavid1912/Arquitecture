## 2025-05-14 - Binary Decoding Performance in Node.js v22
**Learning:** Refactoring binary-to-text decoding logic to use `slice(i, i + 8)` and a lookup table resulted in a performance regression (e.g., ~12ms to ~26ms) compared to original bitwise logic. The overhead of string slicing and table lookup exceeded the cost of bitwise multiplication/shifts for 8-bit chunks.
**Action:** Always benchmark "optimized" lookup tables against bitwise logic for small-width (<= 8 bit) conversions before assuming they are faster.
