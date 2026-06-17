# EP19: Gaussian Splatting & Drone Mapping in Costa Rica — The New Way to "Walk" a Property in 3D

**Source Material:**
Blog Post: https://www.dronesurveycr.com/blog/gaussian-splatting-drone-costa-rica.html

---

## How to Use This Brief with NotebookLM

**Option 1 — URL source (fastest):**
Paste this URL into NotebookLM as a source:
`https://www.dronesurveycr.com/blog/gaussian-splatting-drone-costa-rica.html`
Then click **Audio Overview** → **Generate**.

**Option 2 — Paste the brief:**
Copy everything in the SOURCE MATERIAL section below and paste it into NotebookLM as a text source. Then click **Audio Overview** → **Generate**.

---

## SOURCE MATERIAL (Conversational Podcast-Ready Tone)

Here's a problem every land deal in Costa Rica runs into. A buyer in Toronto or Munich is looking at a jungle lot with an ocean view that they will probably never stand on before they make an offer. What do they get to look at? A flat drone photo, maybe a dry cloud of measured survey points. Neither one tells them what it actually feels like to be on that land — the slope underfoot, how the trees frame the view, where the light falls. And that gap, between "I've seen a photo" and "I've walked the property," is exactly what a brand-new technique called Gaussian splatting closes. Today we're getting into what it is, where it genuinely helps in Costa Rica, and just as importantly, what it is not for.

So let's start with the obvious question: what is Gaussian splatting? In plain English, it's a way of turning ordinary drone photos or video into a smooth, photorealistic 3D scene you can fly through in your web browser, in real time, as if you were standing on the land. The technical name is 3D Gaussian splatting, often shortened to 3DGS. Here's the clever part. Instead of building a hard 3D surface — a mesh, the way photogrammetry does — it represents the whole scene as millions of tiny, soft, colored blobs. They're literally called "splats." Each one has a position, a color, and a transparency. Render them all together and you get this strikingly lifelike recreation of a real place: the reflections, the foliage, the fine texture and depth that traditional 3D models really struggle with. And because the format is light and works well with graphics chips, the scene loads fast and you can pan, orbit, and zoom through it on a normal laptop or even a phone.

What's wild is how fast this went mainstream. The technique was only published as research in 2023, and it went from academic curiosity to practical tool remarkably quickly. By 2026 it's firmly in the mapping world — in May 2026, SimActive added Gaussian splatting to its Correlator3D photogrammetry software. And that's a real signal: when mainstream surveying software bakes it in, the industry is treating it as a standard output, not a novelty.

Now here's the single most important thing to understand, because it determines when splatting helps and when it absolutely doesn't. LiDAR, photogrammetry, and Gaussian splatting answer completely different questions. LiDAR gives you a measurable 3D point cloud and it can see the bare ground under forest canopy — that's your survey-grade terrain, contours, dense jungle work. Photogrammetry gives you a measurable orthophoto, 3D model, and elevation data from photos — great for open terrain, volumes, area. And Gaussian splatting? It gives you a photorealistic, explorable visualization — but it is not measurable. It's for showing a place as it truly looks: marketing, walkthroughs, stakeholder review.

Let me put that in one line, because it's the line to remember: LiDAR and photogrammetry are for measuring; Gaussian splatting is for seeing. If you need to know how many cubic meters of fill a site needs, or exactly where the legal boundary runs, that's a job for LiDAR or photogrammetry. If you want a client on another continent to feel like they're standing on the lot, that's where a splat shines. And the beautiful thing is they pair naturally — the same drone flight can feed both.

So where does this actually matter in Costa Rica? Honestly, the country is almost a perfect showcase for it, because so much of its value is visual and so many buyers are remote. Start with real estate sold sight-unseen. A huge share of land here gets bought by overseas buyers who never visit before making an offer. A flat photo or a dry point cloud does not convey a jungle, ocean-view lot. But an explorable splat lets a buyer move through the property — see the slope, the tree cover, the actual view — and build real confidence before they wire money. Then there's tourism and hospitality: hotels, eco-lodges, rental villas giving guests an immersive 3D preview of the grounds, the beach access, the canopy setting — far more convincing than a photo gallery. There's construction and stakeholder review, where a photorealistic capture at each phase lets owners, architects, and investors walk the project remotely and discuss it from the exact same view, without everyone flying in. And there's heritage, conservation, and inspection — capturing a structure or a reserve exactly as it looked on a given day, so remote review is easy.

