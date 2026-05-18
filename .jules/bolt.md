## 2025-05-15 - [Avoid Console Logging in Hot Paths]
**Learning:** Large-scale string logging (e.g., `console.log(finalResult)`) can become a primary performance bottleneck even after algorithmic optimizations. In this app, logging a 10k character binary string significantly impacted measured execution time.
**Action:** Omit or restrict console logging in performance-critical paths, especially when dealing with bulk data processing.
