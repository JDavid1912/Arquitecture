## 2025-05-15 - [Maintaining Functional Parity in Conversion]
**Learning:** When optimizing character-to-binary conversion, it's crucial to replicate the original code's truncation behavior (e.g., using `& 0xFF`) to ensure that non-ASCII characters and surrogate pairs produce the same binary output as the unoptimized version, preventing functional regressions.
**Action:** Always verify that optimized lookup-table-based conversions handle edge cases like high-range characters identically to the original bit-shifting logic.
