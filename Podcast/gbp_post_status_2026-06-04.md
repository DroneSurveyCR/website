# GBP Post Drafter Run — Status Report
**Date:** 2026-06-04 (Wednesday)
**Task:** weekly-gbp-post-drafter

---

## Summary

Two GBP posts drafted, updated, and pushed to GitHub. Automated posting to Google Business Profile was blocked — Chrome MCP cannot create tab groups in the current browser window.

---

## What Was Done ✅

### EP07 — Updated draft with episode-specific Spotify URL
- **Previous draft** used show-level fallback URL (`/show/...`)
- **Updated** to episode-specific: `https://open.spotify.com/episode/1fsu8Kafvc7EaPHCfJTxZq`
- YouTube line still omitted (no video uploaded yet)
- File: `Podcast/gbp_posts/EP07_gbp_post.txt`
- Pushed to GitHub: commit `143775b`

### EP06 — New draft created
- Blog: `https://www.dronesurveycr.com/blog/dgac-drone-regulations-costa-rica-2026.html`
- Spotify: `https://open.spotify.com/episode/25TkNtO5NPs8s6Bk6co4KM`
- YouTube: omitted (no video uploaded)
- File: `Podcast/gbp_posts/EP06_gbp_post.txt`
- Pushed to GitHub: commit `21f4a9b`

---

## GBP Post Text — EP07 (ready to copy-paste)

```
🎙️ NEW PODCAST + BLOG: EP07 — Aerial Surveys in Costa Rica

Not sure if you need a drone survey, LiDAR, or photogrammetry — or what the difference even is? This episode breaks it all down in plain language: which method fits your project, what deliverables you actually receive (orthophotos, DTMs, 3D point clouds), and how pricing works in Costa Rica.

📖 Full guide: https://www.dronesurveycr.com/blog/aerial-survey-costa-rica.html
🎧 Listen on Spotify: https://open.spotify.com/episode/1fsu8Kafvc7EaPHCfJTxZq
💬 Free quote: https://wa.me/50672938970
```

## GBP Post Text — EP06 (ready to copy-paste)

```
🎙️ NEW PODCAST + BLOG: EP06 — DGAC Drone Regulations Costa Rica 2026

Flying drones in Costa Rica? You need to know the rules. This episode covers everything about DGAC permits, restricted flight zones, required insurance, and how to stay legal — whether you're a pilot, developer, or landowner hiring a drone survey company.

📖 Full guide: https://www.dronesurveycr.com/blog/dgac-drone-regulations-costa-rica-2026.html
🎧 Listen on Spotify: https://open.spotify.com/episode/25TkNtO5NPs8s6Bk6co4KM
💬 Free quote: https://wa.me/50672938970
```

---

## Blocker — Chrome MCP Tab Groups 🔴

**Problem:** `tabs_context_mcp` returns "Grouping is not supported by tabs in this window" every time. This prevents creating a tab for automated GBP posting.

**Likely cause:** The Chrome window open when the task runs doesn't support tab groups (possibly a minimized window, app window, or Chrome configuration issue).

**Fix options:**
1. Ensure a normal Chrome window is open and focused when scheduled tasks run
2. Manually post the drafts: sign into business.google.com with dronesurveycr@gmail.com and paste the text from the files above

---

## Also Pending

- **EP06 & EP07 YouTube videos** still not uploaded — once uploaded, update PLAYBOOK.md and add YouTube lines to GBP posts
- **EP08** is TBD in the PLAYBOOK — no content ready yet

---

## Git Note

Local repo has a stale `.git/index.lock` from a previous session that can't be removed (permission denied). Used GitHub API for pushing instead. The lock file should be manually deleted: `del "C:\Users\nicki\Desktop\Master websites\Drone Survey CR Copy 2026\.git\index.lock"`
