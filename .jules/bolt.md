## 2026-07-13 - Redundant string concatenation and bitwise logic in loops

**Learning:** String concatenation inside loops (e.g., `resultado += binario + ' '`) leads to O(n²) time complexity in environments where strings are immutable. Additionally, re-calculating bitwise values for every character is inefficient when the domain (8-bit chars) is small.

**Action:** Use a precomputed lookup table for 8-bit binary strings and use `Array.join(' ')` to construct the final string in O(n) time.
