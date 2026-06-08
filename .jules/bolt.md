## 2025-05-15 - Binary decoding performance regression
**Learning:** In Node.js v22, using `parseInt(byte, 2)` on 8-bit slices is significantly slower (~2x) than a manual loop for binary-to-decimal conversion during bulk processing.
**Action:** Prefer manual bit manipulation or bitwise operators for hot paths involving small fixed-width binary string conversions.
