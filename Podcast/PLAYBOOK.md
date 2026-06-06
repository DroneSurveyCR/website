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
| EP06 | 2026-05-14 | EP06: DGAC Drone Regulations Costa Rica 2026 — Permits, Restricted Zones & Flight Rules | ✅ | ✅ 25TkNtO5NPs8s6Bk6co4KM | ⏳ (video not uploaded yet) | ⏳ |
| EP07 | 2026-05-28 | EP07: Aerial Surveys in Costa Rica — Drone Mapping, LiDAR & Photogrammetry Explained | ✅ | ✅ 1fsu8Kafvc7EaPHCfJTxZq | ✅ hMP-UpeatSw | ✅ |
| EP08 | 2026-06-04 | EP08: How LiDAR Drones See Through Jungle Canopy in Costa Rica | ✅ | ⏳ | ⏳ | ⏳ |
| EP09 | 2026-06-06 | Drone Topographic Surveys: Terrain Maps, Contour Lines & Elevation Models | ✅ | ✅ 1QSNbBNP1eyh7CcFNc70hv | ✅ esfcEXYESYw | ⏳ |
| EP10 | TBD | EP10: Construction Drone Surveys in Costa Rica — Earthwork, Progress Monitoring & As-Builts | ✅ | ⏳ overview generated, upload pending | ⏳ overview generated, upload pending | ⏳ |
| EP11 | TBD | EP11: Drone Survey vs Ground Survey in Costa Rica — Which Do You Actually Need? | ✅ | ⏳ overview generated, upload pending | ⏳ overview generated, upload pending | ⏳ |
| EP12 | TBD | EP12: Plano Catastro con Dron en Costa Rica — Levantamiento Aéreo Catastral (ES) | ✅ | ⏳ overview generated (ES), upload pending | ⏳ overview generated (ES), upload pending | ⏳ |

---

> **Status note (2026-06-06 unattended run):** All backlog NotebookLM overviews are **generated and ready** (EP10/EP11/EP12 audio+video, EP06 video, EP08 audio). The only missing media is **EP08's Video Overview** (NotebookLM generation keeps failing). Nothing could be published this run because it ran **unattended** and the File Explorer approval needed to bridge NotebookLM downloads into the website folder timed out. EP09 confirmed fully live. See `PODCAST_RUN_REPORT_2026-06-06.md`. Notebook IDs: EP06 `b1185e29`, EP08 `25cc314e`, EP10 `37bb591f`, EP11 `a900e3dd`, EP12 `51e55852`.

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
- Construction site drone survey workflow
- Costa Rica real estate due diligence with drones
- Drone survey cost guide 2026 (full breakdown)
- Guanacaste tourism development and drone mapping
- South Pacific / Osa Peninsula drone survey challenges
- Caribbean coast: drone surveys for eco-resort development
- Solar far