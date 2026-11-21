# Security — locale phrase fallback

## Closed in tests

| Issue | Behavior |
| --- | --- |
| Locale not two lowercase letters | throws |
| Blank or missing `en` | throws |
| Blank or missing local string | fall back to trimmed `en`, result locale **`en`** |
| Uppercase `ES` / `EN` | throws |

## Not closed (production)

| Concern | Guidance |
| --- | --- |
| Source of the table | Arguments are not a CMS or IPFS fetch |
| XSS | Titles/strings are not escaped for HTML here |
| Completeness | Missing locales silently fall back |
| ICU / plurals | Not this product |

## Attack angles

1. Shipping whitespace as a "translated" string.  
2. Uppercase locale codes accepted by a looser port.  
3. Claiming AtomicAssets returned this table.  
4. Returning `locale: "fr"` while the text is English.  
5. Accepting `en-US` style tags without a dedicated path.

## Honesty limits

No network. No wasm. Not a live i18n pack.

| Sibling | Distinction |
| --- | --- |
| [localized metadata overlay](https://github.com/pixel-journey/wax-localized-metadata-overlay) | Product UI layer (if present) |

[docs.wax.io](https://docs.wax.io/).
