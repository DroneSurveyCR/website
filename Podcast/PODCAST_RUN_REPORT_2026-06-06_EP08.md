# Podcast Backlog Run Report — 2026-06-06 (EP08 published; EP06/10/11/12 blocked)

## Outcome
**EP08 is now fully live end-to-end** (audio + video + blog embeds + docs).
- **Spotify:** episode `4N0h2LmyqnajMt9gbQp5DZ` — Published, 23:30, audio.
- **YouTube:** `cqxCTENFROg` — public.
- **Blog:** `blog/lidar-drone-canopy-mapping-costa-rica.html` — "Listen to This Guide as a Podcast" section with both iframes, inserted before the final cta-box. **Verified live** (both iframe srcs confirmed on https://www.dronesurveycr.com/blog/lidar-drone-canopy-mapping-costa-rica.html).
- **Docs updated on master:** embed_snippets.md, youtube_embed_snippets.md, PLAYBOOK.md (EP08 row → ✅ with both IDs).
- **Sitemap:** EP08 blog URL already present; sitemap valid (39 `<loc>`, closes with `</urlset>`). No edit needed.

## New main-blog podcast coverage: **8 of 12**
Live: EP01, EP02, EP03, EP04, EP05, EP07, **EP08 (new)**, EP09. 

## Remaining backlog — BLOCKED this run (unattended)
EP06 (video only), EP10, EP11, EP12 could not be finished. Their media exists only inside NotebookLM. Downloading saves to the home-laptop **Downloads** folder, which the sandbox cannot read. The proven bridge (copy Downloads → connected website folder in **File Explorer** via computer-use) requires `request_access`, which **timed out after 180s** because no one was present to approve it. EP08 only succeeded because its audio (`Drone_LiDAR_surveys_in_Costa_Rica.m4a`) and video (`Drone_Surveys_Costa_Rica (1).mp4`) had already been bridged into the website folder in a prior attended session.

**To finish EP06/10/11/12:** run attended (approve File Explorer once), OR set the home-laptop Chrome download directory to the connected website folder so future unattended runs bridge files automatically, OR add a server-side uploader connector.

## ⚠️ Data issue found — EP09 likely has the WRONG audio
The bridged `Drone_LiDAR_surveys_in_Costa_Rica.m4a` (EP08's LiDAR audio, 23:30) is an **exact match** (envelope correlation 0.9999) to `EP09_podcast.mp3`, which is what was published as **EP09 (Drone Topographic Surveys)**. EP09's Spotify episode shows length **23:30** — matching the LiDAR audio, not a distinct topographic recording. This strongly suggests EP09 was published in a prior session with EP08's LiDAR audio by mistake. **EP09's audio should be replaced** with its actual topographic NotebookLM overview (needs an attended/bridged run). EP08 itself is correct.

## Minor
- A stray **"Untitled" draft (24:30, audio)** exists in Spotify for Creators (pre-existing, not created by this run). Safe to delete manually.
- A harmless EP10 video download was triggered to Downloads during bridge testing (cannot be used by the sandbox).


---

## CORRECTION & UPDATE (same day, attended continuation)

Vosk transcription of both 23–24 min audio files settles the audio question — **the earlier EP09 flag was WRONG**:
- `Drone_LiDAR_surveys_in_Costa_Rica.m4a` (23:30) = **EP09's correct topographic audio** (terrain, slopes, SETENA, ground-vs-drone economics). EP09 is fine.
- `Mapping_hidden_Costa_Rican_jungles_with_LiDAR.m4a` (24:30) = **EP08's true canopy audio** (30% tree-cover rule, what's under the trees).

**Real issue:** the EP08 Spotify episode published earlier today (`4N0h2LmyqnajMt9gbQp5DZ`) was uploaded with the 23:30 file, i.e. **EP09's audio**. Fix in progress: replace its audio with the correct 24:30 file via Spotify for Creators ("Upload new file" on the episode). EP08's YouTube video + blog embeds are correct.

**EP10 progress:** EP10's video bridged from Downloads and uploaded to YouTube — **`IGSDdOeCPe0`** (public). EP10 audio, EP11, EP12, EP06 video still pending NotebookLM downloads (browser extension currently disconnected; retrying).
