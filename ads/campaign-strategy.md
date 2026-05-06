
# DroneSurveyCR.com — Paid Ads Campaign Strategy
**Last updated:** March 2026
**Platforms:** Google Ads, Meta (Facebook/Instagram), LinkedIn
**Primary goal:** Lead generation (quote requests + WhatsApp contacts)
**Conversion actions:** Quote form submission | WhatsApp click | Phone call

---

## Budget Recommendation

| Platform | Monthly Budget | % of Total |
|---|---|---|
| Google Search (high intent) | $600 | 50% |
| Meta (Facebook/Instagram) | $360 | 30% |
| LinkedIn (B2B) | $120 | 10% |
| Retargeting (all platforms) | $120 | 10% |
| **Total** | **$1,200/mo** | 100% |

> Scale to $2,000–$3,000/mo once winning ad sets are identified (weeks 4–8).

---

## Campaign Structure

### GOOGLE ADS

**Account:** DroneSurveyCR — Google Ads
**Location targeting:** Costa Rica (all regions) + focus bids on GAM, Alajuela, Guanacaste, Limón
**Language:** Spanish + English
**Ad schedule:** Mon–Fri 7am–7pm, Sat 8am–2pm (local CR time)

---

#### Campaign G1: Construction & Engineering (Search)
- **Objective:** Leads
- **Budget:** $250/mo
- **Bidding:** Maximize Conversions → shift to Target CPA after 30 leads
- **Target CPA goal:** $25–$45

| Ad Group | Keywords (match type) |
|---|---|
| Topographic Survey | [topographic survey costa rica], "levantamiento topografico drone", [drone survey CR] |
| Construction Monitoring | "construction monitoring drone", [aerial survey construction], "progress monitoring drone" |
| LiDAR Mapping | [lidar mapping costa rica], "lidar drone survey", "aerial lidar CR" |
| Engineering / DEMs | "digital elevation model costa rica", "3d terrain model drone", "orthomosaic costa rica" |

**Negative keywords (all groups):**
- diy, hobby, cheap, free, jobs, career, how to, tutorial, buy drone, drone for sale

---

#### Campaign G2: Real Estate (Search)
- **Budget:** $150/mo
- **Bidding:** Maximize Conversions

| Ad Group | Keywords |
|---|---|
| Real Estate Photography | [drone photography real estate costa rica], "aerial property photo" |
| Land Assessment | "land survey costa rica", "property mapping drone", [aerial land survey CR] |
| Luxury / Development | "drone video real estate costa rica", "development site survey" |

---

#### Campaign G3: Agriculture (Search)
- **Budget:** $100/mo

| Ad Group | Keywords |
|---|---|
| Crop Survey | [drone agriculture costa rica], "crop mapping drone", "aerial farm survey" |
| Irrigation/Terrain | "topographic farm survey", "drainage mapping drone costa rica" |

---

#### Campaign G4: Brand Defense
- **Budget:** $50/mo
- Keywords: [dronesurveycr], [drone survey costa rica site], [dronesurveycr.com]
- Protects brand from competitors bidding on your name.

---

#### Campaign G5: Performance Max
- **Budget:** $50/mo
- Feed all creative assets, logos, headlines, and descriptions
- Targets across Search, Display, YouTube, Gmail, Maps
- Good for capturing demand you're not yet reaching with Search alone

---

### META ADS (FACEBOOK + INSTAGRAM)

**Pixel:** Install Meta Pixel on all pages. Track: PageView, Lead (quote form submit), Contact (WhatsApp click)
**Objective:** Lead Generation
**Placements:** Facebook Feed, Instagram Feed, Instagram Reels, Facebook Stories

---

#### Campaign M1: Construction — Cold Audience
- **Budget:** $120/mo
- **Objective:** Leads

**Ad Set 1A — Broad Construction (Costa Rica)**
- Location: Costa Rica
- Age: 28–55
- Interests: Construction, Civil Engineering, Real Estate Development, Land Development, Architecture
- Behaviors: Small business owners, Business decision makers

**Ad Set 1B — Lookalike (upload your client list)**
- 1% Lookalike of past clients (Costa Rica)
- Exclude: existing contacts

**Ads to run:** Ad-copy.md → Campaign 1, Ads 1–4 (rotate all 4, kill lowest performer at day 7)

---

#### Campaign M2: Real Estate — Cold Audience
- **Budget:** $80/mo

**Ad Set 2A**
- Location: Costa Rica
- Interests: Real Estate, Property Investment, Land Buying, Real Estate Development
- Age: 30–60

**Ad Set 2B — Spanish speakers specifically**
- Language: Spanish
- Interest: Bienes raíces, inversión inmobiliaria, terrenos en venta

**Ads:** Campaign 2, Ads 1–2

---

#### Campaign M3: Agriculture — Cold Audience
- **Budget:** $80/mo

