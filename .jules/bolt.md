# Bolt's Journal

## 2026-08-03 - Character to Binary Conversion Optimization
**Learning:** For converting characters to binary, pre-allocating arrays and using string join outperforms string concatenation and nested loops by up to 70x on large inputs (e.g. 50k characters).
**Action:** Use global lookup tables for ASCII character-to-binary codes, and build array output before joining with spaces to avoid string concatenation bottlenecks.
