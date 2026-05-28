# Weekly SEO Report — DroneSurveyCR.com
**Date:** Monday, May 25, 2026 | **Generated:** Automated (weekly-seo-monitor-fresh)

---

## ⚠️ API Status This Week

| Data Source | Status | Note |
|---|---|---|
| GA4 (Traffic) | ✅ Live | Service account working |
| GSC (Keywords) | ❌ FAILED | OAuth refresh token expired (`invalid_grant`) — needs re-auth |
| YouTube Analytics | ❌ FAILED | Same OAuth token — expired |

**Action required:** The Google OAuth refresh token stored in `google-oauth-credentials.json` has expired and must be regenerated. This blocks GSC keyword ranking data and YouTube analytics. Nick needs to run the OAuth flow once to get a new refresh token.

---

## 📊 Traffic Summary (GA4 — Real Data)

**Week:** May 18–25, 2026

| Metric | This Week | Last Week | Change |
|---|---|---|---|
| Sessions | **59** | 67 | 🔴 -11.9% |
| Active Users (approx) | ~45 | ~52 | -13.5% |

### Traffic Sources (Last 7 Days)
| Channel | Sessions |
|---|---|
| Direct | 21 |
| Organic Search | 1 |
| Referral | 1 |

> ⚠️ **Concern:** Organic search is generating only 1 session this week. The overwhelming majority of traffic (21/23 attributed sessions) is Direct. This suggests the site is not yet ranking well enough to drive click-throughs from Google, or that GA4 is misattributing sessions (common if there are no UTM parameters on links).

### Top Pages (Last 7 Days)
| Page | Sessions | Users |
|---|---|---|
| `/` (Homepage) | 8 | 7 |
| `/blog/construction-drone-surveys-costa-rica.html` | 4 | 4 |
| `/about` | 3 | 2 |
| `/contact` | 3 | 2 |
| `/quote.html` | 3 | 3 |
| `/dgac-drone-regulations-costa-rica-2026.html` | 2 | 2 |
| `/drone-topographic-survey-costa-rica.html` | 2 | 2 |
| `/blog/dgac-drone-regulations-costa-rica-2026.html` | 1 | 1 |
| `/blog/drone-survey-central-valley-costa-rica.html` | 1 | 1 |
| `/blog/drone-survey-costs-costa-rica-2026.html` | 1 | 1 |

**Insight:** The construction blog post is performing well (2nd highest traffic page). The DGAC regulations page appears twice — once as a root-level page and once as a blog path — which may indicate a duplicate content issue worth investigating.

---

## 🔑 Keyword Rankings (GSC)

**⛔ DATA UNAVAILABLE — OAuth token expired.**

Last known data (from May 2026 baseline memory):
- GSC impressions: 523 | Average position: 11.6
- Striking-distance keywords were identified and fixes were applied

Cannot confirm current week positions. Priority fix: regenerate OAuth token.

### Competitor SERP Observations (via web search)
For query **"drone survey Costa Rica"**:
1. dronesurveycr.com — appearing in top 2 positions ✅
2. surveycostarica.com — appearing #2–3
3. dronesurveycr.com blog (cost guide) — also appearing as a rich result

For query **"aerial survey Costa Rica"**:
- surveycostarica.com appears prominently
- dronesurveycr.com less visible — opportunity to optimize

**🚨 Algorithm Note:** A **May 2026 Google Core Algorithm Update** was confirmed this week (source: Coalition Technologies). The -11.9% traffic drop this week may partly reflect ranking volatility from this update. Monitor closely over the next 2–3 weeks.

---

## 📺 YouTube Analytics

**⛔ DATA UNAVAILABLE — OAuth token expired.**

Static data from credentials file (last recorded):
- **Channel:** Drone Survey Costa Rica
- **Total views:** 416
- **Subscribers:** 2
- **Videos published:** 10

Cannot pull this week's view counts or watch time without live API access.

---

## 🕵️ Competitor Intel

### surveycostarica.com
- Still active, appearing for "aerial survey Costa Rica" and "survey Costa Rica" terms
- No new blog posts detected in search index this week
- Positioning: LiDAR/drone mapping specialist, no major new content push observed

### surveycorp.co
- Multiple indexed service pages visible (LiDAR Surveys, What We Do, Projects, About)
- Claims "12 years experience" — strong authority signal
- No new content detected this week

### mapea.cr
- Active for advanced LiDAR surveying positioning
- No new content detected this week

### Threat Assessment: 🟡 MEDIUM
No new competitor blog content detected this week, but surveycostarica.com and surveycorp.co both have strong service page coverage. dronesurveycr.com's blog is a key differentiator — keep publishing.

---

## ✅ Action Items — Top 3 for This Week

### 1. 🔴 URGENT: Regenerate Google OAuth Token
**Why:** GSC and YouTube analytics are completely blind without it. We're flying dark on keyword rankings.
**How:** Nick needs to run the OAuth authorization flow once (visit the auth URL, grant permissions, save the new refresh token). This unblocks 2 of 3 data sources.

### 2. 🟡 Investigate Duplicate Content: DGAC Regulations Page
**Why:** `/dgac-drone-regulations-costa-rica-2026.html` and `/blog/dgac-drone-regulations-costa-rica-2026.html` both appear in GA4 as separate pages receiving traffic. This is a potential duplicate content issue that could hurt rankings.
**Action:** Check if both URLs serve the same content. If so, add a canonical tag pointing to the preferred URL, or redirect one to the other.

### 3. 🟢 Optimize for "Aerial Survey Costa Rica"
**Why:** Search results show surveycostarica.com dominating this variant while dronesurveycr.com is less visible. This is a high-intent keyword we should own.
**Action:** Update homepage meta title/description and one blog post to include "aerial survey Costa Rica" naturally. Consider a dedicated service page or blog post targeting this term.

---

## 📈 Week-Over-Week Summary

| Signal | Status | Notes |
|---|---|---|
| Traffic trend | 🔴 -11.9% | May Google Core Update likely a factor |
| Organic sessions | 🔴 Very low (1) | GSC blind; direct traffic dominant |
| Top content | 🟢 Construction blog | Performing well, 2nd highest page |
| Competitor activity | 🟢 Quiet week | No new competitor content |
| Blog publish cadence | ✅ On schedule | Automated Tue blog task running |
| OAuth token | 🔴 Expired | Blocks GSC + YouTube data |

---

*Report generated automatically. All GA4 traffic figures are real API data. GSC and YouTube data unavailable this week due to expired OAuth token — figures marked as unavailable, not estimated.*
