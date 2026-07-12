## 2026-07-12 - Lookup Table vs Bitwise
**Learning:** For a fixed set of inputs (like 8-bit character codes), a pre-calculated lookup table is significantly faster than performing bitwise operations in a nested loop. In this codebase, the optimization yielded a ~3.6x speedup.
**Action:** Use lookup tables for small, finite input sets in hot code paths.

## 2026-07-12 - String Concatenation Performance
**Learning:** Repeatedly appending to a string in a loop can be O(n^2) due to string immutability. Pre-allocating an array and using `Array.join()` is much more efficient for large strings.
**Action:** Prefer `Array.join()` over string concatenation for building large strings in loops.
