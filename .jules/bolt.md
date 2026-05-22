## 2025-05-14 - [Binary Decoding Optimization Regression]
**Learning:** In Node.js v22, refactoring binary decoding logic from bitwise multiplication (accumulating values in a loop) to `substring(i, i + 8)` combined with a lookup table resulted in a measurable performance regression (~8ms to ~33ms for 100k chars). The overhead of string slicing and object property lookup outweighed the gains of avoiding manual bit accumulation.
**Action:** Always benchmark string-slicing-based optimizations in JavaScript against simple arithmetic or bitwise alternatives, especially in tight loops.
