# Education — fall back to en

> **Rung:** `npm test` passes. The table is an argument. No dictionary is fetched.  
> **The test is the rule.** Official context: [docs.wax.io](https://docs.wax.io/) (AtomicAssets metadata is often multi-language in product UIs; this lab does not call AtomicAssets).

## Learning outcomes

| Level | After this file |
| --- | --- |
| Beginner | Show Spanish text and French blank fallback |
| Intermediate | Explain locale shape and why blank is not a translation |
| Masterclass | Refuse to call this a live i18n pack |

---

## Beginner — one scene

| Call | Locked result |
| --- | --- |
| locale `es`, value `Roble` | `{ text: "Roble", locale: "es" }` |
| locale `fr`, value three spaces | `{ text: "Oak", locale: "en" }`. A blank local string is not a translation. |
| locale `de`, missing | the same English fallback |
| `en` that is only spaces | throws |
| locale `ES` | throws. A locale is two lowercase letters. |

The fallback locale in the result is **`en`**, not the locale you asked for.

```bash
npm test
```

---

## Intermediate — rules

| Rule | Detail |
| --- | --- |
| Locale | exactly two lowercase letters (`^[a-z]{2}$`) |
| English row | required and non-blank after trim |
| Local row | used only if non-blank after trim |
| Missing locale key | fall back to `en` |

Whitespace-only French is treated as missing. The returned `locale` field reports which row was actually used.

---

## Masterclass

### Common mistakes

1. Returning `locale: "fr"` while the text is English. This lab reports `en` when it falls back.  
2. Accepting `ES` or `en-US`. Only two lowercase letters.  
3. Treating a space string as a valid translation.  
4. Fetching a remote dictionary and citing this file as the client.

### What this is not

- ICU / plural rules
- A CMS or IPFS dictionary load
- AtomicAssets schema localization

### Exercises

1. `fr` with only spaces — text and locale? (`Oak`, `en`.)  
2. Does `EN` succeed? (No.)  
3. Must `en` exist when the user asked for `es`? (Yes.)

---

## What this course will not teach

- Network fetches of locale packs
- Right-to-left layout
- That metadata on-chain is automatically multi-language
