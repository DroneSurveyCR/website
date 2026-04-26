# YouTube Embed Snippets — DroneSurveyCR

Reusable HTML for embedding YouTube videos on matching blog posts.

---

## Episode-Specific Embed (use on the matching blog post)

```html
<!-- YouTube Podcast Video Embed -->
<div class="youtube-embed">
    <h3>🎥 Watch on YouTube</h3>
    <p>Watch the video version of this guide on the DroneSurveyCR YouTube channel.</p>
    <iframe width="100%" height="400" src="https://www.youtube.com/embed/[VIDEO_ID]" title="[EPISODE_TITLE]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>
```

**Replace:**
- `[VIDEO_ID]` with the YouTube video ID (e.g., `q45B3AGU5Gw`)
- `[EPISODE_TITLE]` with the episode title

---

## Channel-Level Embed (fallback for posts without a matching episode)

```html
<!-- DroneSurveyCR YouTube Channel Subscribe -->
<div class="youtube-embed">
    <h3>🎥 Watch on YouTube</h3>
    <p>Subscribe to the DroneSurveyCR YouTube channel for drone survey guides and aerial footage from Costa Rica.</p>
    <iframe width="100%" height="400" src="https://www.youtube.com/embed?listType=user_uploads&list=@dronesurveycostarica700" title="DroneSurveyCR YouTube Channel" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>
```

## Episode Video ID Registry

| EP | Blog Post | YouTube Video ID | YouTube URL | Status |
|----|-----------|-----------------|-------------|--------|
| 01 | `lidar-vs-photogrammetry-costa-rica.html` | q45B3AGU5Gw | https://youtu.be/q45B3AGU5Gw | ✅ Live |
| 02 | `drone-survey-real-estate-costa-rica.html` | A_mNL2hGbok | https://youtu.be/A_mNL2hGbok | ✅ Live |
| 03 | `drone-survey-agriculture-costa-rica.html` | TBD | TBD | ⏳ Awaiting upload |

---

## Placement Rules

1. **Episode-specific embed** goes on the matching blog post, placed AFTER the Spotify podcast embed (so the order is: intro → content → Spotify → YouTube → CTA)
2. **Channel/playlist embed** can go on the blog index page alongside the Spotify show embed
3. Always use `loading="lazy"` for performance
4. Always include `title` attribute for accessibility
5. The `[VIDEO_ID]` is the 11-character code from the YouTube URL (e.g., `dQw4w9WgXcQ` from `youtube.com/watch?v=dQw4w9WgXcQ`)

---

## How to Get the Video ID

After the video is published in YouTube Studio:
- URL will be: `https://www.youtube.com/watch?v=XXXXXXXXXXX`
- The Video ID is the `XXXXXXXXXXX` part after `v=`
- Short URL format: `https://youtu.be/XXXXXXXXXXX`
# YouTube Embed Snippets — DroneSurveyCR

Reusable HTML for embedding YouTube videos on matching blog posts.

---

## Episode-Specific Embed (use on the matching blog post)

```html
<!-- YouTube Podcast Video Embed -->
<div class="youtube-embed">
    <h3>📺 Watch on YouTube</h3>
    <p>Watch the video version of this guide on the DroneSurveyCR YouTube channel.</p>
    <iframe width="100%" height="400" src="https://www.youtube.com/embed/[VIDEO_ID]" title="[EPISODE_TITLE]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy" style="border-radius:12px;"></iframe>
</div>
```

## CSS (add to blog post `<style>` block if not already present)

```css
.youtube-embed{background:#f8f9fc;border-left:4px solid #FF0000;border-radius:0 12px 12px 0;padding:24px 28px;margin:32px 0}
.youtube-embed h3{color:#302F40;margin:0 0 8px;font-size:18px}
.youtube-embed p{margin:0 0 16px;color:#555;font-size:15px}
```

---

## Channel-Level Embed (fallback for posts without a matching episode)

```html
<!-- YouTube Channel Embed (fallback) -->
<div class="youtube-embed">
    <h3>📺 Watch on YouTube</h3>
    <p>Watch our drone survey guides on the DroneSurveyCR YouTube channel.</p>
    <iframe width="100%" height="400" src="https://www.youtube.com/embed/videoseries?list=[PLAYLIST_ID]" title="DroneSurveyCR Podcast Playlist" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy" style="border-radius:12px;"></iframe>
</div>
```

> **Note:** Replace `[PLAYLIST_ID]` with the actual "DroneSurveyCR Podcast" playlist ID once created in YouTube Studio.

---

## Episode Video ID Registry

| EP | Blog Post | YouTube Video ID | YouTube URL | Status |
|----|-----------|-----------------|-------------|--------|
| 01 | `lidar-vs-photogrammetry-costa-rica.html` | `q45B3AGU5Gw` | `youtu.be/q45B3AGU5Gw` | ✅ Live |
| 02 | `drone-survey-real-estate-costa-rica.html` | TBD | TBD | ⏳ Awaiting upload |

---

## Placement Rules

1. **Episode-specific embed** goes on the matching blog post, placed AFTER the Spotify podcast embed (so the order is: intro → Spotify → YouTube → article body)
2. **Channel/playlist embed** can go on the blog index page alongside the Spotify show embed
3. Always use `loading="lazy"` for performance
4. Always include `title` attribute for accessibility
5. The `[VIDEO_ID]` is the 11-character code from the YouTube URL (e.g., `dQw4w9WgXcQ` from `youtube.com/watch?v=dQw4w9WgXcQ`)

---

## How to Get the Video ID

After the video is published in YouTube Studio:
- URL will be: `https://www.youtube.com/watch?v=XXXXXXXXXXX`
- The Video ID is the `XXXXXXXXXXX` part after `v=`
- Or from YouTube Studio: the video's page URL contains `/video/XXXXXXXXXXX/`
