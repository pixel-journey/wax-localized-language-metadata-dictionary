# Sources

| Source | Use |
| --- | --- |
| [docs.wax.io](https://docs.wax.io/) | WAX / AtomicAssets product context |
| [SECURITY.md](SECURITY.md) | Non-claims |

## Product facts locked by tests

- Locale is exactly two lowercase letters (`^[a-z]{2}$`).
- `en` must be a non-blank string (after trim).
- Non-blank local string → that text and that locale.
- Blank or missing local string → trimmed English and **`locale: "en"`**.
- Uppercase codes (`ES`, `EN`) refused.
- The table is an argument. **No dictionary is fetched.**
- **Not** ICU, **not** a CMS, **not** AtomicAssets localization.
