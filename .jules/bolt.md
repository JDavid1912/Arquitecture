## 2025-05-14 - [Preserving Edge Case Behavior During Optimization]
**Learning:** When replacing a manual calculation loop with a precomputed lookup table, it's crucial to identify and preserve the behavior for inputs that don't fit the table's expected format (e.g., binary segments shorter than 8 bits). My initial optimization used `padEnd` which altered the resulting character code for trailing bits.
**Action:** Always include a fallback mechanism (like the original logic or `parseInt`) for edge cases that fall outside the optimized "hot path" to ensure no breaking changes.
