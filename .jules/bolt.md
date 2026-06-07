## 2025-05-15 - Matching Legacy 8-bit Truncation
**Learning:** When optimizing character-to-binary conversion logic that manually iterates 8 bits, it is crucial to use `charCodeAt(i) & 0xFF` to match the original truncation behavior. Naive optimization with `toString(2)` on full char codes can produce longer bit strings for non-ASCII characters, leading to logic regressions in decoders expecting fixed-width blocks.
**Action:** Always verify bit-width and truncation behavior against the original implementation when introducing lookup tables or native conversion methods.
