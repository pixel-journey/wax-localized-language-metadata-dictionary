# wax-localized-language-metadata-dictionary

**Localized Language Metadata Dictionary**

An asset translation layout that dynamically swaps out displayed attribute tags based on a user's local browser language configurations on WAX. Provides automatic, seamless localization for NFT metadata without any backend.

**Status:** 🔒 Private (In Development) | Target: Public when v1 complete  
**Category:** Web3 Web-Accessibility, Inclusive Design & Offline Fallbacks  
**Parent Catalog:** [pixel-journey/wax-ecosystem-blueprint-catalog](https://github.com/pixel-journey/wax-ecosystem-blueprint-catalog)

> Built to the same high standard of educational excellence, production readiness, and WAX best practices as the [gkniftyheads-tracker](https://github.com/henrikpiga/gkniftyheads-tracker).

---

## Quick Start

```bash
git clone https://github.com/pixel-journey/wax-localized-language-metadata-dictionary.git
cd wax-localized-language-metadata-dictionary
npm install
npm run dev
```

The demo shows NFT metadata automatically translated based on browser language. Change your browser language to see it update live.

---

## Why This Blueprint?

NFT metadata is often only available in English, limiting accessibility for global users. This tool automatically translates attribute tags and labels based on the user's browser language settings — making collections more inclusive without any backend or manual translation work.

---

## Architecture & Data Flow

```
Detect Browser Language
       ↓
Load Localized Dictionary
  - Attribute tag translations
  - Fallback to English
       ↓
Render Metadata with Localized Labels
  - Dynamic swapping of tags
  - Seamless user experience
  - No page reload needed
```

All localization is client-side.

---

## Complete Repository Structure

Follows Pixel Journey high standards.

Key parts:
- `app/` — Main metadata demo interface
- `components/` — LocalizedMetadata, LanguageDetector, TranslationDictionary, FallbackDisplay
- `hooks/` — useLocalizedMetadata, useLanguageDetection
- `lib/wax/` — metadata-translator.ts, dictionary-loader.ts, atomicassets-client.ts
- `public/mock-data/` — Sample NFT metadata with translations
- `.github/workflows/` — CI automation

Detailed comments on client-side localization and dictionary management.

---

## Key WAX Concepts Explained

- **NFT Metadata Localization**: Translating attribute tags and labels for global accessibility.
- **Browser Language Detection**: Using navigator.language to determine user preference.
- **Client-Side Dictionaries**: Storing translations locally for fast, offline-capable switching.
- **AtomicAssets Integration**: Fetching and displaying metadata with dynamic label swapping.

This is **WAX-primary** (AtomicAssets) but the localization pattern is useful for any metadata-driven Web3 interface.

---

## Design Specifications

- Clean metadata display with automatic language adaptation
- Clear fallback behavior for missing translations
- Responsive design
- Accessible controls and screen reader support

Aligned with Pixel Journey Design System.

---

## Technical Architecture & Best Practices

- **Stack**: Next.js 15, TypeScript, Tailwind + shadcn/ui
- **Data**: Client-side dictionary with efficient loading and switching
- **Performance**: Instant language updates with no backend calls
- **Demo Mode**: Full localized metadata demo with live language switching

See catalog standards for WAX best practices around internationalization and accessibility.

---

## Demo & Usage

- View sample NFT metadata in different languages
- Change browser language to see automatic updates
- Explore fallback behavior for missing translations
- Test with screen readers

Designed for immediate internationalization insight.

---

## Customization

- Add or edit translations in the dictionary
- Extend to more attributes or languages
- Integrate with other i18n or metadata tools in the catalog
- Customize display and output

---

## Roadmap

- v1: Core dynamic translation + demo
- v1.1: Advanced dictionary management and user overrides
- Future: Deeper integration with full i18n suite

---

## Contributing & Credits

Built with care for global, inclusive NFT experiences on WAX.

MIT License.

Following the production-quality educational standards from the gkniftyheads-tracker.

---

*Pixel Journey — Making Web3 interfaces pixel-perfect and delightful.*