**Ad Set 3A**
- Location: Costa Rica (Guanacaste, Puntarenas, Limón, San José provinces)
- Interests: Agriculture, Farming, Crop production, Plantation management, Agronomics
- Age: 30–65

**Ads:** Campaign 3, Ad 1

---

#### Campaign M4: Retargeting (All Audiences)
- **Budget:** $80/mo

**Ad Set 4A — Hot (1–7 days, visited quote page)**
- Audience: Website visitors → quote.html (last 7 days)
- Exclude: Anyone who submitted the form
- Ad: Retargeting Ad 1 (WhatsApp CTA)
- Frequency cap: 3/day

**Ad Set 4B — Warm (8–30 days, any page visit)**
- Audience: All website visitors (last 30 days)
- Exclude: Recent converters (14 days)
- Ad: Before/after carousel + testimonial ad

**Ad Set 4C — Engaged (video viewers 25%+)**
- Audience: People who watched 25%+ of any video ad
- Ad: Retargeting Ad 1

---

### LINKEDIN ADS

**Objective:** Website visits / Lead Gen Forms
**Budget:** $120/mo (LinkedIn CPCs are higher — expect $8–$15/click)

**Campaign L1: Construction & Engineering Firms**

Targeting:
- Location: Costa Rica
- Job titles: Project Manager, Site Manager, Construction Manager, Civil Engineer, Structural Engineer, Developer
- Company size: 11–500 employees
- Industry: Construction, Civil Engineering, Real Estate

**Ad:** LinkedIn Ad 1 & 2 from ad-copy.md

**Campaign L2: Real Estate Development**

Targeting:
- Job titles: Real Estate Developer, Property Manager, Land Developer, Urban Planner
- Industry: Real Estate, Urban Development

---

## Naming Conventions

```
[PLATFORM]_[OBJECTIVE]_[AUDIENCE]_[CAMPAIGN]_[DATE]

Examples:
GOOG_Lead_Construction_TopographicSearch_Mar26
META_Lead_Construction_ColdBroad_Mar26
META_Lead_Retarget_QuotePage7d_Mar26
LI_Traffic_Construction_Engineers_Mar26
```

---

## Launch Checklist

### Before Going Live
- [ ] Meta Pixel installed on index.html, quote.html, all service pages
- [ ] Conversion event: form submit fires on quote.html confirmation
- [ ] Conversion event: WhatsApp button click tracked as "Contact"
- [ ] Google Ads conversion tracking tag installed
- [ ] UTM parameters on all ad URLs:
  - `?utm_source=facebook&utm_medium=paid&utm_campaign=construction-cold`
  - `?utm_source=google&utm_medium=cpc&utm_campaign=topographic-search`
- [ ] Landing pages live (lp-construction.html, lp-real-estate.html, lp-agriculture.html)
- [ ] Google Analytics 4 linked to Google Ads account
- [ ] All ad creative assets prepared (images + video per creative brief)
- [ ] Negative keyword lists loaded into Google Ads
- [ ] Ad extensions set up (sitelinks, callouts, structured snippets, call)

---

## Week-by-Week Launch Plan

### Week 1–2: Setup & Launch
- Install all pixels and conversion tracking
- Upload creative assets
- Launch G1 (Construction Search) + M1 Ad Set 1A only
- Monitor for disapprovals, tracking fires, budget pacing

### Week 3–4: Expand
- Review Search Terms report → add negatives
- Launch M2 (Real Estate) + M3 (Agriculture)
- Launch retargeting M4 (you'll have enough visitors now)
- Kill Meta ads with CTR < 0.8% or CPL > $60

### Week 5–6: Optimize
- Shift Google bidding to Target CPA if 20+ conversions logged
- Pause worst-performing ad sets
- Duplicate and scale best-performing ad sets (+30% budget)
- Launch LinkedIn L1

### Week 7–8: Scale
- Upload client email list → create Meta lookalike audiences
- Launch Performance Max campaign
- A/B test new ad angles based on learnings
- Adjust bids by location (increase for GAM, San José)

---

## KPIs & Targets

| Metric | Target |
|---|---|
| Google Search CTR | > 5% |
| Google CPC | < $2.50 |
| Meta CTR (link) | > 1.2% |
| Meta CPM | < $8 |
| Cost Per Lead (all) | < $35 |
| Quote form conversion rate | > 15% on landing pages |
| WhatsApp response rate | > 70% within 2 hours |
| Monthly leads target | 30–50 |

---

## Optimization Notes

- **Spanish ads always outperform English** in CR B2B — prioritize ES copy
- **WhatsApp CTA converts better** than form-only in Latin American markets — always offer both
- **Video ads** will build your retargeting audience fastest — prioritize video creative early
- **Google Search + Meta retargeting** is the highest ROI combo — don't run Meta cold alone
- **Guanacaste, Cartago, and Limón** are underserved construction markets — increase bids there
- **Monthly review:** Pull GA4 report → identify top landing pages → increase budget for those
