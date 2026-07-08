## 2025-05-14 - Lookup table for binary conversion
**Learning:** For repetitive conversions (like char to binary), a pre-calculated lookup table for the 0-255 range combined with `Array.join(' ')` provides a significant performance boost (~5-6x) compared to nested loops and string concatenation. Switching to `textContent` also offers a minor speed and security improvement over `innerHTML`.
**Action:** Always check for opportunities to replace nested computation loops with lookup tables and use optimized string construction patterns for large outputs.
