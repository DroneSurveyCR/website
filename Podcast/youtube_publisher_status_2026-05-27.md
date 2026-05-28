# YouTube Publisher Run — Status Report
**Date:** 2026-05-27 (Wednesday)
**Task:** weekly-youtube-publisher

---

## Summary

This week's automated YouTube publisher run encountered two hard blockers that require Nick's manual action. The blog post Spotify embeds were added locally but could not be deployed to GitHub.

---

## What Was Done ✅

1. **YouTube Studio checked** — Navigated to studio.youtube.com. Confirmed the DroneSurveyCR channel (`@dronesurveycostarica700`) is on a **separate Google account** not currently signed into the browser. The nick iversen personal account and Andree Jette account do not have management access to DroneSurveyCR.

2. **Channel inventory confirmed** — Checked the public DroneSurveyCR YouTube channel. Only 10 videos exist, all from before EP06's scheduled date. **EP06 and EP07 have not been uploaded to YouTube.** Nick has not yet done the NotebookLM Video Overview step for either episode.

3. **Spotify show-level embeds added** to both pending blog posts:
   - `blog/dgac-drone-regulations-costa-rica-2026.html` → EP06 Spotify embed added
   - `blog/aerial-survey-costa-rica.html` → EP07 Spotify embed added
   - Used the show-level embed (`0WENj327UvDEiurKnmmqs0`) since no episode Spotify IDs exist yet for EP06/EP07
   - Added `.podcast-embed` and `.youtube-embed` CSS classes to both `<style>` blocks

4. **Git commit staged** — A ready-to-push commit was created using git plumbing commands:
   - Commit SHA: `8189dce18151265217a65c34a2c6073be731d604`
   - Message: "Podcast: Add Spotify show-level embeds to EP06 (DGAC) and EP07 (Aerial Survey) blog posts"

---

## Blockers — Action Required from Nick 🔴

### Blocker 1: YouTube Studio account not in browser
**Problem:** The DroneSurveyCR YouTube Studio requires logging into the `dronesurveycr@gmail.com` (or similar) Google account. That account is not signed into Chrome.

**Fix:** Open YouTube Studio in Chrome, click your avatar → Switch account → sign into the DroneSurveyCR Google account. Then the automated task can access it next run.

### Blocker 2: EP06 and EP07 videos not uploaded
**Problem:** Neither episode has been pushed to YouTube from NotebookLM yet.

**Fix (for each episode):**
1. Open NotebookLM for the relevant episode
2. Generate Video Overview → push to YouTube as Draft/Unlisted
3. Then run the YouTube publisher task (or do it manually using the metadata below)

### Blocker 3: GitHub push failed — no credentials in sandbox
**Problem:** Git index is corrupted + no GitHub credentials available in the sandbox. The local files ARE edited correctly, but need to be pushed.

**Fix:** Open Terminal in `C:\Users\nicki\Desktop\Master websites\Drone Survey CR Copy 2026\` and run:
```
git push origin 8189dce18151265217a65c34a2c6073be731d604:refs/heads/master
```
Or simply run `REDEPLOY.bat` which will add, commit, and push everything.

---

## Ready-to-Use YouTube Metadata

### EP06 — DGAC Drone Regulations

**Title:**
```
DGAC Drone Regulations Costa Rica 2026 — Permits, Restricted Zones & Flight Rules | DroneSurveyCR Podcast EP06
```

**Description:**
```
Do you need a permit to fly a drone in Costa Rica? In this episode, we break down the DGAC regulatory framework for commercial drone operations — what permits you need, where you can and can't fly, and how licensed operators handle all the compliance so you don't have to.

📖 Read the full guide:
https://www.dronesurveycr.com/blog/dgac-drone-regulations-costa-rica-2026.html

🎧 Listen on Spotify:
https://open.spotify.com/show/0WENj327UvDEiurKnmmqs0

📞 Need a drone survey in Costa Rica?
→ Free quote: https://www.dronesurveycr.com/quote.html
→ WhatsApp: https://wa.me/50672938970
→ Email: dronesurveycr@gmail.com

---
Topics covered:
- DGAC commercial authorization: the four pillars (certification, registration, insurance, flight plans)
- Restricted zones explained: airport exclusion zones, SINAC protected areas, urban areas
- Real-world permit timelines: 10–18 business days standard, 3–5 weeks for complex sites
- 2026 updates: Remote ID, stricter urban overflight rules, insurance minimum review

#DroneSurveyCostaRica #DGACDrones #CostaRica #DroneRegulations #DronePermit
```

**Tags:**
```
DGAC drone regulations Costa Rica, drone permit Costa Rica 2026, drone laws Costa Rica, commercial drone Costa Rica, drone restricted zones Costa Rica, drone survey permit Costa Rica, Costa Rica drone regulations 2026, DGAC UAS authorization, lidar mapping costa rica, aerial survey costa rica
```

**Category:** Science & Technology | **Playlist:** DroneSurveyCR Podcast | **Visibility:** Public

---

### EP07 — Aerial Surveys in Costa Rica

**Title:**
```
Aerial Surveys in Costa Rica — Drone Mapping, LiDAR & Photogrammetry Explained | DroneSurveyCR Podcast EP07
```

**Description:**
```
What is an aerial survey — and do you actually need one? In this episode, we break down everything you need to know about professional drone mapping in Costa Rica: the difference between photogrammetry and LiDAR, which industries use aerial surveys and why, what deliverables you receive, and how pricing actually works.

📖 Read the full guide:
https://www.dronesurveycr.com/blog/aerial-survey-costa-rica.html

🎧 Listen on Spotify:
https://open.spotify.com/show/0WENj327UvDEiurKnmmqs0

📞 Need a drone survey in Costa Rica?
→ Free quote: https://www.dronesurveycr.com/quote.html
→ WhatsApp: https://wa.me/50672938970
→ Email: dronesurveycr@gmail.com

---
Topics covered:
- Photogrammetry vs. LiDAR: plain-language breakdown and when each applies
- Why LiDAR is essential for Costa Rica's forested and mountainous terrain
- Accuracy explained: ±1–3 cm RTK precision and what that means for your project
- Deliverables: orthophotos, DTMs, 3D point clouds, contours, volume reports

#DroneSurveyCostaRica #AerialSurvey #CostaRica #LiDAR #DroneMapping #Photogrammetry
```

**Tags:**
```
aerial survey Costa Rica, drone mapping Costa Rica, LiDAR drone survey Costa Rica, photogrammetry Costa Rica, aerial mapping services Costa Rica, drone survey company Costa Rica, topographic aerial survey Costa Rica, aerial photogrammetry Costa Rica, drone survey cost Costa Rica, drone deliverables Costa Rica
```

**Category:** Science & Technology | **Playlist:** DroneSurveyCR Podcast | **Visibility:** Public

---

## Once Videos Are Uploaded — Checklist

For each episode (EP06 first, then EP07):

- [ ] Log into DroneSurveyCR YouTube Studio account
- [ ] Find Draft/Unlisted video → paste Title, Description, Tags above
- [ ] Set Category: Science & Technology
- [ ] Add to Playlist: DroneSurveyCR Podcast
- [ ] Set Visibility: Public → Save/Publish
- [ ] Copy the 11-char Video ID from the URL
- [ ] Add YouTube embed to blog post (replace show-level Spotify embed with episode embed + add YouTube iframe)
- [ ] Update PLAYBOOK.md with ✅ + Video ID and Spotify Episode ID
- [ ] Run REDEPLOY.bat to push

