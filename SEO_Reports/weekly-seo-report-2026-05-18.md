# Weekly SEO Report: dronesurveycr.com
**Report Date:** May 18, 2026 (Monday 8 AM)  
**Period:** May 11–18, 2026  
**Prepared by:** Automated Weekly SEO Monitor

---

## 📊 Traffic Summary (GA4)

### Overall Performance
- **This Week Sessions:** 60 sessions
- **Active Users:** ~52 users
- **Week-over-Week Change:** -11.8% (↓ from 68 sessions last week)
- **Primary Traffic Source:** Direct (61 sessions, 96%)
- **Secondary:** Organic Search (6 sessions, 10%)

### Top Pages by Sessions (Last 7 Days)
| Page | Sessions | Users |
|------|----------|-------|
| Home (/) | 22 | 18 |
| Portfolio Viewer | 20 | 20 |
| Quote Request | 16 | 11 |
| Blog Index | 2 | 2 |
| Construction Surveys Blog | 2 | 2 |
| Drone Survey Costs Blog | 2 | 2 |
| GeoPositioning Services | 2 | 2 |
| LiDAR Mapping Services | 2 | 2 |

### Key Observations
- **Portfolio viewer is second-highest traffic driver** (20 sessions) — this is a strong conversion funnel signal
- **Direct traffic dominates** (96%) — suggests returning visitors or bookmarked links
- **Organic search is minimal** (6 sessions) — biggest optimization opportunity
- **Blog traffic is extremely low** (2 sessions per post) — content isn't ranking or driving traffic

---

## 🔑 Keyword & Search Console Data

### ⚠️ GSC DATA UNAVAILABLE THIS WEEK

**Issue:** OAuth refresh token for Google Search Console has expired or been revoked (error: `invalid_grant`).

**Impact:**
- Cannot pull current GSC keyword positions
- Cannot identify CTR quick-win opportunities
- Cannot track ranking changes for target keywords
- Cannot monitor search impressions/clicks

**Target Keywords (Historical Tracking):**
- "drone survey costa rica"
- "aerial survey costa rica"
- "drone mapping costa rica"
- "lidar survey costa rica"
- "photogrammetry costa rica"
- "drone survey cost costa rica"

**Action Required:** Re-authenticate Google OAuth credentials to restore GSC access. See **Critical Issues** section below.

---

## 🎬 YouTube Performance

### Channel Overview
- **Total Views:** 416 (all-time)
- **Subscribers:** 2
- **Videos:** 10
- **Channel Name:** Drone Survey Costa Rica

### ⚠️ DETAILED YOUTUBE ANALYTICS UNAVAILABLE

**Issue:** OAuth token required for YouTube Analytics API has expired.

**Last Known State (from credentials file, as of May 5, 2026):**
- 10 videos published
- Low subscriber engagement (2 subs)
- YouTube channel exists but appears under-promoted

**Recommendation:** Prioritize YouTube re-authentication to track video performance weekly.

---

## 🏆 Competitor Intelligence

### surveycostarica.com
- **Status:** Active and well-optimized
- **Meta Description:** "Drone, LiDAR, and land surveying in Costa Rica for property buyers and developers. Fast, accurate deliverables for planning, permits, and construction."
- **Keywords Focus:** surveying Costa Rica, drone survey, LiDAR mapping, land survey, digital surveying tools
- **Position:** Direct competitor with strong brand presence
- **Threat Level:** HIGH — covers all the same service areas

### mapea.cr
- **Status:** Modern, professional site (Astro v5.13.8 framework)
- **Meta Description:** "Professional topographic surveying services using cutting-edge LiDAR drone technology. Get precise 3D mapping, cadastral reports, and territorial analysis in Costa Rica."
- **Service Angle:** Emphasizes "advanced LiDAR," 3D modeling, cadastral reports, territorial analysis
- **Threat Level:** MEDIUM-HIGH — more technical/sophisticated positioning
- **Observations:** Well-designed UX, strong call-to-action ("GET A QUOTE"), video demos on homepage

### surveycorp.co
- **Status:** Established player (12+ years, 10,000+ hectares surveyed)
- **Meta Description:** "Leading topographic surveying and imaging company in Costa Rica... highest quality services at competitive prices."
- **Key Claims:** 12+ years experience, 10,000+ hectares surveyed, state-of-the-art remote sensing
- **Service Breadth:** LiDAR, photogrammetry, GNSS, agricultural imaging, 3D modeling, high-res photography
- **Threat Level:** VERY HIGH — longest-established, widest service portfolio

### Competitive Positioning Analysis
| Competitor | Main Differentiator | Threat | Opportunity for DroneSurveyCR |
|------------|-------------------|--------|-------------------------------|
| Survey Costa Rica | Fast delivery, property buyers focus | HIGH | Geographic/service niche |
| MAPEA | Modern design, 3D/Gaussian splats, sophisticated | MEDIUM-HIGH | Cost leadership or local presence |
| SurveyCorp | 12 years, 10,000+ hectares, wide services | VERY HIGH | Vertical specialization (construction, real estate) |

