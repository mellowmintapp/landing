# Closet Flow: Feature Overview

Closet Flow is a wardrobe app for iOS and Android. Users photograph and catalog their clothing, then use that catalog to plan outfits for different occasions and weather. The app works offline and syncs to the cloud when the user is signed in.

## Purpose

Help people see what they already own, get more use out of their wardrobe, and decide what to wear faster.

## Target User

People who want to organize their clothes, avoid forgotten items, and plan outfits for work, events, travel, and everyday life.

## Feature Summary

| Area | What it does |
|------|--------------|
| Onboarding | Six-step introduction to the app's core flows, ending with a Pro overview |
| Closet catalog | Add clothing with photos and details (brand, category, color, size, price) |
| Brands and categories | Browse the closet by brand and category |
| Search | Keyword search across categories, brands, and articles |
| Occasion tagging | Tags items and outfits by occasion from their names and categories, on-device |
| Outfit generation | Suggests outfits from the closet by occasion and weather |
| Saved outfits | Save, view, and filter outfits by color and occasion |
| Weather | Uses the current location and weather to guide suggestions |
| Outfit reminders | Optional local reminders to plan outfits: daily or weekly, with a Pro schedule |
| Product import | Pulls product details from supported retailer links |
| Hidden items | Hides items from the closet and from outfit suggestions |
| Cloud sync and sign-in | Email or Google sign-in; real-time sync across devices (free for all signed-in users) |
| Plans | Free: up to 50 items. Pro: unlimited items and today's occasion ideas from weather and your closet |
| Help center | In-app guides for the main flows |
| Account deletion | Users can delete their account from within the app |

## Detailed Features

The Pro screen uses a compact single-row header with Back beside the title, preserving safe-area spacing and leaving more room for plan details.

Empty favorite views use a high-contrast white card with a Clear filters action. Category grids reset their scroll position when filters change and avoid iOS native clipping that can leave restored items invisible. Empty grids do not show an end-of-list footer.

Article browsers, including All Items, have the same compact heart filter beside search. It combines with category/season scope, keyword, color, and occasion filters. Toggling it resets pagination and the list position; empty favorites offer Clear filters without requiring a network refresh.

Active heart filters show the number of matching favorites, including zero, within the existing toolbar. Counts reflect the current search and other filters and include all matching results, not just the loaded article page.

Article card stars refresh when their article identity or saved favorite flag changes, keeping recycled All Items cards and externally updated favorites consistent with the list filter.

### 1. Onboarding
A six-step introduction: Welcome, Add Your Clothing, Organize By Category & Brand, Plan Perfect Outfits, Find What You Need, and an upgrade step. The upgrade step has a "See Pro" action that opens the paywall. Users can skip it.

