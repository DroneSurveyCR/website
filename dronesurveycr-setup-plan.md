# DroneSurveyCR — Claude/Cowork Master Setup Plan

> **Last updated:** April 27, 2026  
> **Purpose:** Complete reference for what Claude has access to, what's missing, how to connect everything, and how to run a full monitoring + intelligence operation for dronesurveycr.com.

---

## TABLE OF CONTENTS

1. [What Claude Currently Has Access To](#1-what-claude-currently-has-access-to)
2. [What's Missing & Why It Matters](#2-whats-missing--why-it-matters)
3. [Step-by-Step Setup Instructions for Missing Integrations](#3-step-by-step-setup-instructions)
4. [Master Weekly Monitoring Plan](#4-master-weekly-monitoring-plan)
5. [Company Intelligence Brief Template](#5-company-intelligence-brief-template)

---

## 1. WHAT CLAUDE CURRENTLY HAS ACCESS TO

### Connected MCPs (live tools Claude can use autonomously)

| Tool | What Claude Can Do With It |
|------|---------------------------|
| **Vercel** | List deployments, check build logs, get runtime logs, check project status, deploy code. Auto-deploys trigger on GitHub push. |
| **Supabase** | Execute SQL queries, manage tables, run migrations. (Not currently used by DroneSurveyCR — no Supabase DB in production stack yet.) |
| **Google Drive** | Read/write files, create documents, search Drive content. |
| **Gmail** | Search threads, read emails, create drafts, manage labels. Used for lead alerts and client communication. |
| **Google Calendar** | List events, create/update/delete events, respond to invites, suggest meeting times. |
| **Slack** | Send messages, search channels, read threads, create canvases, schedule messages. Used for new lead notifications from the quote form. |
| **Notion** | Read/write pages and databases, create comments, search content. CRM database ID: `21eefe17-c791-4f60-a64e-69b9a1e3ff44`. |
| **Figma** | Read design files, get design context, access variable definitions, export assets. |
| **Canva** | Create/edit designs, search design library, import assets. Used for social media graphics. |
| **Local project folder** | Full read/write access to `C:\Users\nicki\Desktop\Master websites\Drone Survey CR Copy 2026`. Claude can edit HTML, blog posts, scripts, and all project files. |

### Active Scheduled Tasks (DO NOT DUPLICATE)

| Task ID | Schedule | What It Does |
|---------|----------|-------------|
| `weekly-seo-monitor-fresh` | Mon 8 AM | GSC keywords, GA4 metrics, competitor check (surveycostarica.com) |
| `auto-generate-blog-post` | Tue 8 AM | Finds keyword opportunities, writes 1,500–2,000 word blog post, deploys to `/blog/` |
| `weekly-podcast-brief-generator` | Wed 8:03 AM | Reads newest blog, generates `EP{NN}_source_brief.md` + `EP{NN}_metadata.md` in `Podcast/` |
| `weekly-youtube-publisher` | Wed 11 AM | Fills YouTube Studio metadata, publishes video, embeds Spotify + YouTube players on blog |
| `weekly-gbp-post-drafter` | Wed 11:30 AM | Drafts + publishes GBP post to BOTH profiles with blog + Spotify + YouTube links |
| `geo-targeted-regional-posts` | Fri 8 AM | Region-rotating blog posts: Central Valley → Guanacaste → South Pacific → Caribbean |

### Site + Infrastructure

- **Website:** https://www.dronesurveycr.com — static HTML on Vercel, GitHub repo: `DroneSurveyCR/website` (master branch)
- **GA4:** Property `a221005739p304368543`, Measurement ID `G-6L0PFQRYF6` — **installed on site, not connected to Cowork**
- **Google Search Console:** Connected and sitemap submitted — **API not connected to Cowork**
- **Notion CRM:** Captures quote form submissions, tagged by service type
- **Resend email API:** Transactional emails for quote confirmations
- **Slack webhook:** Fires on every new quote form submission
- **Podcast:** Spotify show ID `0WENj327UvDEiurKnmmqs0` — 3 episodes live
- **YouTube:** 3 episodes published via YouTube Studio + `weekly-youtube-publisher` task

---

## 2. WHAT'S MISSING & WHY IT MATTERS

### Google Analytics 4 API
**What's missing:** Real traffic data — sessions, users, bounce rate, conversion events, source/medium breakdown, page performance.  
**Impact:** The Monday SEO monitor task currently runs without real GA4 data. Claude is blind to traffic trends, conversion rates, and which blog posts are actually driving leads.

### Google Search Console API
**What's missing:** Impression and CTR data per keyword — which queries you rank for, average position, click-through rates, pages with ranking drops.  
**Impact:** The SEO monitor can't identify declining keywords, new ranking opportunities, or pages losing position without this.

### YouTube Analytics API
**What's missing:** Video performance data — views, watch time, audience retention, traffic sources, subscriber conversions.  
**Impact:** Can't tell which video topics resonate, whether the podcast episodes are growing an audience, or whether YouTube is sending traffic to the website.

### Spotify for Podcasters API
**What's missing:** Episode performance — streams, listeners, follower count, completion rate, episode-by-episode comparison.  
**Impact:** Can't measure whether the podcast is growing or which episode topics get the most engagement.

### Instagram / Facebook (Meta Graph API)
**What's missing:** Ability to auto-post to Instagram, read engagement metrics (likes, reach, saves, profile visits).  
**Impact:** The Instagram content calendar is created but Nick is posting manually. Automation would complete the multi-platform pipeline. No metrics = no feedback loop.

### Google Business Profile API
**What's missing:** GBP performance metrics — profile views, search impressions, direction requests, phone call clicks, website clicks per post.  
**Impact:** Posts are being published weekly via the scheduled task, but there's no way to measure what's working. Can't compare post types, topics, or CTAs.

### SSH / VPS Access to OpenClaw Server
**What's missing:** Terminal access to the server where OpenClaw (Nick's other project, surveycostarica.com) and Claude CLI run.  
**Impact:** Cannot manage, deploy, or debug the competitor site or any server-side processes from Cowork.

---

## 3. STEP-BY-STEP SETUP INSTRUCTIONS

---

### 3A. Google Analytics 4 API

**What you'll get:** Real traffic data in every Monday report and any ad-hoc analysis.

**Step 1 — Create a service account in Google Cloud Console**
1. Go to https://console.cloud.google.com/
2. Select or create a project (use an existing one if you already have GSC set up)
3. In the left menu: **APIs & Services → Library**
4. Search for **"Google Analytics Data API"** and click **Enable**
5. Go to **APIs & Services → Credentials**
6. Click **Create Credentials → Service account**
7. Name it `dronesurveycr-cowork`, click **Create and Continue**, skip optional steps, click **Done**

**Step 2 — Download the JSON key**
1. Click on the service account you just created
2. Go to the **Keys** tab
3. Click **Add Key → Create new key → JSON**
4. Save the downloaded file somewhere safe (e.g., `~/Documents/dronesurveycr-ga4-key.json`)

**Step 3 — Grant the service account access to GA4**
1. Go to https://analytics.google.com/
2. Open property `a221005739p304368543` (DroneSurveyCR)
3. Go to **Admin → Property → Property Access Management**
4. Click the **+** button and add the service account email (looks like `dronesurveycr-cowork@your-project.iam.gserviceaccount.com`)
5. Set role to **Viewer**

**Step 4 — Connect to Cowork**
- In Cowork, go to **Settings → Connections** (or use the MCP marketplace)
- Look for **Google Analytics** connector
- Paste the service account JSON credentials when prompted
- Test by asking Claude: "How many sessions did dronesurveycr.com get last week?"

**Key info needed:**
- Property ID: `304368543`
- Measurement ID: `G-6L0PFQRYF6`

---

### 3B. Google Search Console API

**What you'll get:** Keyword rankings, impressions, CTR, and click data per page and query.

**Step 1 — Enable the API** (same Google Cloud project as GA4)
1. Go to https://console.cloud.google.com/ → **APIs & Services → Library**
2. Search **"Google Search Console API"** → Enable

**Step 2 — Use the same service account** from Step 3A above (no new account needed)

**Step 3 — Add service account to Search Console**
1. Go to https://search.google.com/search-console/
2. Select **dronesurveycr.com**
3. Go to **Settings → Users and permissions**
4. Click **Add user**, enter the service account email
5. Set permission to **Full** (required for query data)

**Step 4 — Connect to Cowork**
- Same Google Cloud JSON credentials work for both GA4 and GSC
- In Cowork connections, look for **Google Search Console** connector
- If it uses the same Google OAuth flow, just connect your Google account (`nickiversen@gmail.com`) — no JSON key needed for OAuth

**Key info needed:**
- Site URL in GSC: `sc-domain:dronesurveycr.com`

---

### 3C. YouTube Analytics API

**What you'll get:** Video views, watch time, audience retention, traffic sources per video.

**Step 1 — Enable YouTube Data + Analytics APIs**
1. In Google Cloud Console → **APIs & Services → Library**
2. Enable: **YouTube Data API v3** (already likely enabled if YouTube publisher works)
3. Enable: **YouTube Analytics API**

**Step 2 — OAuth consent + credentials**
1. Go to **APIs & Services → OAuth consent screen**
2. Set to **External**, fill in app name (`DroneSurveyCR Cowork`), your email
3. Add scopes: `youtube.readonly`, `yt-analytics.readonly`
4. Add your Gmail (`nickiversen@gmail.com`) as a test user
5. Go to **Credentials → Create Credentials → OAuth 2.0 Client ID**
6. Application type: **Web application**
7. Add authorized redirect URI: ask Claude or the Cowork setup flow what URI to use
8. Download the client secret JSON

**Step 3 — Connect to Cowork**
- Look for **YouTube** or **Google YouTube Analytics** in Cowork connections
- Authenticate with your Google account
- Grant the requested permissions

**Key info needed:**
- YouTube channel ID (find it in YouTube Studio → Settings → Channel → Advanced settings)
- Video IDs for existing episodes: EP01 `q45B3AGU5Gw`, EP02 `A_mNL2hGbok`, EP03 `p_s5JCdLt6w`

---

### 3D. Spotify for Podcasters API

**What you'll get:** Stream counts, listener numbers, episode completion rates, follower growth.

**Current situation:** Spotify has very limited public API access for podcast analytics. The official Spotify API only allows music/playlist data.

**Best option: Spotify for Creators Dashboard + manual reporting**
1. Log in at https://creators.spotify.com/
2. Go to **Analytics** → you'll see streams, followers, episode performance
3. For now, Nick reviews this weekly and can verbally brief Claude

**If Spotify opens their Podcasters API in future:**
- Show ID to use: `0WENj327UvDEiurKnmmqs0`
- Watch https://developer.spotify.com/ for podcast analytics endpoints

**Workaround:** Add a weekly calendar reminder for Nick to check Spotify analytics and paste the numbers into a Slack message or Notion page that Claude can read.

---

### 3E. Instagram / Facebook (Meta Graph API)

**What you'll get:** Ability to auto-post Reels and carousels, read reach, impressions, saves, profile visits per post.

**Prerequisites:** 
- Instagram account must be a **Professional account** (Business or Creator)
- Must be linked to a **Facebook Page**

**Step 1 — Set up Meta Business Account**
1. Go to https://business.facebook.com/
2. Create or log in to your Business portfolio
3. Connect your Instagram account and Facebook Page

**Step 2 — Create a Meta App**
1. Go to https://developers.facebook.com/
2. Click **My Apps → Create App**
3. Choose **Business** type
4. Add products: **Instagram Graph API** and **Instagram Basic Display**

**Step 3 — Get a long-lived access token**
1. In the App Dashboard, go to **Tools → Graph API Explorer**
2. Select your app, select your Instagram Business Account
3. Request permissions: `instagram_basic`, `instagram_content_publish`, `instagram_manage_insights`, `pages_read_engagement`
4. Generate token, then exchange for a 60-day long-lived token via:  
   `GET /oauth/access_token?grant_type=fb_exchange_token&client_id={app_id}&client_secret={app_secret}&fb_exchange_token={short_lived_token}`

**Step 4 — Connect to Cowork**
- Look for **Instagram** or **Meta** connector in Cowork/MCP marketplace
- Paste the long-lived access token and Instagram Business Account ID

**Key info needed:**
- Instagram Business Account ID (find in Meta Business Suite → Account Settings)
- Facebook Page ID linked to the Instagram account

---

### 3F. Google Business Profile API

**What you'll get:** Metrics on post performance, profile views, search impressions, direction requests, phone clicks, website clicks — per week, per post.

**Step 1 — Enable the API**
1. In Google Cloud Console → **APIs & Services → Library**
2. Search **"Business Profile Performance API"** → Enable
3. Also enable **"My Business Business Information API"**

**Step 2 — OAuth authentication**
- GBP API requires OAuth with user consent (no service account)
- In your OAuth app (from Step 3C), add scope: `https://www.googleapis.com/auth/business.manage`
- Authenticate as `nickiversen@gmail.com` (the GBP account owner)

**Step 3 — Find your location IDs**
- After OAuth, call: `GET https://mybusinessbusinessinformation.googleapis.com/v1/accounts/{accountId}/locations`
- Note the location IDs for both GBP profiles

**Step 4 — Connect to Cowork**
- Look for **Google Business Profile** connector in Cowork
- If not available, ask Claude to make direct API calls using OAuth token + location IDs

**Key info needed:**
- GBP location path: `/g/11q3l62_g1`
- Owner Google account: `nickiversen@gmail.com`

---

### 3G. SSH / VPS Access

**What you need:** Terminal access to the server running OpenClaw (surveycostarica.com) and Claude CLI.

**This cannot be done through Cowork alone** — VPS access requires either:

**Option A — Expose via a web API (recommended)**
1. On the VPS, create a small authenticated REST endpoint (e.g., Node.js with Express or a Bash script triggered by webhook)
2. Cowork calls the endpoint to trigger deployments or get server status
3. Secure with a secret token in the request header

**Option B — Use a deployment webhook**
- Many VPS providers (DigitalOcean, Linode, Hetzner) support webhook-triggered deploys
- Set up a GitHub Actions workflow that SSHes into the server on push (using a deploy key stored as a GitHub secret)
- Claude pushes to GitHub → GitHub Action handles the server deploy

**Option C — Expose via Vercel serverless (if site moves)**
- If OpenClaw/surveycostarica.com ever moves to Vercel, Claude already has full Vercel access

**What Claude already has:** Read/write to the local DroneSurveyCR project folder + Vercel MCP for deploying dronesurveycr.com. This covers everything except the competing site's server.

---

## 4. MASTER WEEKLY MONITORING PLAN

*Once all integrations above are connected, here is what should be tracked automatically.*

---

### DAILY (automated alerts, no manual review needed)

| Signal | Source | Alert Condition |
|--------|--------|-----------------|
| New quote form submission | Notion CRM + Slack webhook | Every submission → Slack alert (already live) |
| Vercel deployment status | Vercel MCP | Failed deploy → immediate alert |
| New Google review | GBP API | Any new review → Slack alert + draft reply |
| Gmail leads | Gmail MCP | Emails with "quote" or "survey" in subject → flag in Slack |

---

### MONDAY — Weekly SEO & Traffic Report

**Already running via `weekly-seo-monitor-fresh` task. Add these once APIs are connected:**

| Metric | Source | What to track |
|--------|--------|---------------|
| Organic sessions (week-over-week) | GA4 API | Total + breakdown by landing page |
| Top 10 keywords by clicks | GSC API | Position, impressions, CTR |
| Keywords newly entering top 10 | GSC API | New ranking opportunities |
| Keywords dropping position | GSC API | Pages needing attention |
| Top organic landing pages | GA4 API | Sessions, bounce rate, avg. engagement time |
| Competitor check | Web scrape | surveycostarica.com new pages/changes |
| Quote form conversions | GA4 events | `quote_form_submit` event count |
| Lead source breakdown | GA4 / Notion | Organic / direct / referral / social |

---

### WEDNESDAY — Content & Social Report

**Already partially running via Wednesday tasks. Add:**

| Metric | Source | What to track |
|--------|--------|---------------|
| New YouTube video performance | YouTube Analytics | Views, watch %, traffic source (24h post-publish) |
| Podcast episode streams | Spotify for Creators | New episode streams vs. previous episodes |
| GBP post reach | GBP API | Views, clicks, calls from Wednesday post |
| Blog post indexing | GSC API | Is Tuesday's new post crawled + indexed yet? |
| Instagram post performance | Meta Graph API | Reach, saves, profile visits from latest Reel |

---

### FRIDAY — Lead Pipeline & Conversion Review

| Metric | Source | What to track |
|--------|--------|---------------|
| Leads this week | Notion CRM | Count, service type, geographic area |
| Quote form submissions | GA4 + Notion | Total + conversion rate vs. sessions |
| GBP weekly views | GBP API | Profile views, search impressions, direction requests |
| Revenue pipeline | Notion CRM | Quotes sent, quotes accepted, total value |
| Response time | Gmail MCP | Avg. hours from lead to reply |

---

### MONTHLY — Strategic Overview (First Monday of Each Month)

| Area | Metrics |
|------|---------|
| **SEO growth** | Total indexed pages, avg. position, domain authority trend, backlink count |
| **Content ROI** | Which blog posts drive most sessions + most leads |
| **YouTube growth** | Total channel views, watch hours, subscriber count, best-performing video |
| **Podcast growth** | Total streams, followers, episode completion rate trend |
| **GBP performance** | Monthly profile views, phone calls, direction requests vs. prior month |
| **Instagram growth** | Follower count, avg. reach per post, top-performing content type |
| **Lead velocity** | Leads per month trend, conversion rate (lead → quote), close rate |
| **Competitive position** | Side-by-side ranking comparison vs. surveycostarica.com, mapea.cr, surveycorp.co |

---

## 5. COMPANY INTELLIGENCE BRIEF TEMPLATE

*Nick should fill this in. Once stored, Claude can reference it for every blog post, email, proposal, and social post.*

---

### 5A. Core Business Facts

```
Company name: Drone Survey Costa Rica
Website: https://www.dronesurveycr.com
Phone/WhatsApp: +506 7293-8970
Location: [Primary city/address where you're based]
Founded: 2017
Operating years in Costa Rica: [X]
Languages served: Spanish / English / [other?]
```

### 5B. Services & Equipment

```
Primary service: LiDAR drone surveying
Equipment: DJI Zenmuse L1 (3 returns, 240,000 pts/sec)
Accuracy: Centimeter-level, penetrates forest canopy

Secondary service: Aerial video & photography (4K)
Secondary service: GPS Geopositioning (RTK base station)
De-prioritized: Photogrammetry (replaced by LiDAR)

Deliverables included in every survey:
- LAS/LAZ point cloud files
- DXF CAD drawings
- SHP shapefiles
- GeoTIFF rasters
- Topographic map with contours

Flight mission + GPS base station + full data processing = all included in price
```

### 5C. Pricing

```
Minimum project: $1,000 USD (up to 5 hectares)
Per additional hectare: $80 USD
Travel fees: Charged from San José to project site
100+ hectares: Custom quote
Payment terms: [Deposit required? Net 30? Wire transfer? PayPal?]
Currency: USD (or colones?)
```

### 5D. Target Clients — Who You Actually Sell To

```
PRIMARY BUYERS (fill in from your actual leads):
1. [e.g., Real estate developers — private residential projects]
2. [e.g., Construction companies — site preparation and earthworks]
3. [e.g., Agricultural operations — plantation mapping, slope analysis]
4. [e.g., Government / municipal — infrastructure planning]
5. [e.g., Mining / quarrying — volume calculations]
6. [e.g., Environmental consultants — habitat mapping, reforestation]

TYPICAL DECISION MAKER: [e.g., Project engineer, Operations manager, Owner]
TYPICAL PROJECT LEAD TIME: [e.g., 2–4 weeks from first contact to survey date]
TYPICAL PROJECT SIZE: [e.g., Average 25 hectares, average invoice $2,800 USD]
```

### 5E. Geographic Coverage

```
Primary coverage area: [e.g., Greater Metropolitan Area + Central Valley]
Full coverage: All of Costa Rica (with travel fees)
Frequently served regions: [List your most common project areas]
Maximum travel distance: [Any limits?]
Areas NOT served: [e.g., Isla del Coco, some remote areas?]
```

### 5F. Team & Capacity

```
Owner / lead pilot: Nick Iversen
Team size: [Solo? 2-3 people? Subcontractors?]
Certifications: [DGAC drone license? Anything else?]
Current capacity: [How many projects per month can you handle?]
Busy season: [Any seasonal patterns — dry season, rainy season?]
```

### 5G. Competitive Advantages (What makes you different)

```
1. [e.g., Only company in CR with DJI L1 LiDAR — true canopy penetration]
2. [e.g., Bilingual (English/Spanish) — serves expat developers directly]
3. [e.g., Full deliverables included — competitors charge extra for processing]
4. [e.g., 4+ years operating = largest completed project portfolio in CR]
5. [e.g., Same-day quote turnaround]
6. [Add your own]
```

### 5H. Competitors You Track

```
surveycostarica.com (OpenClaw) — React SPA, no blog, based in Jacó. Zero social presence.
mapea.cr — Active, cadastral reports and 3D models.
surveycorp.co — Aerial LiDAR, claims 3-5 cm accuracy.
[Any others you've encountered in proposals?]
```

### 5I. Sales & Communication Preferences

```
Preferred first response channel: [Email? WhatsApp?]
Response time target: [e.g., same business day]
Quote turnaround: [e.g., within 24 hours]
Language preference for client emails: [Spanish first? English first? Match client?]
Tone: [Professional and technical? Friendly and approachable?]
Things NOT to promise: [e.g., never promise specific weather windows, never commit to exact dates without checking schedule]
```

### 5J. Content & Brand Voice

```
Blog tone: [e.g., Technical but accessible — written for engineers and project managers, not pilots]
What to emphasize: LiDAR superiority, Costa Rica terrain expertise, full-service delivery
What to avoid: Overselling photogrammetry, making price comparisons without context
Calls to action always point to: /quote.html
Brand colors: [hex codes if you have them]
Logo location: [path in local folder]
```

### 5K. Analytics & Goals for This Year

```
Traffic goal: [e.g., 1,000 organic sessions/month by end of 2026]
Lead goal: [e.g., 15 qualified leads/month]
Revenue goal: [Optional — for ROI calculations]
YouTube goal: [e.g., 500 subscribers by Q3]
GBP goal: [e.g., 50 reviews by year end]
Podcast goal: [e.g., 100 streams per episode]
```

---

## QUICK REFERENCE CHEAT SHEET

```
Website:       https://www.dronesurveycr.com
GitHub repo:   DroneSurveyCR/website (master branch)
Vercel:        Auto-deploys on git push to master
GA4 property:  a221005739p304368543 | G-6L0PFQRYF6
GSC:           sc-domain:dronesurveycr.com
Notion CRM:    21eefe17-c791-4f60-a64e-69b9a1e3ff44
Spotify show:  0WENj327UvDEiurKnmmqs0
YT EP01:       q45B3AGU5Gw
YT EP02:       A_mNL2hGbok
YT EP03:       p_s5JCdLt6w
GBP:           /g/11q3l62_g1
Phone/WA:      +506 7293-8970
Owner email:   nickiversen@gmail.com
```

---

*Document maintained by Claude (Cowork). Update Section 5 whenever business details change.*
