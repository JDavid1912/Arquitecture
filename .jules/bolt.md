## 2025-05-15 - [O(n^2) String Concatenation & Bitwise Loop Bottleneck]
**Learning:** For large input strings, repeated string concatenation (`+=`) in a loop leads to O(n^2) performance due to string immutability. Additionally, performing bitwise operations for every character can be replaced by an O(1) lookup table for 8-bit values.
**Action:** Always prefer pre-allocating an `Array(len)` and using `.join()` for bulk string building. Use precomputed lookup tables for character-to-binary or similar frequent transformations.