### 2. Closet Catalog
- Brands use compact, equal-height cards: two columns on phones and adaptive columns on tablets, with padded edges and gutters. The wardrobe background remains visible between the cards, while cards and search retain their own light surfaces. Contained logos, wrapping names, and explicit piece counts replace tall retailer biography cards. Empty brands say “No pieces yet.” Search, alphabet filtering, Add Brand, and long-press edit/favorite/delete remain available; empty filtered results offer Clear filters.
- Brand cards have visible heart and options controls above the logo, replacing passive indicators beside the title. Shadow-free 32px circles retain 44px touch targets. Favorite toggling and opening the existing edit/favorite/delete sheet do not navigate; tapping the card still browses its pieces. Long-press remains a shortcut and does not also navigate on release. Titles can use the full text width.
- Brands, main categories, and subcategory browsers have a compact heart filter in their existing search/season toolbar, without adding another row above the grid. Tap it to show favorites (filled purple); tap again to show all. Favorites combine with search, alphabet, and applicable seasonal filters; empty favorite results explain how to save favorites and offer Clear filters. Brand and category favorites are saved on-device before the UI changes, survive reloads, and are included in normal signed-in closet sync. Failed local saves display an error without changing the heart. Brand/category favorites organize browsing only: they do not automatically favorite their articles or influence outfit recommendations. Individual article favorites remain visible on the dashboard and help rank daily looks/accessories.
- “Suggested Categories” opens the starter-category selector, not the existing category grid. Users choose main categories and optional subcategories, or create a custom category. Saving creates the selected hierarchy locally and returns to the category grid; persistence failures keep setup open with explicit feedback.
- Starter-category setup uses the collection-style purple gradient header with a Home back action, compact custom-category link, selected-group count, and visible selection marks.
- Starter setup hides its scroll indicator while retaining normal scrolling. Main category cards show subcategory totals alongside article counts without requiring a tap or long press. Category cards retain their icons without duplicate orange count badges. Separate heart and options buttons use compact, shadow-free 32px circles with 44px touch targets for toggling favorites and opening edit/delete options without navigating into the category; long-press remains an options shortcut.
- Users add clothing items with camera or photo library images.
- Add to closet is a single photo-led screen: Camera and Photo library first, with product-link import as a secondary option. Picking a retailer does not automatically change entry modes. Name, category, confirmed garment colors, and at least one photo are required; brand, size, notes, and occasions are optional. Users can select multiple garment colors without photo extraction overwriting their choices. Occasion chips improve outfit suggestions and readiness insights.
- Photos of one new piece can be cropped/rotated, removed, or reordered by choosing a cover before saving. “Add another angle” adds photos to that same piece, not separate articles. “Save & add another” saves one piece and resets its photos, name, colors, and occasions while keeping the current brand/category context.
- The Add screen matches the rounded purple gradient collection headers. Garment colors use a compact, horizontally scrollable swatch row with up to six suggestions plus selected colors; “More colors” exposes the full palette in the same row. Selected color names remain visible beneath it.
- The Add screen shows the Free allowance (50 active pieces) or Pro unlimited status, checks limits before capture and again at save, and asks for camera/library permissions only when needed. Drafts are account-specific on the device, with explicit Resume draft / Start fresh choices and storage-failure feedback. Legacy unassigned drafts are not automatically loaded into a signed-in account. Closing the screen flushes the current draft before navigating away.
- The dashboard's “Ready for your plans” shows the strongest occasion groups, checks for complete core outfit pieces, and opens Style for the chosen occasion. “Unlock more looks” highlights missing outfit slots and offers review, build, and add actions without assuming users need to shop. “Your palette” uses tappable garment color circles and neutral pairing ideas; matching pieces open in a browsable list with article-detail links. Multi-color garments contribute once to each displayed color, and hidden/deleted items are excluded. These are wardrobe possibilities, not weather or dress-code guarantees.
- These three dashboard insight cards and their browsing actions are free. Build/save and add actions still respect the free allowances (5 saved outfits and 50 articles). One article counts as one piece regardless of photo count. Cards use short summaries, with readiness/count explanations under “View wardrobe insights.”
- Occasion insights use swipeable visual tiles with garment examples, readiness status, and a primary Build button. These thumbnails are wardrobe examples, not generated looks. Missing-piece hints use a dashed slot beside garment examples, and palette pairing actions show the two color circles together.
- Garment examples rotate by local calendar day, staying stable across same-day app reopening and closet reordering. Returning from the background refreshes the day without a live slideshow. Rotation needs alternative garments; small closets may show the same pieces. Adding, removing, or changing garments can update the examples immediately.
- Article details mount photo references immediately while full photo hydration continues in the background. Each photo reuses the shared memory/local image cache and shows loading or unavailable feedback instead of a blank hero; zoom preserves the tapped photo when other images are still loading.
- In article details, Edit exposes Add photos, Replace photo (camera or library), Crop / rotate, and Make cover. Cropping offers original, square, portrait, and landscape shapes, tighter framing, and a draggable crop box with accessible position controls. Photo changes save immediately, independently of metadata Save/Cancel; cancelling the crop editor keeps the original unchanged. Replacements use new storage keys to avoid stale cached images. The selected cover is stored first and survives reload/sync; changing photos does not change garment counts or automatically replace saved garment colors. Uploading new/replacement photos requires a connection.
- Category card covers rotate daily by local calendar day, using one primary photo per visible garment within the active season. Covers stay stable on same-day reopening and refresh on next-day resume; categories with one eligible garment keep that garment. Category titles, ordering, and counts do not rotate. Empty seasonal categories use stock imagery.
- Each item can include brand, category, color, size, and price.
- Item details scroll as one page, including the large photo header. Photos show a count and swipe/zoom guidance; full category names wrap, and garment colors include readable names.
- Back and Edit/Save/Cancel float above the photos and details and remain visible while scrolling, without a toolbar background. The space between buttons still allows photo and scroll gestures. In Edit, Size uses a dropdown indicator and a "Tap to change size" hint.
- Brand, Category, Size, and Color have consistent "Tap to change" hints in Edit. Tapping opens a picker; Save Changes persists the edited values.
- Production builds disable Developer plan testing. The separate EAS `testflight` profile explicitly enables local Free/Pro overrides for testers; do not promote that binary to public release. Dashboard paid-feature enforcement stays enabled independently of developer testing. Overrides do not create purchases or change cloud account entitlements.
- Article capture and save limits respect the same local plan-testing override as the Pro screen: testing Pro allows unlimited articles and testing Free enforces 50 active articles. With testing disabled or no override, purchase entitlements apply.
- Signed-in closet initialization runs in the persistent app layout, even when a new account is redirected to onboarding. Onboarding remains usable while data loads; failed closet initialization shows a Retry action rather than an indefinite loading screen.
- Back from item details restores the existing list screen and its browsing state instead of replacing it and repeating initial category/article loading. Direct links without a previous screen still use the appropriate destination fallback.
- Completing photo entry or product import dismisses the Add flow to the saved piece's category list, removing the completed entry screen from back history. “Save & add another” intentionally keeps entry open.
- Suggest Occasions uses the current, unsaved name, description, and category. Suggestions run offline from text/category rules; already selected matches are explained rather than treated as a failure. New tags are applied to the edit state and persist with Save Changes.
- Refresh colors updates the detected photo palette without replacing the selected garment colors. Choose garment color opens Edit, where users select multiple detected colors (tap again to remove) and save the combination with Save Changes. Photo colors may include backgrounds or skin tones.
- Tapping Color in the item editor opens the same multi-select choices, including saved colors for removal. It does not substitute a generic single-color grid while photo extraction is loading. Done returns to editing; Save Changes persists the combination.
- Photo color suggestions compare all distinct item images, favor garment-centered regions, merge nearby shades, and rank colors recurring across angles above one-photo colors. White/black fabric colors are retained, and ordinary RGB colors are not labeled metallic. This is a spatial/recurrence heuristic, not garment segmentation; backgrounds or other clothing can still need manual deselection.
- Color extraction uses actual photos, including cached base64 images. If extraction is unavailable, the screen reports it rather than inventing a palette. Fresh suggestions replace old detected choices; saved garment colors remain unchanged until explicitly saved.
- Item details reuse saved photo palettes and already hydrated photos instead of decoding and loading them again on every visit. Refresh colors explicitly recomputes saved palettes; items without a palette still generate initial suggestions. Carousel photo URIs are memoized so editing metadata does not rebuild large base64 sources.
- Article metadata saves execute asynchronously in SQLite and retry transient database locks with bounded, yielding delays. Persistent save failures preserve edits and explicitly report that the local save failed. Detail photo reads are asynchronous, and startup does not force a journal-mode switch on an in-use database. Startup failures show a plain-language message with Retry while technical details stay in logs.
- Dark chromatic colors retain their hue labels (for example, navy rather than black), and dark-color merging distinguishes tinted fabric from neutral shadows. Swatches keep the extracted hex value; labels do not recolor the photo evidence.
- Article-list cards display the saved garment-color combination, including multiple colors, rather than additional unconfirmed detected palettes. Color edits appear on cards after saving.
- Read-only item details hide empty or title-identical descriptions without deleting them. Edit keeps the original description available and suggests adding fit, fabric, care, or waterproofing notes.
- Items can be hidden. Hidden items are excluded from outfit suggestions.

