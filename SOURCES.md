# Sources

| Source | Use |
| --- | --- |
| [docs.wax.io](https://docs.wax.io/) | WAX / AtomicAssets product context |

## Product facts locked by tests

- Locale is exactly two lowercase letters.
- `en` must be a non-blank string (after trim).
- Non-blank local string → that text and that locale.
- Blank or missing local string → trimmed English and **`locale: "en"`**.
- The table is an argument. **No dictionary is fetched.**
