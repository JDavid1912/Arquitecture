# Bolt's Journal ⚡

## 2025-05-14 - Lookup Table and Join Optimization
**Learning:** For character-to-binary conversion, string concatenation in a loop is O(n^2) due to string immutability. Precomputing a lookup table for all 256 possible byte values and using `Array.join()` significantly improves throughput for large inputs.
**Action:** Use lookup tables for small domain transformations and `Array.join()` for bulk string building.