### 3. Brands and Categories
- Article cards place size and garment colors in a separate row below the title. Delete uses its own 44px action row below occasion tags so it cannot overlap them. Article detail photos extend behind the Android status bar, while Back and Edit retain safe-area positioning.
- Article deletion confirmations use a compact image preview, neutral text, an explicit size label, and a muted red destructive action. They preview the same resolved image list as the article card, with alternate paths available if the first image cannot load. Deletion is blocked for pieces referenced by active saved outfits in the local database; users must remove or replace them in those outfits first. Outfit verification failures also block deletion. Outfit checks and local deletion use asynchronous SQLite operations, with visible progress feedback. The deletion action rechecks usage and the dialog closes after the local tombstone is saved, preserving the current list and removing the piece from article caches without reloading the whole list. Cloud sync, image cleanup, and brand-count refresh continue in the background.
- A Brands tab lists brands in the closet, with a detail view for each brand.
- Items are organized by category.
- Add Brand has a persistent “Find a brand” / “Enter manually” mode selector above the name field, with icons, large tap targets, a purple active state, and accessible selected-state announcements. Short instructions explain catalog lookup versus manual entry; switching preserves the typed name. Catalog search can fill in details; manual entry requires only a name. Lookup failures are shown explicitly, and older lookup responses cannot replace newer selections.
- Brand text entry updates immediately; catalog lookups wait 300ms after typing stops and require at least two characters. Superseded requests are cancelled. Switching from manual entry to “Find a brand” retains the name and confirms before discarding custom website or description edits. Tapping the already active mode does not reset the form.
- Lazy article photos show “Loading photo...” with a progress indicator while resolving the file and until the native image loads. Missing photos say “No photo”; resolution or rendering failures say “Photo unavailable” rather than displaying an unexplained gray space. Alternate image paths and existing retry behavior are preserved.
- Add Brand warns when a matching brand is already loaded in the closet and rechecks active brands for the same user in the local database before insertion. Names are compared without case or spacing differences (with Unicode compatibility normalization); catalog IDs also identify matches. The check and insert share an exclusive transaction, and failed inserts cannot report success. Deleted brands do not block new entries. This is local protection, not a server-wide uniqueness guarantee across devices with unsynced changes.
- Brand and category entry forms use compact spacing and extra bottom clearance for their actions. Category names are required; descriptions are optional. Category artwork is labeled “Icon,” and the default-size picker explains its use for new articles while preserving subcategory inheritance.
- Shared size pickers show one empty option when the form supplies “No default size.” Android picker height accommodates native text and font scaling rather than clipping it in a 40px field; iOS retains Cancel/Done selection behavior.
- Back and Cancel confirm before discarding entered brand or category information; Android hardware Back uses the same confirmation while the form is focused. This confirmation does not cover switching tabs. Saving only reports success after the create action completes.
- Main Categories has a Home button returning to the dashboard. Category detail screens have a Back button: the subcategory browser returns to Main Categories, and subcategory articles return to their parent category.
- The subcategory browser keeps search and a short active-view summary visible. View options expands the compact seasonal switch and Subcategories/All Articles controls; collapsing it keeps the selected settings and frees space for category cards.

