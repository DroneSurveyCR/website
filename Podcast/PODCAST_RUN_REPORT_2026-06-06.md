# Podcast Pipeline — Autonomous Run Report (2026-06-06)

**Run date:** 2026-06-06 (scheduled task: `finish-podcast-backlog-ep08-to-ep12`)
**Operator:** Claude (Cowork), **unattended**. Connected browser "home laptop", account dronesurveycr@gmail.com.

---

## TL;DR

- **Live coverage is now 7 of 12 main-blog episodes** (video + podcast): EP01–EP05, EP07, **EP09**.
- **Every backlog NotebookLM overview is already generated and waiting in NotebookLM** — the slow creative step is essentially DONE. The only gap is **EP08's Video Overview**, which NotebookLM keeps failing to render.
- **This run could not publish anything** because it ran **unattended**. Publishing requires moving NotebookLM downloads from the home-laptop *Downloads* folder into the connected website folder, which needs **File Explorer (computer-use)** — and the access-approval dialog **timed out with no one present to approve it** (two attempts, 180s each). Every downstream step (Spotify upload, YouTube upload, blog embeds) depends on that bridge.

---

## Live state verified (origin/master = live site)

| Blog | Spotify embed | YouTube embed | State |
|------|---------------|---------------|-------|
| EP09 `drone-topographic-survey-costa-rica.html` | ✅ 1QSNbBNP1eyh7CcFNc70hv | ✅ esfcEXYESYw | **FULLY LIVE** |
| EP06 `dgac-drone-regulations-costa-rica-2026.html` | ✅ 25TkNtO5NPs8s6Bk6co4KM | ❌ none | audio live — **needs video** |
| EP08 `lidar-drone-canopy-mapping-costa-rica.html` | ❌ | ❌ | not published |
| sitemap.xml | — | — | 39 `<loc>`, closed `</urlset>` → **valid** |

---

## NotebookLM generation state (all notebooks exist, dated Jun 6)

| EP | Notebook ID | Audio Overview | Video Overview |
|----|-------------|----------------|----------------|
| EP08 | `25cc314e-9c64-4690-af7d-97745a8cbcea` | ✅ "Mapping hidden Costa Rican jungles with LiDAR" | ❌ generation **FAILED** — retried 3× this run, a 4th attempt left running server-side |
| EP10 | `37bb591f-ee1b-423d-9315-56523b6b9b8c` | ✅ "Drones cut Costa Rican earthwork costs" | ✅ "Drone Surveys Costa Rica" |
| EP11 | `a900e3dd-4013-499d-bec6-ffe88f3320d3` | ✅ "Boots vs Bots: Costa Rica" | ✅ "LiDAR Drones vs Traditional Jungle Surveys" |
| EP12 (ES) | `51e55852-81f4-48fa-87a9-20f09029fa22` | ✅ "Plano Catastro con Dron" (Spanish) | ✅ (Spanish) |
| EP06 | `b1185e29-0dff-41c3-825c-3413e184dc4c` | (audio already live on Spotify) | ✅ "Costa Rica Drone Rules 2026" (Explainer) |

**Net:** the only missing media in the entire backlog is **EP08's Video Overview**. Everything else is rendered and ready to download + upload.

---

## The blocker (root cause = unattended run)

The proven EP09 pipeline (2026-06-06) needs a file bridge: NotebookLM **Download** saves the .mp4/.m4a to the home-laptop **Downloads** folder, which the sandbox cannot read (only the connected website folder + session outputs/uploads are mounted). The working fix is to **copy the files in File Explorer** from Downloads into the connected website folder, after which the sandbox can transcode the audio (m4a→mono mp3 <10 MB) and upload it to Spotify via `file_upload`, and push the .mp4 to YouTube via the API token.

File Explorer is a computer-use application that must be approved by the user via a dialog. In this **unattended** run, `request_access` timed out twice (no one to click Allow). Without it, no file can cross from Downloads into the sandbox, so **no Spotify/YouTube upload and no blog embed is possible**.

(Changing Chrome's default download directory to the connected folder would also bridge it — but that change itself requires the native folder-picker, i.e. computer-use, so it can't be done unattended either.)

---

## To finish the backlog (pick one)

1. **Simplest — run this task ATTENDED.** With a person present to approve the File Explorer dialog once, the proven EP09 pipeline runs end-to-end for EP06 (video), EP10, EP11, EP12 (and EP08 audio). All media is already generated, so it's just: download → copy to folder → transcode → upload (Spotify HTML-description toggle + YouTube API) → embed via GitHub Contents API → update sitemap/snippets.
2. **Best long-term — add a server-side uploader connector** (YouTube upload + Spotify-for-Creators) that takes a media URL, removing the local file handoff entirely so unattended runs work.
3. **One-time setup — set the home-laptop Chrome download directory to the connected website folder.** After that, future unattended runs can click NotebookLM Download and the file lands somewhere the sandbox can read, no File Explorer needed.

EP08 video: if its 4th attempt still fails, publish EP08 **audio-only** to Spotify and embed just the Spotify player (note the missing video).

---

## What I did this run

- Verified the generation state of all five backlog notebooks (EP06/EP08/EP10/EP11/EP12).
- Confirmed **EP09 is fully live** (corrects the 2026-06-05 report, which predated its publish).
- Validated the live sitemap (39 locs, valid close).
- Retried EP08's failing Video Overview 3×; left a 4th attempt running.
- Updated `PLAYBOOK.md` (added EP10–EP12 rows + status note) and wrote this report.
- **No site deploys** of episode content — there were no new upload IDs to embed (upload blocked).