Now the honest part, and this is where DroneSurveyCR draws a hard line, because being straight about the limits is what makes the technology genuinely useful instead of hype. A splat is a visualization, not a measurement. It is not georeferenced survey data, the geometry is not certified to centimeter accuracy, and you cannot pull legal dimensions out of it. And in Costa Rica specifically — this matters — it cannot produce or replace a registered plano catastrado. That still has to be prepared and stamped by a licensed topógrafo, registered with the CFIA, and the underlying measurement still comes from RTK GPS, photogrammetry, or LiDAR. The right way to think about a splat is the beautiful, walkable presentation layer that sits on top of real survey work — not the survey itself.

How is one actually made? It rides on the same capture we already do. The drone flies a thorough, overlapping pattern around the subject — more angles than a normal mapping flight, including obliques. Then software runs structure-from-motion to figure out where each photo was taken. And finally the scene gets "trained" into a Gaussian splat using tools like Postshot, Luma, or the open-source gsplat ecosystem — and increasingly right inside mainstream survey software like Correlator3D. The output is a single scene file that opens in a browser viewer, ready to embed on a listing page or just share by link. And because it reuses the drone flight, a splat can often be produced from the very same mission that gathers your topographic survey data — so you get the measurable maps and the walkable scene from one visit.

So where does DroneSurveyCR stand on all this? They're watching it closely and testing it as the tooling matures, because it's arguably the most exciting thing to happen to drone visualization in years — and almost nobody in the Costa Rica survey market is even talking about it yet. Today the core deliverables remain survey-grade: LiDAR, photogrammetry, GPS geopositioning, and topographic mapping, with centimeter accuracy since 2017. But if you've got a project where a photorealistic, explorable 3D scene would help — a remote-buyer listing, a lodge, a development you want investors to walk — that's a conversation worth having.

So if you're selling land to buyers who can't visit, or marketing a lodge, or you just want both a survey-grade map and a walkable 3D scene from a single flight, head to dronesurveycr.com/quote for a free same-day estimate, or drop us a pin on WhatsApp and we'll tell you honestly what's possible today and where this is all heading.

---

## NOTES FOR NOTEBOOKLM

**Target Format:** 2-host conversational podcast, 10–15 minutes

**Host Dynamic:** One host is curious-but-skeptical — they've heard "Gaussian splatting" thrown around as the latest tech buzzword and wants to know if it's real or hype, and whether it replaces the surveys they already understand. The second host is the drone specialist who explains it in plain English, gets genuinely excited about the Costa Rica use cases, but is refreshingly honest about the limits. Build "oh, so it's for SEEING, not measuring" as the key aha moment.

**Key Talking Points to Hit:**
- Opening hook: the remote buyer who'll never stand on the land before making an offer — a photo isn't enough
- What Gaussian splatting is in plain English: drone photos → photorealistic 3D scene you fly through in a browser; "splats" = millions of soft colored blobs
- How fast it arrived: research in 2023 → mainstream survey software (SimActive Correlator3D) by May 2026
- The core distinction: LiDAR & photogrammetry MEASURE; splatting lets you SEE — different jobs, they pair from one flight
- Costa Rica use cases: sight-unseen real estate, tourism/eco-lodges, construction stakeholder review, heritage & conservation
- The honest limits: a splat is a visualization, NOT measurement — not georeferenced, not centimeter-certified, cannot be a plano catastrado (needs a CFIA-stamped topógrafo + RTK/LiDAR/photogrammetry)
- How it's made: same drone flight, more oblique angles → structure-from-motion → trained into a splat (Postshot, Luma, gsplat, Correlator3D)
- One flight, two outputs: measurable maps + walkable scene
- Where DroneSurveyCR stands: testing it, excited, but core deliverables stay survey-grade LiDAR/photogrammetry/GPS/topo, centimeter-accurate since 2017
- Closing CTA: "Free same-day quote at dronesurveycr.com/quote, or WhatsApp us a pin"

**Podcast Style:** Open with the remote-buyer problem everyone in Costa Rica real estate recognizes. Keep the tech concrete and visual — lean on the "for seeing, not measuring" framing. Make the honesty about limits a feature, not a footnote — it builds trust. End with a clear, low-pressure CTA.
