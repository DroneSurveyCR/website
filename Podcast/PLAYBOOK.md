# DroneSurveyCR Podcast — Weekly Playbook

**Cadence:** Every Wednesday (publish day)
**Source:** That week's auto-generated blog post (Tuesday)
**Pipeline:** Blog post (Tue) → NotebookLM (Wed AM) → Spotify + YouTube + GBP (Wed PM)
**Format:** 10-15 min conversational (2-host AI format via NotebookLM)

---

## The Repurposing Pipeline

```
Tue 08:08 — auto-generate-blog-post (scheduled) writes NEW blog
                    ↓
Wed AM    — Claude pulls that blog's content, generates podcast source brief
                    ↓
Wed AM    — YOU paste brief into NotebookLM → Generate Audio Overview + Video Overview
                    ↓
Wed AM    — Download m4a → Google Drive → Spotify EP{NN} folder
          — Click "Push to YouTube" in NotebookLM (video)
                    ↓
Wed PM    — Claude uploads m4a to Spotify for Creators, publishes episode
                    ↓
Wed PM    — Claude opens YouTube Studio, fills in metadata, publishes video
                    ↓
Wed PM    — Claude embeds Spotify + YouTube on matching blog post
                    ↓
Wed 11:30 — Claude posts to Google Business Profile with blog + Spotify + YouTube links (both profiles, autonomous)
                    ↓
Wed PM    — Claude updates calendar + content tracker
```

This pipeline gets you **5 pieces of content from one research effort**:
1. SEO blog post on the website (drives organic search traffic)
2. Audio podcast on Spotify (expands to listening audience)
3. Video podcast on YouTube (captures video search + watch audience)
4. Google Business Profile post (local SEO + knowledge panel visibility)
5. Cross-linked embeds on the blog (Spotify + YouTube widgets drive engagement)

---

## The Weekly Workflow

### 🟢 STEP 1 — Tuesday 08:08: Blog Post Auto-Generates (already scheduled)
- Existing task `auto-generate-blog-post` runs
- New post lands in `/blog/` folder
- Claude tracks the newest post as this week's podcast source

### 🟢 STEP 2 — Wednesday AM: Claude Prepares Podcast Brief (scheduled)
- Claude reads the latest blog post
- Generates `Podcast/EP{NN}_source_brief.md` (reformatted for NotebookLM conversational tone)
- Generates `Podcast/EP{NN}_metadata.md` (Spotify-ready title + description)
- Pings you: "EP{NN} brief is ready — here's the NotebookLM input"

### 🟡 STEP 3 — Wednesday AM: You Generate Audio (~10 min manual work)
1. Open NotebookLM
2. Open the "DroneSurveyCR Podcast" notebook
3. Clear the previous week's source
4. Paste contents of `EP{NN}_source_brief.md` as new source
5. Click **Audio Overview** → **Generate** → wait 3-5 min
6. Download m4a → rename to `EP{NN}_[slug].m4a`
7. Click **Video Overview** → **Generate** → wait 3-5 min
8. Click **Push to YouTube** button in NotebookLM (uploads video directly)
9. Upload m4a to Google Drive folder `Spotify EP{NN}`
10. Ping Claude: "EP{NN} audio is in Drive and video is on YouTube, do your thing"

### 🟢 STEP 4 — Wednesday PM: Claude Publishes to Spotify + Embeds on Blog
1. Opens Spotify for Creators
2. Navigates to New Episode
3. Uploads m4a
4. Pastes title + description from metadata file
5. Final review with you, then Publish
6. Copies the published episode's Spotify ID from dashboard
7. Updates `Podcast/embed_snippets.md` Episode ID Registry
8. Inserts the episode-specific embed into the matching `/blog/*.html` post (replacing any show-level placeholder embed)
9. Updates calendar: EP{NN} ✅

### 🟢 STEP 5 — Wednesday 11:30 AM: Claude Autonomously Posts to Google Business Profile (scheduled)
Scheduled task `weekly-gbp-post-drafter` runs automatically AFTER YouTube publisher and:
1. Gathers all three media links: blog URL, Spotify episode URL, YouTube video URL
2. Drafts the GBP post using `Podcast/gbp_post_template.md` (now includes all 3 links)
3. Saves draft to `Podcast/gbp_posts/EP{NN}_gbp_post.txt`
4. Navigates to https://business.google.com
5. Clicks "Add post" on the Drone Survey Costa Rica profile
6. Pastes the drafted text (with blog + Spotify + YouTube links) into Description
7. Clicks Post
8. On the "Copy post" screen, selects "Survey Costa Rica" (second profile) and clicks Post again
9. Verifies publish confirmation via screenshot
10. Notifies you — post is live on BOTH profiles with all media links (text-only, no images)

