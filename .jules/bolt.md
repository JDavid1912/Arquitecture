## 2025-05-14 - Character-to-Binary Lookup Safety
**Learning:** When using a 256-entry lookup table for character conversion, using `charCode & 0xFF` ensures the index is always within bounds while maintaining the 8-bit truncation behavior of the original bitwise logic. This prevents crashes or `undefined` results for non-ASCII characters.
**Action:** Always use bitmasking or explicit bounds checking when mapping character codes to fixed-size lookup tables.
