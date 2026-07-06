## 2025-05-14 - Lookup Table with Bitmasking
**Learning:** When using a pre-allocated lookup table for character codes (0-255), applying a bitmask `& 0xFF` to `charCodeAt()` ensures that any non-ASCII or wide characters are handled gracefully by truncation, maintaining functional parity with legacy bit-shifting logic while enabling O(1) retrieval.
**Action:** Use bitmasking for fixed-size character lookup tables to prevent out-of-bounds access and ensure consistent behavior across all character sets.
