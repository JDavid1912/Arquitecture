# Bolt's Journal - Critical Learnings Only

## 2026-11-02 - Precomputed Lookup Tables and Array Pre-allocation for Text-to-Binary Conversion
**Learning:** In character-by-character binary conversion, repeated inner bitwise bit-shifting loops combined with string concatenation creates unnecessary computational overhead and string reallocations. A 256-element precomputed lookup table combined with pre-allocated array joining provides >4x speedup without changing behavior for ASCII or UTF-16 characters when masked with `& 0xFF`.
**Action:** When performing byte-wise encoding/conversions over large strings, prefer precomputed table lookups and pre-allocated arrays joined at the end over inner bit loops and string concatenation.
