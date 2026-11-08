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

The homepage's two Closet Flow cards and the app catalog use current, authentic app screens. The eight-screen catalog and its captions are maintained in [_data/closet_flow.yml](./_data/closet_flow.yml); the lightbox reads the rendered catalog, so its order cannot drift from the carousel.

Optimized WebP copies live in [img/portfolio/closet-flow/current/](./img/portfolio/closet-flow/current/). Original user attachments are unchanged. Do not publish screenshots with personal names/avatars, developer plan controls, sync failures, or active keyboards. Location text in outfit previews is permitted. Larger example collections use Pro and are labeled as such; captions distinguish a feature's Free allowance from the sample account's plan.

Keep the other MellowMint apps intact. Do not advertise universal product-link imports, live notification forecasts, guaranteed trials, or store downloads before availability is verified.

### Fun with Crosswords
A crossword puzzle app.

## App-specific policies

The root [Privacy directory](./privacy.html) and [Terms directory](./terms.html) serve the entire MellowMint portfolio. They link to the [Closet Flow Privacy Policy](./closet-flow-privacy.html) and [Closet Flow Terms](./closet-flow-terms.html); Closet Flow's features and subscription terms must not be applied to other apps.

Separate policies for Memory by Seasons and Fun with Crosswords still need verified app-specific disclosures before publication. Do not infer their data practices from Closet Flow. Review legal drafts before publishing, deploy the new pages, and update Closet Flow's store policy URLs to the app-specific pages.

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
