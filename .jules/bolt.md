## 2025-05-15 - Global Lookup Tables for Character Conversion
**Learning:** Pre-calculating 8-bit binary strings in a global lookup table (0-255) significantly outperforms manual bitwise loops and `toString(2).padStart(8, '0')` when processing large strings (50k+ characters). Using `Array.join(' ')` on a pre-allocated array avoids the O(n^2) overhead of string concatenation in JavaScript.
**Action:** Always prefer lookup tables for fixed-domain conversions (like ASCII/Extended ASCII) and `Array.join` for building large strings from parts.
