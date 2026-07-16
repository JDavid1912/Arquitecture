## 2026-07-15 - Optimization Verification with Missing Dependencies
**Learning:** The development environment lacks 'jsdom', making it impossible to run DOM-dependent Node.js scripts for local benchmarking without extensive mocking.
**Action:** Use Playwright for verification of DOM-dependent logic or mock global document/window objects carefully in Node.js scripts.

## 2026-07-15 - Performance impact of logging
**Learning:** Profiling revealed that `console.log` of very large strings (e.g., 50k characters) can significantly degrade the perceived performance of an optimized function.
**Action:** Remove or throttle debug logging in hot paths intended for large data processing.

## 2026-07-15 - Repository Hygiene
**Learning:** Including benchmark scripts, local logs, and temporary verification files in a PR is considered unprofessional and "pollution".
**Action:** Always ensure all temporary files and logs are deleted before final submission.
