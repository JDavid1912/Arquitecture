## 2025-05-15 - [String Concatenation Bottleneck in Binary Conversion]
**Learning:** In this application, converting large text strings to binary using repeated string concatenation (`+=`) caused significant performance degradation. Switching to array pre-allocation with `new Array(len)` and `Array.join(' ')` provided a ~7x speedup for inputs of 500,000 characters.
**Action:** Always prefer `Array.join()` over repeated string concatenation in loops when the number of iterations is large or the resulting string is long.

## 2025-05-15 - [Native parseInt vs Manual Bitwise Loops]
**Learning:** For binary-to-decimal decoding, the native `parseInt(byte, 2)` function outperformed manual bitwise accumulation loops in the Node.js v22 environment.
**Action:** Use built-in highly-optimized methods like `parseInt` for standard base conversions instead of manual bit-manipulation loops unless micro-benchmarking proves otherwise for specific hot paths.
