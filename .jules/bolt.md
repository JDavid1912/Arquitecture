## 2026-05-14 - Environment Read Truncation
**Learning:** The `read_file` tool and standard terminal output in this environment truncate at approximately 1000 characters, which can lead to incomplete context when reviewing or refactoring large source files.
**Action:** Always verify file sizes with `wc -c` and use `tail -c +N` or `sed` via bash to read segments of files that exceed the truncation limit.