### 4. Search
- A Search tab with a type selector: Categories, Brands, or Articles.
- Search result rows have consistent gaps and two-line names. Article results show available size, brand, and category instead of retailer descriptions; brands show piece counts. Starting suggestions use compact single-line rows with full accessible names. The result count appears only above the list, not duplicated in the header.
- A compact collection-style header and equal-width accessible tabs keep search controls near the top. The query stays when switching types. Search trims surrounding whitespace and matches names/descriptions after a 250ms debounce; a one-character query explains the two-character minimum.
- Before typing, up to five unique names from the selected closet collection appear as tappable suggestions. The keyboard opens when the input is tapped rather than automatically. An explicit clear button works on both Android and iOS; no-match results offer a reset action. Results show a count and remain tappable while the keyboard is open.
- Search matches keywords only. Filtering and sorting are not available.
- Saved outfits can be filtered by color and occasion.

### 5. Occasion Tagging
- Occasions: work, formal, casual, travel, seasonal, festive, sport, party, social, and none. Each has sub-occasions (for example, "Client Meeting" or "Black Tie").
- Tagging starts with offline keyword matching.
- An optional AI tier runs through a cloud function (Supabase Edge Function). It is only active when the function name is configured. Without it, the app returns no AI tags.
- Today's occasion ideas are a Pro feature. Free users get offline keyword tagging and can see a locked teaser.

