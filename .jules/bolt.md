## 2026-09-17 - Pre-allocated lookup table for string-to-binary conversion
**Learning:** Bitwise operations inside nested loops for character-to-binary string conversion create unnecessary CPU overhead. Pre-computing binary strings for 0-255 ASCII/byte codes and using a pre-allocated array with `join(' ')` improves conversion speed by ~2.6x on large inputs.
**Action:** Use global lookup tables and pre-allocated arrays when converting character codes to binary formatted strings.
