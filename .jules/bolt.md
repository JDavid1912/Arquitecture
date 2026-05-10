# Bolt's Journal - Critical Learnings

## 2025-05-15 - [Character-to-Binary Optimization]
**Learning:** String concatenation in a loop for character-to-binary conversion leads to O(n^2) performance degradation due to JavaScript's immutable strings. Precomputing a binary lookup table and using `Array.join()` provides a significant performance boost (~25x for 10k chars).
**Action:** Always favor `Array.join()` and lookup tables for bulk data transformations.