### 6. Outfit Generation
- Manual Build Look defaults to Staying Local. Users can generate after Style or continue to an optional destination. Each setup screen has one header title and a four-step progress bar, with compact Quick Look/daily shortcuts and expandable occasion ideas. Destination selection is a secondary action rather than a competing primary button.
- Destination loading follows actual request completion instead of a fixed countdown. Generation has a bounded timeout and explicit failure/exhaustion messages with Retry, Adjust choices, and Browse saved looks.
- Users can lock individual pieces so New Look retains them, or swap an unlocked piece for a visible, unused replacement in the same slot and selected wardrobe/weather context. Changes invalidate the old composite preview.
- The final look prioritizes the image preview, Save/New Look actions, and a compact editable context summary. Piece customization and Why This Works expand on demand to keep the result uncluttered.
- Piece customization shows thumbnails and separate “Keep in New Look” and “Change item” controls, with a visible kept-item status. Live and exported previews fit the entire canvas without cropping its branding or edge pieces.
- Occasion options use a compact single-scroll layout. The final builder uses inline loading progress instead of a gray blocking overlay, preserving an existing look during regeneration and saving. Replacement options show garment color circles, not raw color codes.
- Builder entry cards distinguish “Dress me for today” (Pro, weather/routine guidance and daily feedback/cache) from “Surprise me” (instant exploration without prior occasion, style, destination weather or daily cache). Surprise combinations are not repeated within the mounted builder session; unavailable fresh combinations show an explicit message. “Choose your own occasion” introduces the manual path.
- “Explore your closet” lists wardrobe possibilities, not predictions about plans: each occasion needs visible, weather-suitable shoes plus a dress or compatible top/bottom. Selecting one clears old style/daily context and opens Style. Evening and gala styles remain manual choices; daily presets no longer infer date-night/formal plans from nighttime or reuse old formal daily suggestions.
- Why This Works presents plain-language pairing notes with icons: the outfit's core pieces, actual garment color names and circles, saved occasion preferences, and weather context when available. Partial matches are described honestly; internal tags and skipped-item counts are not shown. A practical customization tip helps users try alternatives. Tomorrow feedback is shown only for daily suggestions, not the manual builder.
- Free users see their saved-outfit allowance before Save. At the limit, the action offers Pro without capturing another preview; existing saved looks remain available.
- Hidden and deleted pieces never re-enter the candidate pool through filtering fallbacks.
- Suggestions are built with rules, not AI. Items are grouped into top, bottom, dress, shoe, and accessory slots.
- Neutral colors are treated as matching most other colors.
- Weather filters out unsuitable items. For example, shorts are excluded at 55°F or below.
- The app warns the user when core pieces are missing from the closet.
- Composite outfit images are generated and cached in cloud storage.

### 7. Saved Outfits
- Users can save outfits, view them, and filter them by color and occasion.
- Free accounts can build looks and save up to 5 active outfits; Pro has unlimited saved outfits. After Pro expires, existing outfits remain available to view, edit, wear, and delete. Only new saves are blocked at or above 5; deleting an outfit frees a slot. The local save boundary enforces the limit even when entering the builder directly.
- Successful Pro purchases or restores clear the local Developer plan testing override and return to Use account, so a forced Free test plan cannot mask the subscription. Canceled purchases and restores with no Pro entitlement keep the testing selection unchanged.
- The dashboard Suggest Outfit shortcut waits for subscription status to resolve before running its one-shot daily suggestion or opening the paywall. An unchecked subscription is not treated as a confirmed Free plan.
- Both dashboard entry points send Suggest Outfit directly to Your Look with today's defaults, while Build Look opens the Occasion step. Returning to the suggestion tab reruns the shortcut once per visit, even when the tab stays mounted.
- Today's weather outfit on the dashboard has a Save outfit action. It saves the exact displayed pieces, including shoes and layers, as a favorite with the current weather. Already-saved combinations show Saved instead of creating duplicates.
- Outfits that contain hidden items are excluded.
- Saved Outfits keeps search and a compact season switch visible. Insights (rediscovery and wear statistics) and View options (favorites, layout, and date jumps) are collapsed by default to leave more room for outfits.
- Outfit changes sync in real time.
- Saved outfit pieces are reattached when the closet finishes loading, including partially loaded looks. Pull-to-refresh checks server outfits. Card headers use compact icon actions for favorites, wear logging, and deletion.

