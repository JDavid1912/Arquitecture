## 2025-05-14 - Lookup Tables and String Joining for Binary Conversion
**Learning:** For bulk character-to-binary conversion, precomputed 8-bit lookup tables combined with `Array.join(' ')` significantly outperform nested bitwise loops and manual string concatenation. In Node.js v22, `Array.join` avoids O(n^2) overhead from string immutability, and pre-allocating the array (`new Array(len)`) further reduces dynamic resizing costs.
**Action:** Always favor lookup tables and array-based string construction for repetitive, predictable data transformations like encoding/decoding.

## 2025-05-14 - Performance Bottlenecks in Console Logging
**Learning:** Large-scale string logging (e.g., `console.log(finalResult)`) can be a major performance bottleneck, sometimes taking as much time as the computation itself.
**Action:** Minimize or eliminate extensive logging in performance-critical paths, or ensure it only happens once after the bulk work is completed.
