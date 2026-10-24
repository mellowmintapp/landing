# Closet Flow: Feature Overview

Closet Flow is a wardrobe app for iOS and Android. Users photograph and catalog their clothing, then use that catalog to plan outfits for different occasions and weather. The app works offline and syncs to the cloud when the user is signed in.

## Purpose

Help people see what they already own, get more use out of their wardrobe, and decide what to wear faster.

## Target User

People who want to organize their clothes, avoid forgotten items, and plan outfits for work, events, travel, and everyday life.

## Feature Summary

| Area | What it does |
|------|--------------|
| Onboarding | Five-step introduction to the app's core flows |
| Closet catalog | Add clothing with photos and details (brand, category, color, size, price) |
| Brands and categories | Browse the closet by brand and category |
| Search | Keyword search across categories, brands, and articles |
| Occasion tagging | Tags items and outfits by occasion; AI-assisted tagging on Pro |
| Outfit generation | Suggests outfits from the closet by occasion and weather |
| Saved outfits | Save, view, and filter outfits by color and occasion |
| Weather | Uses the current location and weather to guide suggestions |
| Product import | Pulls product details from supported retailer links |
| Hidden items | Hides items from the closet and from outfit suggestions |
| Cloud sync and sign-in | Email or Google sign-in; real-time sync across devices (free for all signed-in users) |
| Plans | Free: up to 50 items. Pro: unlimited items and AI occasion tagging |
| Help center | In-app guides for the main flows |
| Account deletion | Users can delete their account from within the app |

## Detailed Features

### 1. Onboarding
A five-step introduction: Welcome, Add Your Clothing, Organize By Category & Brand, Plan Perfect Outfits, and Find What You Need.

### 2. Closet Catalog
- Users add clothing items with camera or photo library images.
- Each item can include brand, category, color, size, and price.
- Items can be hidden. Hidden items are excluded from outfit suggestions.

### 3. Brands and Categories
- A Brands tab lists brands in the closet, with a detail view for each brand.
- Items are organized by category.

### 4. Search
- A Search tab with a type selector: Categories, Brands, or Articles.
- Search matches keywords only. Filtering and sorting are not available.
- Saved outfits can be filtered by color and occasion.

### 5. Occasion Tagging
- Occasions: work, formal, casual, travel, seasonal, festive, sport, party, social, and none. Each has sub-occasions (for example, "Client Meeting" or "Black Tie").
- Tagging starts with offline keyword matching.
- An optional AI tier runs through a cloud function (Supabase Edge Function). It is only active when the function name is configured. Without it, the app returns no AI tags.
- AI occasion tagging is a Pro feature. Free users get offline tagging only.

### 6. Outfit Generation
- Suggestions are built with rules, not AI. Items are grouped into top, bottom, dress, shoe, and accessory slots.
- Neutral colors are treated as matching most other colors.
- Weather filters out unsuitable items. For example, shorts are excluded at 55°F or below.
- The app warns the user when core pieces are missing from the closet.
- Composite outfit images are generated and cached in cloud storage.

### 7. Saved Outfits
- Users can save outfits, view them, and filter them by color and occasion.
- Outfits that contain hidden items are excluded.
- Outfit changes sync in real time.

### 8. Weather
- The app requests location permission (when in use). It then fetches current conditions through a Supabase edge function, which keeps the weather API key on the server. Each user is limited to 60 weather requests per hour.
- Weather is cached on the device for offline use.

### 9. Product Import
- Users can import product details from Amazon, ASOS, and H&M links.

### 10. Sign-In, Sync, and Offline Use
- Email and Google sign-in.
- Data is stored locally, so the app works offline.
- Signed-in data syncs to the cloud. Brands, categories, articles, and outfits sync in real time. Sync is free for all signed-in users.

### 11. Help Center
In-app help covers: adding clothes, organizing categories, creating outfits, searching, and managing brands.

## Plans

| | Free | Pro |
|---|------|-----|
| Clothing items | Up to 50 | Unlimited |
| Offline occasion tagging | Yes | Yes |
| AI occasion tagging | No | Yes |
| Outfit suggestions, weather, saved outfits | Yes | Yes |
| Multi-device sync | Yes | Yes |
| Price | Free | $4.99/month or $29.99/year |

Free accounts keep all existing items if they go over the limit. Only new adds are blocked until the user upgrades.

## Navigation

Bottom tabs: Home, Search, Add, Brands, Profile. Articles, Outfits, and Categories are opened from the Home screen.

## Technology

- React Native with Expo
- Local database: SQLite with Drizzle ORM
- Backend: Supabase (authentication, Postgres, storage, real-time, and edge functions)

## Permissions

- Camera and photo library: adding clothing photos
- Location: weather-based suggestions (only while the app is in use)

## Known Gaps and Notes

- Outfit suggestions are rule-based. AI is only used for optional occasion tagging, which is a Pro feature.
- Search is keyword-only. There are no filters or sort options.
- The app does not include an outfit planning calendar or a style inspiration feed.
- Composite outfit images are not limited by plan.
- Pro gating for AI occasion tagging is enforced in the app. The occasion-inference function must also check entitlements on the server.