### 8. Weather (Pro)
- Weather is a Pro feature. Pro users can see today's weather on the dashboard, get outfit suggestions and weather-matched picks, and get today's occasion ideas.
- The app requests location permission (when in use). It then fetches current conditions through a Supabase edge function, which keeps the weather API key on the server. Each user is limited to 60 weather requests per hour.
- Weather is cached on the device for offline use.

### 9. Product Import
- Users can import product details from Amazon, ASOS, and H&M links.

### 10. Sign-In, Sync, and Offline Use
- Email and Google sign-in.
- Data is stored locally, so the app works offline.
- Metadata-only article sync verifies existing remote photo objects without uploading their cached bytes again. New photos and missing remote objects still upload, and failures use the existing retry queue.
- Signed-in data syncs to the cloud. Brands, categories, articles, and outfits sync in real time. Sync is free for all signed-in users.
- A sync is not reported as fully successful while entity writes fail or local changes/retries remain pending. The banner identifies pending record types and displays the sync error; unsuccessful writes remain saved locally for retry. Local Developer plan testing does not alter the server entitlement or bypass the 50-item cloud insertion limit for Free accounts. Cloud Pro entitlement must come from RevenueCat, including properly configured sandbox testing.
- Native sign-in sessions are encrypted and saved across restarts. Temporary session lookup or refresh failures retain saved device access, with a retry message; online actions still require a valid token. Invalid or revoked sessions require sign-in again. Session-storage failures are propagated instead of silently appearing successful.

### 11. Outfit Reminders
- Reminders are off by default. Permission is requested only when users turn them on.
- Open Profile > Outfit reminders. The screen uses the selected app background and a compact header with Back and the title on one row below the status bar.
- Reminders are local notifications on the device. The app does not send them from a server.
- Free levels: "Weekly check-in" (one Sunday reminder) and "Daily" (one morning reminder, recommended).
- Pro level: "Active Stylist" (morning and evening reminders). Free users who have it selected are shown the Daily schedule, and the row shows a lock that opens the paywall.
- Tap the displayed time to choose any hour and minute using the native time picker. Active Stylist shows separate morning and evening time rows; both are customizable. Defaults are 8:00 AM and 6:00 PM. Existing selections are retained when upgrading from hour-only preferences, and evening selections are retained when switching to a single-reminder plan.
- Times use the device's local timezone. On iOS, Done saves the selected time and Cancel leaves it unchanged; Android saves when the native picker is confirmed.
- Changing reminders replaces only outfit reminders (including legacy outfit schedules), preserving unrelated and test notifications. The device's retained schedule is checked, and scheduling errors are shown explicitly.
- Foreground reminders request a banner, notification-center entry, and sound. The screen confirms the next native occurrence and offers a five-second test reminder. Saving after the selected minute has begun means the next daily occurrence is tomorrow; Sunday check-ins follow the next weekly occurrence. Focus, notification settings, and Android battery restrictions can still affect presentation or delivery.
- If notification permission is denied, the settings screen links to the system settings.

### 12. Help Center
In-app help covers: adding clothes, organizing categories, creating outfits, searching, and managing brands.
- Open Profile > Help & Guide to access the guides.
- Help & Guide, Outfit reminders, and Closet Flow Pro share the purple gradient, rounded header, icon, and Back button styling used by Brand and Search.
- To replay the walkthrough, select View Onboarding Again > View Now while signed in. This does not remove closet data.

## Plans

| | Free | Pro |
|---|------|-----|
| Clothing items | Up to 50 | Unlimited |
| Offline occasion tagging | Yes | Yes |
| Today's occasion ideas | No | Yes |
| Today's weather, daily outfit suggestions, weather-matched picks | No | Yes |
| Build looks and save outfits | Up to 5 saved outfits | Unlimited |
| Outfit reminders: weekly check-in and daily | Yes | Yes |
| Outfit reminders: Active Stylist (morning and evening) | No | Yes |
| Access existing outfits, dashboard insights | Yes | Yes |
| Multi-device sync | Yes | Yes |
| Price | Free | $4.99/month or $29.99/year, with a free trial |

