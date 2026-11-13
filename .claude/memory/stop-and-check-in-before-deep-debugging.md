---
name: stop-and-check-in-before-deep-debugging
description: "When a fix or check isn't working after a couple of tries, stop and ask Carina instead of digging deeper alone for a long time"
metadata:
  node_type: memory
  type: feedback
  originSessionId: 64e1c8f4-cd1e-4aaa-9368-7b8cf7c91ede
  modified: 2026-08-22T20:30:49.414Z
---

When something isn't working as expected — especially a verification/testing step, not the actual feature — and the first one or two reasonable attempts to understand why don't resolve it, stop and check in with Carina instead of continuing to investigate alone.

**Why:** During work on [[site-scope]] (swapping and positioning an image on the homepage), a screenshot-based check kept showing an unexpected crop. Instead of pausing after a couple of failed attempts, this spiraled into an extremely long, unsupervised debugging session (dozens of tests, installing extra browsers/tools, testing across Chromium and Firefox) chasing a rendering quirk in the _testing tool_, not necessarily a real problem with the site. Carina had to explicitly stop it ("du verrennst dich gerade. stop"). She does not want long unsupervised tangents — she wants to be kept in the loop and asked before this happens.

**How to apply:**

- Give yourself a small, explicit budget for troubleshooting a stuck problem (roughly: try the obvious fix, try one alternative explanation — then stop).
- If still stuck after that, pause and tell Carina in plain language what's going on and what you're unsure about, rather than continuing silently. Ask her how she'd like to proceed (e.g., "soll ich weiter versuchen das zu debuggen, oder reicht dir eine einfachere Lösung / soll ich es dich selbst kurz prüfen lassen?").
- This applies especially to _verification tooling_ (screenshots, automated checks) — if the tool itself seems to be misbehaving, that's a signal to check in, not a reason to escalate effort trying to out-debug the tool.
- Prefer shipping a reasonable, defensible solution and asking her to eyeball the real result over spending large amounts of effort trying to make an automated check pass perfectly.
