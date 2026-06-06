# Podcast / Video Coverage Plan — every blog post mapped to an episode

Goal: each blog post has a matching YouTube video + Spotify podcast. Near-duplicate and regional-cluster pages **share** one episode rather than getting a redundant one (avoids duplicate-content/audio). Generated 2026-06-05.

## Status legend
- **LIVE** — episode already published (audio on Spotify + YouTube)
- **BRIEF READY** — NotebookLM source brief + metadata written & committed; needs: NotebookLM audio → Spotify upload → YouTube upload → embed on blog
- **REUSE EPxx** — page shares an existing/anchor episode; just embed that episode (no new audio)

## Coverage table (all 29 posts)

| Blog post | Episode | Status |
|-----------|---------|--------|
| lidar-vs-photogrammetry-costa-rica | EP01 | LIVE |
| lidar-vs-photogrammetry | EP01 | REUSE EP01 |
| drone-survey-real-estate-costa-rica | EP02 | LIVE |
| drone-survey-agriculture-costa-rica | EP03 | LIVE (agriculture) |
| agriculture-drone-survey-costa-rica | EP03 | REUSE EP03 |
| drone-survey-environmental-impact-assessment-costa-rica | EP04 | LIVE |
| drone-survey-costs-costa-rica-2026 | EP05 | LIVE |
| drone-survey-cost-costa-rica | EP05 | REUSE EP05 |
| how-much-does-drone-survey-cost-costa-rica | EP05 | REUSE EP05 |
| dgac-drone-regulations-costa-rica-2026 | EP06 | LIVE |
| costa-rica-drone-laws-2026 | EP06 | REUSE EP06 |
| aerial-survey-costa-rica | EP07 | LIVE |
| lidar-drone-canopy-mapping-costa-rica | EP08 | LIVE (this week) |
| **drone-topographic-survey-costa-rica** | **EP09** | **BRIEF READY** |
| construction-drone-surveys-costa-rica | EP10 | BRIEF READY |
| drone-survey-vs-ground-survey-costa-rica | EP11 | BRIEF READY |
| plano-catastro-drone-costa-rica | EP12 | BRIEF READY (Spanish) |
| drone-survey-central-valley-costa-rica | EP13 | BRIEF READY |
| drone-survey-central-valley-real-estate-costa-rica | EP13 | REUSE EP13 |
| drone-survey-central-valley-update-costa-rica | EP13 | REUSE EP13 |
| drone-survey-guanacaste-costa-rica | EP14 | BRIEF READY |
| drone-survey-guanacaste-tourism-infrastructure-costa-rica | EP14 | REUSE EP14 |
| drone-survey-caribbean-costa-rica | EP15 | BRIEF READY |
| drone-survey-caribbean-agriculture-limon-costa-rica | EP15 | REUSE EP15 |
| drone-survey-caribbean-coastal-development-costa-rica | EP15 | REUSE EP15 |
| drone-survey-south-pacific-costa-rica | EP16 | BRIEF READY |
| drone-survey-south-pacific-osa-costa-rica | EP16 | REUSE EP16 |
| drone-survey-south-pacific-uvita-ojochal-costa-rica | EP16 | REUSE EP16 |
| drone-survey-san-jose-costa-rica | EP17 | BRIEF READY |

## What's ready vs what needs you

**Ready now (committed to `/Podcast/`):** EP09–EP17 — 9 new episode briefs + metadata, matching the EP08 format.

**Per-episode manual steps (your existing weekly pipeline):** NotebookLM Audio Overview → upload audio to Spotify for Podcasters → upload video to YouTube → embed both players on the matching blog post. At ~1 episode/week that's the EP09–EP17 backlog queued for the next ~9 weeks.

**Also outstanding (site edits, can be automated via GitHub API on request):**
- Re-map EP03 (agriculture) embed off `drone-topographic-survey-costa-rica.html` onto an agriculture post; EP09 now fills the topographic post.
- Add REUSE embeds to the 12 shared pages above.
- Spotify title standardization (EP01/EP02/EP04/EP05) — see `EPISODE_NAMING_RENAME_SHEET.md`.

## Naming standard
All episodes follow `EP0X: <Title>` (ID first) on YouTube, Spotify, and blog captions. Locked into `Podcast/youtube_metadata_template.md`.
