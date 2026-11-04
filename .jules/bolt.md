# Bolt's Journal - Critical Learnings Only

## 2026-11-04 - Binary-to-text arithmetic loop vs parseInt
**Learning:** In `mostrarBinario1`, the bitwise arithmetic loop `charCode * 2 + (byte[j] === '1' ? 1 : 0)` performs faster than `parseInt(byte, 2)` or 256-entry reverse lookup maps due to avoid substring allocation / parsing overhead.
**Action:** Do not replace bitwise arithmetic decoding in `mostrarBinario1` with parseInt or map lookups unless profiling proves otherwise.
