## 2025-05-15 - Optimizing Character-to-Binary Conversion
**Learning:** In scenarios involving repetitive conversion of 8-bit values (like ASCII characters to binary strings), a precomputed lookup table provides a significant performance boost (~O(1) vs O(bits)). Additionally, avoiding O(n^2) string concatenation by using pre-allocated arrays and `Array.join()` is critical for handling large inputs efficiently in JavaScript.
**Action:** Always check for repeated small-domain calculations that can be memoized or precomputed, and prioritize array joins over string concatenation in loops.
