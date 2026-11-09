# MellowMint Apps

A portfolio website showcasing mobile applications developed by MellowMint Apps. This site is built using Jekyll with the Creative Theme template.

## About

MellowMint Apps develops innovative mobile applications for iOS and Android platforms. Our current apps include:

### Memory by Seasons
A memory board game where you flip tiles to match the correct ones, season by season.
- Easy seasonal tile matching
- Seasonal themes and scoring
- Score tracking

### Closet Flow
See what you own, build looks you love, and keep your favorites within reach.
- Free: 50 active clothing items, 5 saved outfits, outfit building, search, favorites, and signed-in cloud sync
- Photo-led browsing by category and brand, outfit wear logging, rediscovery, and wardrobe insights
- Daily or weekly outfit reminders, with customizable times
- Pro: unlimited clothing items and saved outfits, weather-aware suggestions, occasion ideas, and morning/evening reminders
- Pro remains $4.99/month or $29.99/year; the store purchase screen confirms final pricing and any trial eligibility

### Closet Flow promotional screenshots

Each app has a dedicated promotional page: [Closet Flow](./closet-flow.html), [Memory by Seasons](./memory-by-seasons.html), and [Fun with Crosswords](./fun-with-crosswords.html). Homepage Learn More links point to these pages; the public Closet Flow feature overview does too. Old app-specific `apps.html#...` links redirect to the corresponding page when JavaScript is available. The all-apps catalog remains available at [apps.html](./apps.html). Dedicated pages and the catalog reuse app details, gallery styles, and lightbox includes so features, store availability, and media stay consistent.

The homepage's two Closet Flow cards and the app catalog use current, authentic app screens. The eight-screen catalog and its captions are maintained in [_data/closet_flow.yml](./_data/closet_flow.yml); the lightbox reads the rendered catalog, so its order cannot drift from the carousel.

Optimized WebP copies live in [img/portfolio/closet-flow/current/](./img/portfolio/closet-flow/current/). Original user attachments are unchanged. Do not publish screenshots with personal names/avatars, developer plan controls, sync failures, or active keyboards. Location text in outfit previews is permitted. Larger example collections use Pro and are labeled as such; captions distinguish a feature's Free allowance from the sample account's plan.

Keep the other MellowMint apps intact. Do not advertise universal product-link imports, live notification forecasts, guaranteed trials, or store downloads before availability is verified.

### Promotional videos

Two caption-led, approximately 30-second H.264 MP4s with gentle original instrumental music are available in [videos/closet-flow/](./videos/closet-flow/):
- [Vertical, 1080 x 1920](./videos/closet-flow/closet-flow-vertical.mp4) for social posts
- [Landscape, 1920 x 1080](./videos/closet-flow/closet-flow-landscape.mp4) for the website or video platforms

The catalog and dedicated page embed the landscape version with controls and a lightweight poster. It does not autoplay or preload the video. Captions are drawn into the video, and the adjacent text provides a readable summary. The soundtrack is an original, synthesized piano-style arrangement with a gentle pulse, not a sampled recording or licensed song. There is no voiceover or claim of store availability. Narration is deferred; music and mute/volume controls are available now.