**SEO Gap:** None of the competitors show strong blog/content strategies in the fetched pages, suggesting this is an under-exploited channel for the entire market.

---

## 🎯 Action Items for Next Week

### CRITICAL - Must Fix This Week
1. **Re-authenticate Google OAuth credentials**
   - OAuth refresh token has expired (`invalid_grant` error)
   - Affects: GSC data, YouTube Analytics, GBP APIs
   - Action: Generate new OAuth token via Google Cloud Console → OAuth 2.0 playground
   - Impact: Restores all analytics data pulls for future reports

### HIGH PRIORITY (Search Visibility)
2. **Increase organic search traffic to blog**
   - Current blog traffic: 2 sessions/post
   - Opportunity: Target long-tail keywords in "drone survey cost costa rica", "construction drone surveys", etc.
   - Action: Audit existing blog posts for on-page SEO (title, meta, H1, internal links)

3. **Expand organic search beyond direct traffic**
   - Direct traffic = 96% of total (concerning for growth)
   - Action: Analyze portfolio-viewer traffic flow — it's converting (20 sessions) but not from search
   - Opportunity: Add schema markup for local business (Service Area: Costa Rica)

4. **Leverage portfolio viewer as conversion funnel**
   - 20 sessions/week on portfolio-viewer is your strongest page
   - Action: Add CTAs, estimate request links, "Get Quote" buttons to portfolio pages
   - Track: Measure click-through to quote form

### MEDIUM PRIORITY (Competitive Defense)
5. **Monitor competitor blog activity**
   - Set up weekly check on surveycorp.co/blog, surveycostarica.com, mapea.cr
   - Watch for new service offerings or content that out-rank you

6. **Build local SEO presence**
   - Competitors all mention "Costa Rica" prominently
   - Verify: Google Business Profile fully optimized
   - Ensure: NAP (Name, Address, Phone) consistency across web

### IMPROVEMENT OPPORTUNITIES
7. **YouTube channel activation**
   - 10 videos, 2 subscribers — drastically under-promoted
   - Action: Embed top 3 videos on homepage and service pages
   - Cross-promote: Add YouTube CTAs to blog posts

8. **Blog index traffic is low (2 sessions/week)**
   - Action: Identify which blog posts are ranking in GSC (once re-authenticated)
   - Strategy: Double down on posts already getting search impressions, refresh underperforming content

---

## 📈 Week-over-Week Trend
- **Sessions:** -11.8% decline (68 → 60)
- **Assessment:** Small sample size for one week; direct traffic variance could be seasonal or campaign-related
- **Monitor:** Watch next week's data to confirm trend or mark as noise

---

## 🔴 Critical Issues Requiring Manual Attention

### OAuth Token Expiration
**Symptom:** GSC, YouTube Analytics, and GBP APIs all failing with `invalid_grant` error  
**Root Cause:** Refresh token in `google-oauth-credentials.json` has been revoked or expired  
**Resolution Steps:**
1. Go to [Google Cloud Console](https://console.cloud.google.com/apis/credentials) for project "drone-survey-costa-rica"
2. Delete the existing OAuth 2.0 Client ID (Web application)
3. Create a new OAuth 2.0 Client ID
4. Use [OAuth 2.0 Playground](https://developers.google.com/oauthplayground) to obtain new refresh token
5. Update `_master_token.refresh_token` in `google-oauth-credentials.json`
6. Verify by running a test token refresh

**Timeline:** This should be completed before next Monday's automated report.

---

## 📋 Next Report
**Scheduled:** Monday, May 25, 2026 at 8 AM  
**Prerequisites:**
- ✅ OAuth token re-authentication completed
- ✅ GSC and YouTube Analytics APIs fully functional
- ✅ Competitor blog updates checked

---

## Summary Scorecard

| Metric | Status | Trend | Action |
|--------|--------|-------|--------|
| Overall Traffic | 60 sessions | ↓ -11.8% | Monitor |
| Direct Traffic | 61 sessions (96%) | N/A | Investigate source concentration |
| Organic Search | 6 sessions (10%) | ↓ Critical | Expand blog SEO strategy |
| Portfolio Viewer | 20 sessions | ✓ High intent | Optimize conversion funnel |
| Blog Performance | 2 sessions/post | ↓ Very Low | Fix indexing/ranking |
| Organic Rankings | **Data unavailable** | — | **Re-auth OAuth** |
| YouTube | 416 views, 2 subs | — | Activate channel |
| Competitor Threat | VERY HIGH | — | Monitor surveycorp weekly |

---

**Report Generated:** 2026-05-18 08:15 UTC  
**Next Steps:** Review critical issues, approve OAuth re-authentication, and confirm next report will have full analytics data.
