## 2026-10-11 - Pre-computed lookup table & array join for text-to-binary conversion
**Learning:** In text manipulation routines processing multi-character input, repeated bitwise operations in nested loops and string concatenation (`+=`) cause $O(n^2)$ memory re-allocations and severe slowdowns (~10x slowdown on 60k characters).
**Action:** Use a pre-computed 256-entry lookup table for byte-to-binary representation along with pre-allocated arrays and `Array.join(' ')` to achieve O(n) execution and minimal garbage collector overhead.
