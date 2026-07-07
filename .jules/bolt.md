# Bolt's Journal - Critical Learnings

## 2025-05-14 - Initial Assessment
**Learning:** The `mostrarBinario` function uses string concatenation in a loop and manual bit calculation, which is inefficient for large inputs. `innerHTML` is also used for plain text.
**Action:** Optimize using a lookup table for binary strings and `Array.join()`.
