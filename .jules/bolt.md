## 2025-05-14 - [Lookup Table for Binary Conversion]
**Learning:** Using a precomputed lookup table for character-to-binary conversion (0-255 range) combined with `Array.join(' ')` provides a significant performance boost (~4x) over bitwise loops and manual string concatenation for large inputs.
**Action:** Use lookup tables for small, fixed-range transformations in performance-critical paths.

## 2025-05-14 - [DOM Update Performance]
**Learning:** `textContent` is faster than `innerHTML` as it bypasses the HTML parser and is also more secure against XSS.
**Action:** Default to `textContent` for updating element text when HTML parsing is not required.
