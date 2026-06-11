# Weekly YouTube + Spotify Publisher — Run Report 2026-06-11

**Run type:** Scheduled, unattended (Nick not present)
**Task:** weekly-youtube-publisher

## Outcome: No new episode published — nothing to publish this week

### This week's calendar slot (EP09) is already live
EP09 — *Drone Topographic Surveys in Costa Rica* (calendar publish date 2026-06-11) — was
**published early** during the 2026-06-06 catch-up run:
- Spotify episode: `1QSNbBNP1eyh7CcFNc70hv`
- YouTube video: `esfcEXYESYw`
- Blog: `/blog/drone-topographic-survey-costa-rica.html`

There was therefore no EP09 work outstanding for today.

### Next unpublished episode (EP13) is blocked — no media
EP13 — *Drone Surveys in Costa Rica's Central Valley* — is next in the queue, but its
NotebookLM Audio/Video Overviews were **never generated or downloaded this week**:
- The Windows media bridge ran repeatedly today (last run 2026-06-11 02:04) and copied
  **0 new files** — every file was "skipped" (already present).
- `inbox/` and `media-archive/` contain only the EP06–EP12 batch (downloaded 2026-06-06/07).
- No EP13 source audio/video exists anywhere the sandbox can read.

Upstream gap: the manual/Chrome step (generate EP13 Overviews in NotebookLM → download →
let the bridge copy them) did not occur. Until that happens, EP13 cannot be verified,
transcribed, uploaded to YouTube, or published to Spotify. Publishing was correctly **not**
attempted (no media to verify, and verification-before-publish is mandatory).

## Episode status (best known)
EP01–EP12 are all published (Spotify + YouTube + blog embeds), last verified live 2026-06-06.
The full ID list matches `Podcast/embed_snippets.md` and `Podcast/youtube_embed_snippets.md`,
which are current on the remote.

## Actions taken this run
- Synced the stale **PLAYBOOK.md Episode Calendar** to the verified live state: EP06 YouTube
  `34_X1RgIx2I`, EP08 `4N0h2LmyqnajMt9gbQp5DZ` / `cqxCTENFROg`, EP09
  `1QSNbBNP1eyh7CcFNc70hv` / `esfcEXYESYw`, and explicit live rows for EP10/EP11/EP12 (the
  table previously lumped them as "queued," contradicting the embed docs). Committed via
  GitHub Contents API.

## Verification limitations this run
- The `youtube.upload` token is upload-scope only; `videos.list` / `channels` return HTTP 403
  (`ACCESS_TOKEN_SCOPE_INSUFFICIENT`), so YouTube live state could not be independently
  re-confirmed via API. A `youtube.readonly` token would enable this.
- `web_fetch` strips `<iframe>` tags in its markdown conversion, so live blog embeds could not
  be confirmed through it. The live site itself is up and serving (confirmed via a blog page).
- Chrome MCP (the prescribed iframe-verification path) was not exercised in this unattended run.

## Open items for the next attended run
1. **EP13:** generate Audio + Video Overviews in NotebookLM, download so the bridge copies them,
   then run the full publish pipeline (verify-by-transcription → YouTube API → Spotify wizard →
   blog embeds → GitHub Contents API deploy).
2. **EP08 Spotify audio:** confirm episode `4N0h2LmyqnajMt9gbQp5DZ` is playing EP08's canopy
   audio (`Mapping_hidden_Costa_Rican_jungles_with_LiDAR.m4a`), not EP09's — a prior run flagged
   a possible mismatch. Verify by listening.
3. **GBP posts** for EP06/08/10/11/12 (both profiles) still pending — handled by the separate
   GBP task.
4. **Local mount docs** (`Podcast/embed_snippets.md`, `youtube_embed_snippets.md`) are stale
   copies; they'll refresh on the next `git pull --rebase`. The remote versions are correct.