**Note on images:** Google's GBP UI sandboxes image uploads in a cross-origin iframe which blocks automation. Posts publish text-only. If you want an image on a specific post, open GBP manager, find the post, and add the image manually (~10 seconds). Text-only posts still publish and still rank.

### 🟢 STEP 6 — Wednesday 11:00 AM: Claude Publishes YouTube Video + Embeds BOTH Media on Blog (scheduled)
Scheduled task `weekly-youtube-publisher` runs after user confirms video is on YouTube:
1. Opens YouTube Studio (`studio.youtube.com`) via Chrome MCP
2. Finds the newest uploaded video (usually "Draft" or "Unlisted" status from NotebookLM push)
3. Fills in metadata from `Podcast/youtube_metadata_template.md`:
   - Title: `[EPISODE_TITLE] | DroneSurveyCR Podcast EP{NN}`
   - Description: full description with blog link + Spotify link + CTA
   - Tags: topic-specific + evergreen tags
   - Category: Science & Technology
   - Playlist: "DroneSurveyCR Podcast"
4. Sets visibility to **Public**
5. Clicks **Save** / **Publish**
6. Copies the YouTube Video ID from the URL
7. Updates `Podcast/youtube_embed_snippets.md` Video ID Registry
8. Embeds BOTH Spotify + YouTube players on the matching `/blog/*.html` post (Spotify first, then YouTube, placed after intro)
9. Notifies you — video is live + both media players embedded on blog

**Note:** Only Tuesday keyword blog posts get embeds, NOT Friday geo posts.

**Note:** The NotebookLM "Push to YouTube" button handles the upload. Claude only fills in metadata and publishes — no file transfer needed.

---

## Content Calendar (Blog ⇄ Podcast ⇄ YouTube mapping)

| # | Date | Source Blog | Topic | Spotify | YouTube | GBP |
|---|------|-------------|-------|---------|---------|-----|
| 01 | 2026-04-08 | `lidar-vs-photogrammetry-costa-rica.html` | LiDAR Drones: Mapping Hidden Costa Rican Land | ✅ | ✅ `youtu.be/q45B3AGU5Gw` | ✅ |
| 02 | 2026-04-17 | `drone-survey-real-estate-costa-rica.html` | Drone Surveys for Costa Rica Real Estate | 🟡 | ✅ `youtu.be/A_mNL2hGbok` | ⏳ |
| 03 | 2026-04-22 | (auto-generated Tue 4/21) | TBD from blog | ⏳ | ⏳ | ⏳ |
| 04 | 2026-04-29 | (auto-generated Tue 4/28) | TBD from blog | ⏳ | ⏳ | ⏳ |
| 05 | 2026-05-06 | (auto-generated Tue 5/5) | TBD from blog | ⏳ | ⏳ | ⏳ |

Existing blog bank (ready-to-use sources):
- `drone-survey-real-estate-costa-rica.html` → **EP02**
- `lidar-vs-photogrammetry-costa-rica.html` → candidate
- `construction-drone-surveys-costa-rica.html` → candidate
- `costa-rica-drone-laws-2026.html` → candidate
- `drone-survey-agriculture-costa-rica.html` → candidate
- `drone-survey-guanacaste-costa-rica.html` → candidate
- `drone-survey-san-jose-costa-rica.html` → candidate
- `drone-survey-south-pacific-costa-rica.html` → candidate
- `how-much-does-drone-survey-cost-costa-rica.html` → candidate

---

## Quality Checklist (before Publish)

- [ ] Episode length 8-20 min
- [ ] Title includes "Costa Rica" or a region for SEO
- [ ] Description has 3+ bullets + CTA to dronesurveycr.com
- [ ] Episode number correct, sequential
- [ ] Cover art in place (show level)
- [ ] Category: Business → Investing / Real Estate
- [ ] Description links back to the source blog post (cross-promotion)

---

## Troubleshooting

**NotebookLM won't generate:** source too long → trim to ~2000 words
**Spotify upload stuck:** refresh once, don't re-upload; check file is m4a/mp3/wav
**Can't publish:** finish show setup + verify email (one-time)
**Audio quality issue:** NotebookLM output is stable — re-generate if needed (regenerates differ)

---

## Metrics (Monthly Review)

- Episodes published (target: 4/month)
- Total plays (Spotify)
- Follower growth
- Blog traffic attributed from podcast descriptions
- Leads mentioning the podcast
