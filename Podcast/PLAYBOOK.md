# DroneSurveyCR Podcast — Content Playbook

**Show:** DroneSurveyCR Podcast
**Spotify Show ID:** 0WENj327UvDEiurKnmmqs0
**Cadence:** Weekly, published Wednesdays
**Format:** 2-host conversational, 10–15 minutes, generated via NotebookLM Audio Overview

---

## Episode Calendar

| EP | Publish Date | Topic | Brief | Spotify | YouTube | GBP |
|----|-------------|-------|-------|---------|---------|-----|
| EP01 | 2026-04-08 | LiDAR Drones: Mapping Hidden Costa Rican Land | ✅ | ✅ 6cYx3z8tvLTHFTlqpLQxof | ✅ q45B3AGU5Gw | ✅ |
| EP02 | 2026-04-16 | Drone Surveys for Costa Rica Real Estate | ✅ | ✅ 1iCuudtusA27I8UHPqOQXa | ✅ A_mNL2hGbok | ✅ |
| EP03 | 2026-04-23 | Drone Topographic Surveys: Terrain Maps & Elevation Models in Costa Rica | ✅ | ✅ 1TxvTbKqx4TFE0JTQA6DFC | ✅ p_s5JCdLt6w | ✅ |
| EP04 | 2026-04-30 | EP04: Drone Surveys for Environmental Impact Assessments in Costa Rica | ✅ | ✅ 5nXs5zMAGywNIgNZOofAMO | ✅ N58tCNJBpJQ | ✅ |
| EP05 | 2026-05-07 | Drone Survey Costs in Costa Rica 2026 — Complete Pricing Guide | ✅ | ✅ 2lFadQpqqWhjOhvgKfvXQE | ✅ ERP15A7Avew | ✅ |
| EP06 | 2026-05-14 | EP06: DGAC Drone Regulations Costa Rica 2026 — Permits, Restricted Zones & Flight Rules | ✅ | ✅ 25TkNtO5NPs8s6Bk6co4KM | ✅ 34_X1RgIx2I | ⏳ |
| EP07 | 2026-05-28 | EP07: Aerial Surveys in Costa Rica — Drone Mapping, LiDAR & Photogrammetry Explained | ✅ | ✅ 1fsu8Kafvc7EaPHCfJTxZq | ✅ hMP-UpeatSw | ⏳ |
| EP08 | 2026-06-04 | EP08: How LiDAR Drones See Through Jungle Canopy in Costa Rica | ✅ | ✅ 4N0h2LmyqnajMt9gbQp5DZ | ✅ cqxCTENFROg | ⏳ |
| EP09 | 2026-06-11 | EP09: Drone Topographic Surveys in Costa Rica — Terrain Maps, Contour Lines & Elevation Models | ✅ | ✅ 1QSNbBNP1eyh7CcFNc70hv | ✅ esfcEXYESYw | ⏳ |
| EP10 | 2026-06-06 | EP10: Construction Drone Surveys in Costa Rica | ✅ | ✅ 2nIo3cWs1I5Fnse0l4pJ1I | ✅ IGSDdOeCPe0 | ⏳ |
| EP11 | 2026-06-06 | EP11: Drone Survey vs Ground Survey in Costa Rica | ✅ | ✅ 56Z3sF0jidmP7mf5F7xWky | ✅ iQqAtG3_grw | ⏳ |
| EP12 | 2026-06-06 | EP12: Plano Catastro con Dron (English) | ✅ | ✅ 378ZJ8R7cFRPDxIohp4W6t | ✅ KVo59YrR-j0 | ⏳ |
| EP13–EP18 | (queued) | Briefs ready — Central Valley, Guanacaste, Caribbean, South Pacific, San José, Property Boundary Verification (see PODCAST_COVERAGE_PLAN.md) | ✅ | ⏳ awaiting NotebookLM media | ⏳ | ⏳ |
| EP19 | 2026-06-17 | EP19: Gaussian Splatting & Drone Mapping in Costa Rica — Walk a Property in 3D Before You Buy | ✅ | ✅ 4V58HjrydEtaBMJVv028Jj | ✅ B4ZLKrV5uZM | ⏳ |

> **Status note (2026-06-11 weekly publisher run):** EP01–EP12 all published (Spotify + YouTube live, IDs above; last verified live 2026-06-06). EP09 — this week's calendar slot — was published early in the 2026-06-06 catch-up run. **No new episode published this run:** EP13 (Central Valley) is next in queue but its NotebookLM Audio/Video Overviews were never generated/downloaded this week (media bridge copied 0 new files; inbox holds only the EP06–EP12 batch). GBP posts for EP06/08/10/11/12 still pending (separate task). See `PODCAST_RUN_REPORT_2026-06-11.md`.

> **Status note (2026-06-17 weekly brief-generator run):** EP19 brief + metadata generated from the newest keyword blog post, *Gaussian Splatting & Drone Mapping in Costa Rica* (published 2026-06-16). Chosen over the same-day *cost to bring a drone into Costa Rica* post because it is a survey-client / remote-buyer topic (better CTA fit) and the freshest main-topic post. NotebookLM audio/video not yet generated. Note: EP13–EP18 (mostly regional geo-page episodes) remain queued and unpublished; per the main-blogs-only policy these may be reconsidered before EP19 is recorded.

---

## Pipeline Workflow (per episode)

1. **Tuesday 08:08** — `auto-generate-blog-post` writes new keyword blog to `/blog/`
2. **Wednesday 08:03** — `weekly-podcast-brief-generator` reads newest blog → creates `EP{NN}_source_brief.md` + `EP{NN}_metadata.md`
3. **Wednesday AM** — Nick runs NotebookLM: Audio Overview → download m4a; Video Overview → push to YouTube
4. **Wednesday PM** — Claude uploads m4a to Spotify for Creators, publishes episode with metadata
5. **Wednesday 11:00** — `weekly-youtube-publisher` fills YouTube Studio metadata, publishes video, embeds both Spotify + YouTube players on blog post
6. **Wednesday 11:30** — `weekly-gbp-post-drafter` posts to both GBP profiles with blog + Spotify + YouTube links

---

## Topic Bank (ready to use)

- Drone laws and DGAC regulations Costa Rica 2026
- LiDAR vs photogrammetry: which to choose for your project
- Construction site drone 