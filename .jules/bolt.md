# Bolt's Journal

## 2026-08-14 - Character-to-Binary Lookup Table & Input Truncation
**Learning:** When optimizing character-to-binary string conversions with lookup tables, non-ASCII characters (with code points > 255) must be truncated using a bitwise mask `& 0xFF` to match the exact mathematical truncation behavior of the original unoptimized loop, preventing regressions.
**Action:** Always apply `& 0xFF` before table lookup for 8-bit conversions of general text inputs.
