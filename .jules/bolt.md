## 2025-05-14 - Lookup Table & Array Join for String Processing
**Learning:** In character-to-binary conversion, O(n^2) string concatenation is a major bottleneck. Precomputing a lookup table for 8-bit character codes (0-255) and using `Array.join()` provides a significant (up to 15x) performance boost for large inputs.
**Action:** Use lookup tables for repetitive small-scale conversions and prefer `Array.join()` or pre-allocated arrays over repeated string concatenation in loops.
