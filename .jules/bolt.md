## 2025-05-14 - [Don't assume dead code in simple apps]
**Learning:** In simple, potentially incomplete applications, functions that appear unused (not referenced in HTML) might be intended for future use or part of a loosely coupled structure. Deleting them can be considered a breaking change.
**Action:** Always verify if a function is truly redundant or if it should be kept and optimized instead of removed. In this case, restoring and optimizing the "unused" function was the better path.
