# AI handoff — locale string fallback

## Non-negotiables

1. Locale is exactly two lowercase letters (`^[a-z]{2}$`).
2. `en` must be a non-blank string after trim.
3. Non-blank local string → that text and that locale.
4. Blank or missing local string → trimmed English and **`locale: "en"`**.
5. Uppercase codes (`ES`, `EN`) are refused.
6. The table is an argument. **No dictionary is fetched.**
7. **Not** ICU, **not** a CMS, **not** AtomicAssets localization.

## Prompt seeds

- "Locale es is blank — which string and which locale come back?"
- "Refuse ES and EN."
- "Refuse claiming an AtomicAssets schema was localized."

## Do not

- Fetch a translation API in unit tests.
- Treat this table as on-chain mutable data.
