# NEXT STEPS — Action Required from Nick

**Everything Claude can do autonomously is done. These are the 2 things only you can do.**

---

## STEP 1: Run REDEPLOY.bat (2 minutes)

Double-click **REDEPLOY.bat** in this folder.

This will:
- Clear the git lock file that's been blocking pushes
- Unstage the dangerous staged deletions (lidar-mapping.html, photogrammetry.html, etc.)
- Set the correct git identity (`dronesurveycr@gmail.com`) so Vercel accepts the push
- Push everything to GitHub → Vercel auto-deploys

**What gets deployed:**
- EP07 blog post (`aerial-survey-costa-rica.html`) — has been sitting in a blocked commit for days
- Podcast embed sections added to EP06 and EP07 blogs (placeholders, IDs filled in after Step 2)
- All other pending changes

---

## STEP 2: Upload EP06 + EP07 Audio & Video (20–30 minutes)

You need to get 4 IDs. Once you have them, tell Claude and everything gets wired up automatically.

### EP06 — "DGAC Drone Regulations Costa Rica 2026"

**Audio is already in your Downloads folder** — filename: "Costa Rica Commercial Drone Rules" (m4a)

1. Go to **[podcasters.spotify.com](https://podcasters.spotify.com)**
2. Upload the audio file → publish
3. Metadata is in `Podcast/EP06_metadata.md`
4. **Copy the Episode ID** from the Spotify episode URL  
   (it looks like: `2lFadQpqqWhjOhvgKfvXQE` — the long string in the URL)

**Video is in your Downloads folder** — filename: "Costa Rica Drone Rules 2026"

1. Go to **[studio.youtube.com](https://studio.youtube.com)**
2. Upload the video → publish (can be unlisted if you prefer)
3. **Copy the Video ID** from the YouTube URL  
   (it looks like: `ERP15A7Avew` — the short string after `?v=`)

---

### EP07 — "Aerial Surveys in Costa Rica"

**Audio and video need to be downloaded from NotebookLM first.**

1. Open NotebookLM, find the "Precision LiDAR Drone Surveys in Costa Rica" notebook
2. Download the **Audio Overview** → saves to Downloads as m4a
3. Download the **Video Overview (Explainer)** → saves to Downloads
4. Upload audio to Spotify → get Episode ID
5. Upload video to YouTube → get Video ID

---

## STEP 3: Tell Claude the 4 IDs

Just message Claude with something like:

> EP06 Spotify: `XXXXXXXXXXXXXXXXXXXXX`  
> EP06 YouTube: `XXXXXXXXXXX`  
> EP07 Spotify: `XXXXXXXXXXXXXXXXXXXXX`  
> EP07 YouTube: `XXXXXXXXXXX`

Claude will:
- Replace the placeholder IDs in both blog embed sections
- Update PLAYBOOK.md
- Trigger a final deploy

---

## What's Already Done (Claude completed these)

- ✅ EP06 blog (`dgac-drone-regulations-costa-rica-2026.html`) — embed section added, waiting for IDs
- ✅ EP07 blog (`aerial-survey-costa-rica.html`) — embed section added, waiting for IDs
- ✅ REDEPLOY.bat — updated to safely handle git state (won't delete important files)
- ✅ EP06 and EP07 metadata files in `Podcast/` folder

---

*Last updated: 2026-05-28*
