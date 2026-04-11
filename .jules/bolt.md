## 2025-05-14 - Precomputed Lookup Tables for Character Processing
**Learning:** For tasks involving per-character transformations (like char-to-binary), using a precomputed 256-entry lookup table combined with Array.join() provides a massive (10x) performance boost compared to nested loops and string concatenation.
**Action:** Always consider lookup tables for byte-level operations.
