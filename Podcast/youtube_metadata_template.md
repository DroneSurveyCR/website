# YouTube Studio — Weekly Episode Metadata Template

**Purpose:** After user pushes NotebookLM video to YouTube, Claude fills in all YouTube Studio metadata fields and publishes.

**Frequency:** Once per week (Wednesdays, after NotebookLM video push)
**Channel:** DroneSurveyCR (or whatever channel name is set up)

---

## Template (fill in the bracketed fields)

### Title
```
[EPISODE_TITLE] | DroneSurveyCR Podcast EP[NN]
```

### Description
```
[1-2 sentence hook — what problem does this episode solve?]

In this episode of the DroneSurveyCR Podcast, we break down [TOPIC_SUMMARY_1_LINE].

📖 Read the full guide:
https://www.dronesurveycr.com/blog/[BLOG_SLUG].html

🎧 Listen on Spotify:
https://open.spotify.com/show/0WENj327UvDEiurKnmmqs0

📞 Need a drone survey in Costa Rica?
→ Free quote: https://www.dronesurveycr.com/quote.html
→ WhatsApp: https://wa.me/50672938970
→ Email: dronesurveycr@gmail.com

---
Topics covered:
- [BULLET_1]
- [BULLET_2]
- [BULLET_3]
- [BULLET_4]

#DroneSurveyCostaRica #[TOPIC_TAG] #CostaRica #AerialMapping #LiDAR #DroneMapping
```

### Tags (paste into tag field, comma-separated)
```
drone survey costa rica, [PRIMARY_KEYWORD], [SECONDARY_KEYWORD], lidar mapping costa rica, aerial survey, photogrammetry, costa rica real estate, drone mapping, [REGION_TAG]
```

### Category
```
Science & Technology
```

### Visibility
```
Public
```

### Playlist
```
DroneSurveyCR Podcast
```

### Language
```
English
```

### Recording date
```
[EPISODE_DATE — YYYY-MM-DD]
```

---

## Example (EP01 — LiDAR Mapping)

### Title
```
LiDAR Drones Are Mapping Hidden Costa Rican Land | DroneSurveyCR Podcast EP01
```

### Description
```
What's hiding beneath Costa Rica's jungle canopy? In Episode 1 of the DroneSurveyCR Podcast, we break down how LiDAR drones penetrate dense tropical forest to reveal exact terrain, property boundaries, and hidden features that traditional surveying simply can't see.

📖 Read the full guide:
https://www.dronesurveycr.com/blog/lidar-vs-photogrammetry-costa-rica.html

🎧 Listen on Spotify:
https://open.spotify.com/show/0WENj327UvDEiurKnmmqs0

📞 Need a drone survey in Costa Rica?
→ Free quote: https://www.dronesurveycr.com/quote.html
→ WhatsApp: https://wa.me/50672938970
→ Email: dronesurveycr@gmail.com

---
Topics covered:
- How LiDAR penetrates forest canopy to map ground terrain
- LiDAR vs photogrammetry — when to use each technology
- Real-world accuracy and what deliverables you receive
- Costa Rica terrain challenges and why LiDAR wins in jungle

#DroneSurveyCostaRica #LiDAR #CostaRica #AerialMapping #DroneMapping #LiDARMapping
```

### Tags
```
drone survey costa rica, lidar mapping costa rica, lidar vs photogrammetry, aerial survey costa rica, drone mapping, costa rica real estate, lidar drone, 3d mapping costa rica
```

---

## Example (EP02 — Real Estate)

### Title
```
Drone Surveys for Costa Rica Real Estate: See What You're Really Buying | DroneSurveyCR Podcast EP02
```

### Description
```
Thinking of buying land in Costa Rica? Before you sign, see what a drone survey reveals — hidden boundary issues, slope, waterways, and exactly what's buildable. Episode 2 of the DroneSurveyCR Podcast breaks it all down.

📖 Read the full guide:
https://www.dronesurveycr.com/blog/drone-survey-real-estate-costa-rica.html

🎧 Listen on Spotify:
https://open.spotify.com/show/0WENj327UvDEiurKnmmqs0

📞 Need a drone survey in Costa Rica?
→ Free quote: https://www.dronesurveycr.com/quote.html
→ WhatsApp: https://wa.me/50672938970
→ Email: dronesurveycr@gmail.com

---
Topics covered:
- Why Costa Rica plano catastro records are often inaccurate
- Pre-purchase due diligence with drone surveys
- What deliverables real estate buyers and developers receive
- Costs, timelines, and legal recognition of drone surveys

#DroneSurveyCostaRica #CostaRicaRealEstate #PropertyCostaRica #DroneSurvey #AerialMapping
```

### Tags
```
drone survey costa rica, costa rica real estate, land survey costa rica, aerial survey property, plano catastro, drone mapping, property due diligence costa rica
```

---

## Topic Tag Bank (rotate per episode)

| Blog Topic | YouTube Tags |
|------------|-------------|
| LiDAR | lidar mapping, lidar drone, 3d mapping, point cloud |
| Photogrammetry | photogrammetry, orthophoto, aerial photography |
| Real Estate | costa rica real estate, property survey, land buying |
| Construction | construction survey, site planning, earthworks, volume |
| Agriculture | precision agriculture, farm mapping, crop monitoring |
| Guanacaste | guanacaste, tamarindo, nosara, liberia, nicoya |
| South Pacific | uvita, dominical, ojochal, puerto jimenez |
| Central Valley | san jose, heredia, cartago, alajuela |
| Costs / Pricing | drone survey cost, survey pricing, how much |
| Drone Laws | dgac, costa rica drone laws, drone regulations |

---

## Thumbnail Strategy

- Use the blog's hero image or a striking drone photo from `/images/`
- Add text overlay with episode number + short title (Canva template TBD)
- Consistent branding: DroneSurveyCR logo in corner
- For now: let YouTube auto-generate thumbnail from video; upgrade later

---

## YouTube Studio Field Map (for automation)

When Claude navigates YouTube Studio (`studio.youtube.com`):

1. Click on the newly uploaded video (usually "Draft" or "Unlisted" status)
2. **Title** field → paste title
3. **Description** field → paste full description
4. **Thumbnail** → skip for now (auto-generated)
5. **Playlist** → select or create "DroneSurveyCR Podcast"
6. **Tags** → click "Show more" → paste comma-separated tags
7. **Category** → Science & Technology
8. **Recording date** → set to episode publish date
9. **Visibility** → Public (or Unlisted → schedule for later)
10. Click **Save** / **Publish**
