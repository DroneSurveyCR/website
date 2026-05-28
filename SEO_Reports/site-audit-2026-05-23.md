# Weekly Site Audit — 2026-05-23

**Site:** https://www.dronesurveycr.com  
**Audit run:** Saturday, May 23 2026 (automated)  
**Commit:** `97d885d` — chore: weekly self-audit fixes 2026-05-23  

---

## Summary Table

| Check | Found | Auto-Fixed | Needs Manual Review |
|---|---|---|---|
| Orphaned blog posts | 1 | 1 ✅ | 0 |
| Sitemap missing URLs | 2 + missing `</urlset>` | 3 ✅ | 0 |
| Sitemap duplicate entries | 2 | ⚠️ logged | Review & de-dup |
| Broken internal links | 3 | 3 ✅ | 0 |
| Title > 60 chars | 33 | 0 | 33 ⚠️ |
| Missing meta description | 2 | 0 | 2 ⚠️ |
| Missing canonical tag | 2 | 0 | 2 ⚠️ |
| Missing schema (root pages) | 6 | 0 | 3 ⚠️ |
| **Total files changed** | — | **6** | — |

---

## Step 1 — Orphaned Blog Posts

**1 orphaned post found and fixed.**

| File | Title | Date | Action |
|---|---|---|---|
| `blog/drone-survey-cost-costa-rica.html` | How Much Does a Drone Survey Cost in Costa Rica? (2026 Pricing Guide) | Apr 2, 2026 | Added card to `blog/index.html` |

**Note:** This post has near-duplicate content with `how-much-does-drone-survey-cost-costa-rica.html` (same title, same date). Consider consolidating or adding a canonical pointing one to the other.

---

## Step 2 — Sitemap Gaps

**2 missing blog URLs added. Critical bug fixed: `</urlset>` closing tag was missing from sitemap.xml.**

| Action | URL |
|---|---|
| Added | `blog/drone-survey-cost-costa-rica.html` (lastmod 2026-04-02) |
| Added | `blog/plano-catastro-drone-costa-rica.html` (lastmod 2026-04-11) |
| Fixed | Missing `</urlset>` closing tag — sitemap was technically invalid XML |

**⚠️ Duplicate entries detected (not auto-removed — need manual review):**
- `blog/drone-survey-caribbean-agriculture-limon-costa-rica.html` — appears **2×**
- `blog/drone-survey-central-valley-update-costa-rica.html` — appears **2×**

Action needed: remove the duplicate `<url>` blocks from `sitemap.xml`.

---

## Step 3 — Broken Internal Links

**3 broken links found and fixed** — all in the services page navigation dropdown.

| File | Broken href | Fixed to |
|---|---|---|
| `services/geopositioning.html` | `index.html#services` | `../index.html#services` |
| `services/lidar-mapping.html` | `index.html#services` | `../index.html#services` |
| `services/photogrammetry.html` | `index.html#services` | `../index.html#services` |

The "Aerial Video" nav dropdown item in all three service pages was pointing to a non-existent `services/index.html` instead of `../index.html#services`.

---

## Step 4 — Meta Tag Issues

Not auto-fixed (accuracy review required). Full list:

### Titles > 60 characters (33 pages)

Google truncates titles at ~60 chars in SERPs. These won't break rankings but may lose click-through if key info is cut off. Highest priority to fix are pages with >80 chars.

**Critical (>80 chars):**
- `blog/construction-drone-surveys-costa-rica.html` — 86 chars
- `blog/dgac-drone-regulations-costa-rica-2026.html` — 81 chars
- `blog/drone-survey-caribbean-agriculture-limon-costa-rica.html` — 88 chars
- `blog/drone-survey-caribbean-coastal-development-costa-rica.html` — 79 chars
- `blog/drone-survey-caribbean-costa-rica.html` — 102 chars
- `blog/drone-survey-central-valley-costa-rica.html` — 96 chars
- `blog/drone-survey-central-valley-real-estate-costa-rica.html` — 83 chars
- `blog/drone-survey-central-valley-update-costa-rica.html` — 88 chars
- `blog/drone-survey-environmental-impact-assessment-costa-rica.html` — 89 chars
- `blog/drone-survey-guanacaste-costa-rica.html` — 87 chars
- `blog/drone-survey-guanacaste-tourism-infrastructure-costa-rica.html` — 103 chars
- `blog/drone-survey-south-pacific-costa-rica.html` — 96 chars
- `blog/drone-survey-agriculture-costa-rica.html` — 77 chars
- `blog/lidar-vs-photogrammetry.html` — 88 chars
- `blog/index.html` — 80 chars
- `services/geopositioning.html` — 74 chars
- `services/lidar-mapping.html` — 72 chars

### Missing meta description
- `root/dashboard.html` — internal admin page, low priority
- `root/google401485b7441b326d.html` — GSC verification file, no action needed

### Missing canonical tag
- `root/dashboard.html` — internal admin page, low priority
- `root/google401485b7441b326d.html` — GSC verification file, no action needed

---

## Step 5 — Schema Coverage

### Root pages ✅ (good coverage)
| Page | Schema Types |
|---|---|
| `index.html` | LocalBusiness, FAQPage, AggregateRating, Review ✅ |
| `about.html` | LocalBusiness, BreadcrumbList, AggregateRating ✅ |
| `lp-agriculture.html` | Service, LocalBusiness, AggregateRating ✅ |
| `lp-construction.html` | Service, LocalBusiness, AggregateRating ✅ |
| `lp-real-estate.html` | Service, LocalBusiness, AggregateRating ✅ |

### Services pages ✅ (good coverage)
All three (`lidar-mapping.html`, `geopositioning.html`, `photogrammetry.html`) have FAQPage + BreadcrumbList schema.

### Pages missing schema ⚠️ (manual review)
| Page | Priority | Recommendation |
|---|---|---|
| `quote.html` | HIGH | Add LocalBusiness + Service schema — this is a conversion page |
| `portfolio.html` | MEDIUM | Add ImageGallery or ItemList schema |
| `portfolio-viewer.html` | LOW | Internal viewer, low SEO value |
| `404.html` | SKIP | No schema needed |
| `dashboard.html` | SKIP | Internal tool |
| `google401485b7441b326d.html` | SKIP | Verification file |

---

## Files Changed This Run

| File | Change |
|---|---|
| `blog/index.html` | Added blog card for orphaned post `drone-survey-cost-costa-rica.html` |
| `sitemap.xml` | Added 2 missing blog URLs + fixed missing `</urlset>` closing tag |
| `services/geopositioning.html` | Fixed broken nav link `index.html#services` → `../index.html#services` |
| `services/lidar-mapping.html` | Fixed broken nav link `index.html#services` → `../index.html#services` |
| `services/photogrammetry.html` | Fixed broken nav link `index.html#services` → `../index.html#services` |

**Total: 5 files changed in 1 commit (`97d885d`)**

---

## Action Items for Nick

1. **Remove duplicate sitemap entries** for `drone-survey-caribbean-agriculture-limon-costa-rica.html` and `drone-survey-central-valley-update-costa-rica.html`
2. **Consolidate near-duplicate pricing posts**: `drone-survey-cost-costa-rica.html` and `how-much-does-drone-survey-cost-costa-rica.html` have identical titles and dates — add a canonical or 301 redirect from the older to the newer
3. **Add schema to `quote.html`** — highest-priority conversion page missing structured data
4. **Trim long titles** on the 17 pages with titles >80 chars (see list above)
5. **Push commit** — run `PUSH_FIX.bat` or use the GitHub MCP to push `97d885d` to origin
