## 2026-07-14 - Lookup Table and Pre-allocation for Binary Conversion
**Learning:** Replacing nested bitwise loops and manual string concatenation with a pre-computed lookup table and `Array.join` significantly reduces O(N) operations. Pre-allocating the array with `new Array(len)` is more efficient than dynamic resizing for large inputs.
**Action:** Always check for character-level transformations that can be memoized or pre-computed, and use `textContent` instead of `innerHTML` for simple text updates to bypass HTML parsing.
