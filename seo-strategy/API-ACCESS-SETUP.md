# API Access Setup — GSC & GA4 for Automated SEO
*DroneSurveyCR.com | dronesurveycr@gmail.com*

This guide sets up Google Search Console API and Google Analytics Data API so the weekly SEO monitor and blog tasks can pull real ranking and traffic data automatically.

---

## Part 1: Google Cloud Project Setup

You only do this once.

1. Go to: https://console.cloud.google.com/
2. Sign in with **dronesurveycr@gmail.com**
3. Click **"Select a project"** → **"New Project"**
   - Project name: `DroneSurveyCR SEO`
   - Click **Create**
4. Make sure the new project is selected in the top dropdown

---

## Part 2: Enable the APIs

In Google Cloud Console with your project selected:

1. Go to **APIs & Services → Library**
2. Search for and enable each of these:
   - **Google Search Console API** → Enable
   - **Google Analytics Data API** → Enable

---

## Part 3: Create a Service Account

A service account lets the automated tasks query your data without needing you to log in each time.

1. Go to **APIs & Services → Credentials**
2. Click **+ Create Credentials → Service Account**
   - Name: `dronesurveycr-seo-bot`
   - Service account ID: `dronesurveycr-seo-bot` (auto-fills)
   - Click **Create and Continue**
   - Role: skip (click Continue)
   - Click **Done**
3. Click on the service account you just created
4. Go to the **Keys** tab → **Add Key → Create new key → JSON**
5. A `.json` file downloads automatically — **save it as:**
   ```
   C:\Users\nicki\Desktop\Master websites\Drone Survey CR Copy 2026\seo-strategy\service-account-key.json
   ```
   ⚠️ Keep this file private — do not commit it to GitHub

---

## Part 4: Grant GSC Access to the Service Account

1. Open Google Search Console: https://search.google.com/search-console/
2. Select **dronesurveycr.com**
3. Go to **Settings → Users and permissions**
4. Click **Add user**
   - Email: copy the service account email from step 3 (looks like `dronesurveycr-seo-bot@[project-id].iam.gserviceaccount.com`)
   - Permission: **Full**
   - Click **Add**

---

## Part 5: Grant GA4 Access to the Service Account

1. Open Google Analytics: https://analytics.google.com/
2. Select **Drone Survey CR** property
3. Go to **Admin → Property Access Management**
4. Click **+** (Add users)
   - Email: same service account email as above
   - Role: **Viewer**
   - Click **Add**

---

## Part 6: Add Key Path to SEO Config

Once you have the service account key file saved, create this config file so the automated tasks can find it:

Create/update: `/sessions/friendly-jolly-wright/mnt/Drone Survey CR Copy 2026/seo-strategy/seo-config.json`

```json
{
  "site_url": "https://www.dronesurveycr.com/",
  "ga4_property_id": "properties/[YOUR_GA4_PROPERTY_ID]",
  "service_account_key_path": "C:\\Users\\nicki\\Desktop\\Master websites\\Drone Survey CR Copy 2026\\seo-strategy\\service-account-key.json",
  "target_keywords": [
    "drone survey Costa Rica",
    "lidar mapping Costa Rica",
    "drone survey San José Costa Rica",
    "topographic survey Costa Rica",
    "photogrammetry Costa Rica",
    "GPS geopositioning Costa Rica",
    "construction drone survey Costa Rica",
    "drone survey Guanacaste"
  ]
}
```

**To find your GA4 Property ID:**
1. Google Analytics → Admin → Property Settings
2. Look for "Property ID" — it's a number like `123456789`
3. Replace `[YOUR_GA4_PROPERTY_ID]` with that number in the config above

---

## Part 7: Test the Connection (Optional but Recommended)

Once the key file is saved and the config is updated, open a new Cowork session and ask:

> "Test my GSC and GA4 API connections using the service account key at the path in seo-strategy/seo-config.json and show me the top 10 queries from Search Console for the last 30 days."

This will confirm everything is working before the next Monday SEO monitor runs.

---

## What the Automated System Can Do With API Access

### Weekly SEO Monitor (Mondays)
**Without API access (current):** estimated rankings from search results, no click data
**With API access:**
- Exact impression and click counts per keyword from GSC
- Average position for every tracked keyword
- Pages with declining impressions (detect ranking drops early)
- Top new queries you're appearing for (discover new opportunities)
- GA4 sessions, bounce rate, and conversions from organic traffic
- Which blog posts drive the most quote form submissions

### Tuesday/Friday Blog Tasks
**With API access:**
- Choose next blog topic based on keywords you already rank 4-10 for (quick wins)
- Prioritize topics based on actual search volume, not estimates
- Track whether new articles gain impressions within 2-4 weeks of publishing

---

## Security Notes

- The `service-account-key.json` file is already in `.gitignore` (verify this if needed)
- The service account has read-only access to GSC and GA4 — it cannot make changes
- If the key is ever compromised, go to Google Cloud → IAM → Service Accounts and delete/regenerate it

---

*Setup guide created: April 2026*
