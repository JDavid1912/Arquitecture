# Bolt's Journal - Critical Learnings

## 2026-10-10 - Pre-allocated Array Lookup for Character-to-Binary Conversion
**Learning:** Replacing nested bitwise string loops with a pre-computed 256-element binary lookup table and array join yields a ~10x execution speed improvement for string conversion while eliminating $O(n^2)$ string concatenation overhead.
**Action:** Use global lookup tables for fixed-domain byte transformations and `Array.join(' ')` with pre-allocated arrays when building formatted output strings in hot paths.