Free accounts keep all existing items if they go over the limit. Only new adds are blocked until the user upgrades.

## Navigation

Bottom tabs: Home, Search, Add, Brands, Profile. Articles, Outfits, and Categories are opened from the Home screen.

The Add sheet uses a neutral surface, purple icons, and a secondary Cancel action. Add Article appears first. Add Subcategory opens a main-category picker within the sheet rather than being disabled without a selection; an empty closet offers main-category creation. Close, backdrop tap, and Android Back dismiss the sheet.

Profile also includes an App Background section with a current-image preview, a photo picker, and a reset-to-default action for custom images. Labels use dark text on the light profile card.

Profile opens with a compact photo/name/wardrobe summary followed by Settings & Support: subscription status, outfit reminders, and Help & Guide. Personal details are collapsed behind Edit personal details; expanding them retains entered values and reveals the Save action.

Privacy Policy and Terms of Service are available from Profile, Help, and the subscription screen. Defaults point to `https://mellowmintapp.com/closet-flow-privacy.html` and `https://mellowmintapp.com/closet-flow-terms.html`, with support at `mellowmint.app@gmail.com`; configured environment overrides remain supported. The website's root privacy and terms pages are multi-app directories, not Closet Flow policies for all MellowMint apps. Opening failures are logged and show a contact-page fallback. Review the terms legally, deploy the app-specific pages, and update store policy URLs before releasing these links.

Reminder messages use the visible, undeleted closet item count and favorite-item count. Empty closets receive a starter prompt. Morning reminders can include timestamped cached weather if it is no more than six hours old when the schedule refreshes; evening and weekly messages do not claim a forecast. Copy refreshes on app startup, foreground return, wardrobe changes, and reminder settings changes. Repeating local notifications retain their last scheduled copy while the app stays closed, so weather is explicitly described as a dated last check, not a live forecast. No new location permission, weather request, or server/push delivery is introduced.

Help & Guide and Third-Party Notices use the same compact, safe-area-aware gradient header as Outfit reminders, with Back and title on a single row.

Individual help topics use compact decorative illustrations, numbered step rows, and a consistent purple title. On phones, a native modal keeps app-level floating controls behind the guide, with a fixed 44-point close button and safe-area spacing; the body scrolls independently. Tablets share the same detail layout in a scrollable sidebar detail pane.

## Technology

- React Native with Expo
- Local database: SQLite with Drizzle ORM
- Backend: Supabase (authentication, Postgres, storage, real-time, and edge functions)

## Permissions

- Camera: permission is requested when taking clothing photos. Android library imports use the system photo picker, granting access only to selected images; the app does not request broad photo/video read access. This applies to clothing photos, profile photos, and custom backgrounds. iOS photo-library permission handling is unchanged.
- Android release builds block `READ_MEDIA_IMAGES`, `READ_MEDIA_VIDEO`, `READ_MEDIA_VISUAL_USER_SELECTED`, and `READ_EXTERNAL_STORAGE` in the merged manifest. A new Android binary is required; an already-uploaded bundle retains its old permissions and must be replaced in the relevant Play tracks.
- Location: weather-based suggestions (only while the app is in use)
- Notifications: optional outfit reminders (requested only when the user turns reminders on)

## Known Gaps and Notes

- Outfit suggestions are rule-based. AI is only used for optional occasion tagging, which is a Pro feature.
- Search is keyword-only. There are no filters or sort options.
- The app does not include an outfit planning calendar or a style inspiration feed.
- Reminders are local only. There are no server-sent push notifications, and reminders are not sent for other events.
- Reminder scheduling replaces only outfit reminders on each sync.
- Composite outfit images are not limited by plan.
- Pro gating for weather, daily outfit suggestions, weather-matched picks, and today's occasion ideas is enforced in the app through `DASHBOARD_PAID_FEATURES_ENABLED`. Basic outfit building is available to Free accounts with a five-outfit save limit. Developer plan testing overrides apply to both the UI and outfit saves, including opted-in TestFlight builds. Users who start the Pro free trial get the same access.
- The free trial length is set in the App Store and RevenueCat offering, not in the app code. The paywall shows the trial length from the store.
