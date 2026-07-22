## 2026-07-22 - Binary Conversion Optimization in JavaScript
**Learning:** For performance-intensive string-to-binary conversions in JavaScript, building a global 256-element lookup table (for O(1) character binary retrieval) and pre-allocating arrays with `new Array(len)` followed by a standard `for` loop avoids string allocation overhead and loop bitmasking. This outperforms string concatenation (`+=`), nested loops, and `Array.from()`.
**Action:** Use pre-allocated arrays and pre-computed global lookup tables for hot paths involving character/byte transformations.
