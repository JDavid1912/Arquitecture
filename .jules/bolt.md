## 2025-05-14 - [String concatenation vs Array.join]
**Learning:** For large inputs (~10,000+ characters), string concatenation in a loop causes $O(n^2)$ performance degradation in JavaScript due to string immutability. Using `Array.join()` and pre-allocating the array with `new Array(len)` provides significant speedups (e.g., reducing execution time from ~90ms to ~1ms for 10k characters).
**Action:** Always favor `Array.join()` for bulk string assembly.

## 2025-05-14 - [DOM Mocking for Benchmarking]
**Learning:** When mocking the DOM in Node.js for performance testing without `jsdom`, ensure `document.getElementById` returns persistent object references for each ID. This allows state (like `textContent`) to be preserved between function calls and assertions, enabling reliable verification of logic and performance.
**Action:** Use a simple ID-to-object cache in mock `document.getElementById` implementations.
