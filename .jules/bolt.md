## 2025-05-15 - [Binary conversion lookup tables]
**Learning:** Precomputing an 8-bit lookup table (256 entries) for character-to-binary conversion provides a significant performance boost (~4.7x speedup) over bitwise calculations in a loop. Additionally, using `Array.join()` and pre-allocating arrays for large strings avoids the O(n^2) cost of string concatenation.
**Action:** Use lookup tables for small, fixed-range transformations and prefer `Array.join()` over string concatenation in loops for bulk processing.
