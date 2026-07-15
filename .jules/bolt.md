## 2026-07-15 - Maintaining functional parity with bitmasking
**Learning:** When replacing manual bitwise loops (which naturally truncate to the bits they iterate over, e.g., 8 bits) with a lookup table, it's critical to bitmask the input character code (e.g., `& 0xFF`) to maintain identical behavior for non-ASCII or multi-byte characters.
**Action:** Always use bitmasking (like `& 0xFF`) when mapping `charCodeAt` to a fixed-size 256-entry lookup table to ensure functional parity with legacy 8-bit conversion logic.
