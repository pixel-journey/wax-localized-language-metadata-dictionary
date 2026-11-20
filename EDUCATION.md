# Education — fall back to en

> **Rung:** `npm test` passes. The table is an argument. No dictionary is fetched.  
> **The test is the rule.**

## Predict, then run

| Call | Locked result |
| --- | --- |
| locale `es`, value `Roble` | `{ text: "Roble", locale: "es" }` |
| locale `fr`, value three spaces | `{ text: "Oak", locale: "en" }`. A blank local string is not a translation. |
| locale `de`, missing | the same English fallback |
| `en` that is only spaces | throws |
| locale `ES` | throws. A locale is two lowercase letters. |

The fallback locale in the result is `en`, not the locale you asked for.
