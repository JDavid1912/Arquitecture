## 2025-05-15 - [Log File Pollution]
**Learning:** Temporary environment logs (like `server.log`) and test scripts can easily be accidentally included in a submission if not explicitly cleaned up before calling the code review or submit tools.
**Action:** Always run a final `ls -a` and clean up all temporary files, logs, and verification scripts before requesting a code review or submitting.

## 2025-05-15 - [Optimizing Unused Functions]
**Learning:** While optimizing all similar functions in a file is good for consistency, identifying which functions are actually bound to the UI (via `onclick` or event listeners) helps focus performance efforts where they have the most impact.
**Action:** Check `index.html` or event bindings to confirm which JS functions are active bottlenecks before prioritizing optimizations.
