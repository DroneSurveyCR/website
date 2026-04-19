# Spotify Podcast Embed Snippets

Reusable HTML blocks for embedding the DroneSurveyCR podcast on blog posts.

**Show ID:** `0WENj327UvDEiurKnmmqs0`

---

## 1. Episode-Specific Embed (preferred for matching blog posts)

Use this when a blog post has a directly matching podcast episode. Replace `{EPISODE_ID}` with the Spotify episode ID.

```html
<!-- Spotify Podcast Embed -->
<div class="podcast-embed">
	<h3>🎙️ Listen to this as a podcast</h3>
	<p>Prefer to listen? This topic is also covered on the DroneSurveyCR podcast on Spotify.</p>
	<iframe style="border-radius:12px" src="https://open.spotify.com/embed/episode/{EPISODE_ID}?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
</div>
```

## 2. Show-Level Embed (for blog index + non-matching posts)

Use on the blog landing page and on any post without a dedicated episode yet.

```html
<!-- Spotify Podcast Show Embed -->
<div class="podcast-embed">
	<h3>🎙️ The DroneSurveyCR Podcast</h3>
	<p>Weekly deep dives into drone surveying, LiDAR mapping, and Costa Rica land — listen on Spotify.</p>
	<iframe style="border-radius:12px" src="https://open.spotify.com/embed/show/0WENj327UvDEiurKnmmqs0?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
</div>
```

## 3. CSS (add to blog stylesheet)

```css
.podcast-embed {
	background: #f8f9fc;
	border-left: 4px solid #1DB954;
	border-radius: 0 12px 12px 0;
	padding: 24px 28px;
	margin: 32px 0;
}
.podcast-embed h3 {
	color: #302F40;
	margin: 0 0 8px;
	font-size: 18px;
}
.podcast-embed p {
	margin: 0 0 16px;
	color: #555;
	font-size: 15px;
}
```

---

## Episode ID Registry

| EP | Title | Spotify Episode ID | Blog Post |
|----|-------|-------------------|-----------|
| 01 | DSCR EP.1 \| LiDAR Drones | `6cYx3z8tvLTHFTlqpLQxof` | `lidar-vs-photogrammetry-costa-rica.html` |
| 02 | Drone Surveys for CR Real Estate | TBD | `drone-survey-real-estate-costa-rica.html` |

## Public URLs

- **Show:** https://open.spotify.com/show/0WENj327UvDEiurKnmmqs0
- **EP01:** https://open.spotify.com/episode/6cYx3z8tvLTHFTlqpLQxof

---

## Weekly Workflow — Adding Embeds

When publishing each new episode, the upload step now includes:

1. After Spotify publish, copy the new episode's Spotify URL/ID from the dashboard
2. Update the Episode ID Registry above
3. Find the matching blog post in `/blog/`
4. Insert the episode-specific embed (snippet #1) at a natural break in the article (typically after the intro paragraph or before the CTA)
5. Commit + deploy
