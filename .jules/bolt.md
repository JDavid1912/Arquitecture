## 2025-05-14 - [V8 Performance: Manual bitwise parsing vs parseInt]
**Learning:** Manual bitwise accumulation (e.g., `charCode = (charCode << 1) | bit`) is significantly faster than `parseInt(substring, 2)` when processing large volumes of small (e.g., 8-bit) binary string segments in V8. `parseInt` has higher overhead due to its generic string parsing logic.
**Action:** Use manual bitwise parsing for small, fixed-width binary strings in hot loops.
