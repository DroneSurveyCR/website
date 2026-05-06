# Weekly SEO Monitoring Checklist — DroneSurveyCR.com
*Run every Monday morning — ~30 minutes*

---

## How to Run This Check with Claude

Open a new Cowork session and paste this prompt:

> "Run the weekly SEO monitoring check for dronesurveycr.com. Check keyword rankings for 'drone survey Costa Rica', 'lidar mapping Costa Rica', 'aerial surveying Costa Rica', 'photogrammetry Costa Rica', and 'topographic survey Costa Rica'. Check if surveycostarica.com is back online. Check mapea.cr for new content. Verify the site health of dronesurveycr.com, the blog at dronesurveycr.com/blog/, sitemap.xml, and robots.txt. Suggest 2 new blog post topics for this week. Save a report to the seo-strategy folder named weekly-report-[today's date].md"

---

## Manual Checklist (30 min every Monday)

### 🔍 Keyword Rankings (10 min)
Search Google (incognito/private window) for each keyword and record where dronesurveycr.com appears:

| Keyword | Position This Week | Position Last Week | Change |
|---|---|---|---|
| drone survey Costa Rica | | | |
| lidar mapping Costa Rica | | | |
| aerial surveying Costa Rica | | | |
| photogrammetry Costa Rica | | | |
| topographic survey Costa Rica | | | |
| drone survey real estate Costa Rica | | | |
| lidar drone Costa Rica | | | |
| how much does drone survey cost Costa Rica | | | |

### 🕵️ Competitor Watch (5 min)
- [ ] Check if **surveycostarica.com** is back online ⚠️ PRIORITY
- [ ] Visit **mapea.cr** — any new blog posts or service pages?
- [ ] Visit **surveycorp.co** — any changes?
- [ ] Search "drone survey Costa Rica" — any new competitors in top 10?

### 🌐 Site Health Check (5 min)
- [ ] Visit https://www.dronesurveycr.com/ — loads correctly?
- [ ] Visit https://www.dronesurveycr.com/blog/ — loads correctly?
- [ ] Visit https://www.dronesurveycr.com/sitemap.xml — renders correctly?
- [ ] Visit https://www.dronesurveycr.com/robots.txt — renders correctly?
- [ ] Check Google Search Console for crawl errors (search.google.com/search-console)
- [ ] Check Google Analytics for traffic vs. previous week

### ✍️ Content Calendar (5 min)
- [ ] Blog post #1 published this week? (Title: ________________)
- [ ] Blog post #2 published this week? (Title: ________________)
- [ ] Updated sitemap.xml with new blog posts?
- [ ] Shared new posts on WhatsApp Business?
- [ ] Posted to Google Business Profile this week?

### 📊 Quick Stats to Record
- Sessions this week (GA4): ______
- Sessions last week (GA4): ______
- Top traffic page: ______
- New Google Search Console impressions: ______
- New reviews this week: ______

---

## Blog Content Calendar

### Month 1 (April 2026)
| Week | Post 1 | Post 2 | Status |
|---|---|---|---|
| Apr 1–7 | How Much Does a Drone Survey Cost in Costa Rica? ✅ | Lidar vs Photogrammetry Costa Rica | |
| Apr 8–14 | Drone Survey for Real Estate in Costa Rica | Costa Rica Drone Laws 2026 | |
| Apr 15–21 | Construction Drone Surveys in Costa Rica | Drone Survey Agriculture Costa Rica | |
| Apr 22–30 | Best Drone Survey Company in Costa Rica | Topographic Mapping for Land Development CR | |

### Month 2 (May 2026)
| Week | Post 1 | Post 2 | Status |
|---|---|---|---|
| May 1–7 | How Accurate Is a Lidar Drone Survey? | Drone Survey Case Study (Real Project) | |
| May 8–14 | GPS Survey vs Drone Survey in Costa Rica | Aerial Mapping Central America | |
| May 15–21 | Cadastral Survey with Drones Costa Rica | 3D Mapping for Construction in CR | |
| May 22–31 | How Long Does a Drone Survey Take? | Drone Survey for Farms in Guanacaste | |

---

## Tools You Should Connect (One-Time Setup)

| Tool | Why | Cost | Link |
|---|---|---|---|
| **Google Search Console** | Track rankings + crawl errors | Free | search.google.com/search-console |
| **Google Analytics 4** | Traffic, pages, conversions | Free | analytics.google.com |
| **Google Business Profile** | Local SEO, reviews, posts | Free | business.google.com |
| **Ahrefs / SEMrush** | Real keyword volumes + competitor tracking | ~$100/mo | ahrefs.com or semrush.com |
| **Vercel Analytics** | Already on Vercel — just enable it | Free | Vercel dashboard |

### Adding GA4 to Your Site
Add this tag inside the `<head>` of every HTML page (replace `G-XXXXXXXXXX` with your GA4 Measurement ID):
```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Google Search Console Verification
Add this inside the `<head>` of index.html (replace with your actual verification code from GSC):
```html
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE_HERE">
```

---

*Last updated: April 2, 2026*
