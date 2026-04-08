## 2025-05-15 - [String Concatenation in Loops]
**Learning:** Manual bit manipulation and string concatenation in loops (`+=`) in JavaScript is significantly slower than using built-in `toString(2)` with `padStart` and `Array.join`. For large strings (100k chars), the improvement was ~2x in this specific environment, but can be even more pronounced in memory-constrained scenarios due to reduced allocations.
**Action:** Use `Array.push()` and `join()` for accumulating large strings, and prefer optimized built-in methods for numeric conversions.
