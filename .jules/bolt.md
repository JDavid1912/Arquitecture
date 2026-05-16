## 2025-05-15 - [Logging Bottleneck in Optimized Paths]
**Learning:** Even after optimizing conversion logic with lookup tables and `Array.join`, performing a `console.log()` on the final large result string can become the primary bottleneck, significantly degrading the perceived performance of the function.
**Action:** Omit or restrict large-scale string logging in performance-critical paths, especially when the result is already being reflected in the DOM.
