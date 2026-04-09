## 2025-05-14 - Initial Assessment
**Learning:** The application is a simple character-to-binary converter. The primary bottleneck for large inputs in `mostrarBinario` is the manual 8-bit loop and string concatenation.
**Action:** Replace manual bit-loop with `toString(2).padStart(8, '0')` and use array joining for better string construction performance.