The editable source is [docs/closet-flow/promo.html](./docs/closet-flow/promo.html) and [promo.js](./docs/closet-flow/promo.js), excluded from the public Jekyll build. To regenerate:
1. Serve the repository root locally (for example, `python3 -m http.server 4177 --bind 127.0.0.1`).
2. Open `http://127.0.0.1:4177/docs/closet-flow/promo.html` in a Chromium browser supporting H.264 `avc3` MediaRecorder.
3. Run `await recordPromotion('vertical')` or `await recordPromotion('landscape')` in the browser console, or through Playwright's `page.evaluate`. Keep the page foregrounded for the entire recording.
4. Generate the original soundtrack with Node: `node docs/closet-flow/promo-music.mjs /tmp/closet-flow-music.wav` (use a new output path). Encode the reusable audio: `ffmpeg -i /tmp/closet-flow-music.wav -c:a aac -b:a 160k -ar 48000 videos/closet-flow/closet-flow-music.m4a`.
5. Optimize each captured MP4 and add music before publishing: `ffmpeg -i captured.mp4 -i videos/closet-flow/closet-flow-music.m4a -map 0:v:0 -map 1:a:0 -c:v libx264 -crf 20 -preset fast -pix_fmt yuv420p -c:a copy -movflags +faststart published.mp4`. This converts the fragmented browser capture to a broadly compatible MP4 with complete duration metadata available immediately. For already optimized videos, use `-c:v copy` instead of re-encoding; preserve the full final video frame rather than trimming to the audio duration.
6. Save the optimized MP4 and downloaded WebP poster to the video folder. Run formats sequentially, not concurrently. Remove the temporary WAV after exporting. Keep the reusable music asset for future regenerations.

The renderer checks duration and dimensions before exporting. The published versions were captured using Playwright, optimized with FFmpeg, and checked by full decode and browser frame sampling. Verify all six scenes, including the final frame, after regenerating; a successful capture alone does not prove a playable export.

Scene transitions fade between screenshots, but the closing Free/Pro message stays visible through the final frame so playback ends on the call to action rather than an empty background.

### Visual design

[css/refresh.css](./css/refresh.css) coordinates the mint/cream/purple theme, shared navigation/footer, responsive app cards, accessible focus outlines, and reduced-motion styles. Homepage-specific hero content does not repeat above every app or policy page. The original Bootstrap layout and each app's identity and links are preserved.

Homepage app cards use a three-column grid on desktop and a single column below 992px, with a consistent 24px gap. They do not use entrance scaling or hidden-on-scroll animations, which can leave large blank spaces when animation scripts are unavailable or motion is reduced.

The app catalog uses a 32px gap. On wide screens, Memory by Seasons and Fun with Crosswords stack in the left column while the longer Closet Flow card occupies the right; Crosswords does not wait for Closet Flow to end. Below 1200px the original app reading order is preserved in a single column.

Closet Flow's gallery advances every seven seconds with a Pause/Resume control. Hover, keyboard focus, an open lightbox, or a hidden page temporarily pauses it; reduced-motion preferences disable auto-play while keeping manual arrows available. [js/closet-carousel.js](./js/closet-carousel.js) initializes this behavior after Bootstrap loads.

### Fun with Crosswords
A crossword puzzle app.

## App-specific policies

The root [Privacy directory](./privacy.html) and [Terms directory](./terms.html) serve the entire MellowMint portfolio. They link to the [Closet Flow Privacy Policy](./closet-flow-privacy.html) and [Closet Flow Terms](./closet-flow-terms.html); Closet Flow's features and subscription terms must not be applied to other apps.

Separate policies for Memory by Seasons and Fun with Crosswords still need verified app-specific disclosures before publication. Do not infer their data practices from Closet Flow. Review legal drafts before publishing, deploy the new pages, and update Closet Flow's store policy URLs to the app-specific pages.

Closet Flow's Privacy and Terms pages share the `app-policy` layout with a 900px maximum width and 20px side padding. Their section headings are unnumbered, and privacy list markers are inset for readable mobile spacing. The public [feature overview](./docs/closet-flow/FEATURES.md) covers customer features and plan limits, not internal testing or release notes.

## Setup and Installation

This site is built with Jekyll. To run locally:

1. Install Jekyll and Bundler:
   ```bash
   gem install jekyll bundler
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Serve the site locally:
   ```bash
   bundle exec jekyll serve
   ```

4. Open your browser to `http://localhost:4000`

## Configuration

- Add your site information in `_config.yml`
- Customize layouts in `_layouts/front.html`
- Update content in the respective HTML files

## Links

- [Website](https://mellowmintapp.com/)
- [Twitter](https://twitter.com/mellowmintapp)
- [GitHub](https://github.com/mellowmintapp)
