# Bolt's Journal

Critical learnings only.

## 2026-11-10 - Binary decoding in mostrarBinario1
**Learning:** In `mostrarBinario1`, attempting to optimize the character decoding using `parseInt(byte, 2)` or 8-bit lookup maps was measurably slower than the existing simple arithmetic loop (`charCode * 2 + (byte[j] === '1' ? 1 : 0)`) due to V8's inline optimizations for primitive integer arithmetic.
**Action:** Keep `mostrarBinario1`'s bit-shift arithmetic loop untouched; focus optimizations on character-to-binary encoding (`mostrarBinario`) where lookup tables and string concatenation eliminate nested loops and intermediate string allocations.
