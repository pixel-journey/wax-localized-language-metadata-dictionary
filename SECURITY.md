# Security — locale phrase fallback

## Closed in tests

| Issue | Behavior |
| --- | --- |
| Locale not two lowercase letters | throws |
| Blank or missing `en` | throws |
| Blank or missing local string | fall back to trimmed `en`, result locale `en` |

## Not closed (production)

| Concern | Guidance |
| --- | --- |
| Source of the table | Arguments are not a CMS or IPFS fetch |
| XSS | Titles/strings are not escaped for HTML here |
| Completeness | Missing locales silently fall back |

## Attack angles

1. Shipping whitespace as a "translated" string.  
2. Uppercase locale codes accepted by a looser port.  
3. Claiming AtomicAssets returned this table.

## Honesty limits

No network. No wasm. [docs.wax.io](https://docs.wax.io/).
